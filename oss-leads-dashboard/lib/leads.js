import 'server-only';
import { createHash } from 'node:crypto';
import { query } from './db';
import { TZ } from './config';

/** Map a free-form field label to a standard key (or null). */
export function classifyLabel(label) {
  const l = String(label).toLowerCase().replace(/^[\s*:-]+|[\s*:-]+$/g, '');
  if (!l) return null;
  if (/e-?mail/.test(l)) return 'email';
  if (/phone|mobile|\btel\b|telephone|whats\s?app|contact (no|number)|cell/.test(l)) return 'phone';
  if (/company|organi[sz]ation|business|firm|brand/.test(l)) return 'company';
  if (/^first\s*name|^fname/.test(l)) return 'first_name';
  if (/^last\s*name|^lname|surname/.test(l)) return 'last_name';
  if (/name/.test(l)) return 'name';
  if (/service|interested|product|requirement type|budget for|looking for/.test(l)) return 'service';
  if (/message|comment|enquir|inquir|requirement|detail|query|questions?|help|description|notes?|project/.test(l)) return 'message';
  if (/^subject$|^topic$/.test(l)) return 'form_subject';
  return null;
}

/** Pull standard lead attributes out of [label, value] pairs. */
export function fieldsToLead(fields) {
  const lead = { name: '', email: '', phone: '', company: '', service: '', message: '', form_subject: '' };
  let first = '', last = '';
  for (const [label, value] of fields) {
    const k = classifyLabel(label);
    if (!k) continue;
    if (k === 'first_name') { first ||= value; continue; }
    if (k === 'last_name') { last ||= value; continue; }
    if (k === 'email') {
      const m = !lead.email && value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
      if (m) lead.email = m[0].toLowerCase();
      continue;
    }
    if (!lead[k]) lead[k] = value;
    else if (k === 'message') lead[k] += `\n${label}: ${value}`;
  }
  if (!lead.name && (first || last)) lead.name = `${first} ${last}`.trim();
  return lead;
}

/** Turn any submitted object into ordered [label, value] fields. */
export function toFields(data) {
  // Elementor-style nesting: { fields: { id: { title, value } } }
  if (data && typeof data.fields === 'object' && data.fields) {
    const flat = {};
    for (const [k, f] of Object.entries(data.fields)) {
      flat[f && typeof f === 'object' ? (f.title ?? k) : k] = f && typeof f === 'object' ? (f.value ?? '') : f;
    }
    const { fields, ...rest } = data;
    data = { ...flat, ...rest };
  }
  const out = [];
  for (const [k, v] of Object.entries(data || {})) {
    if (k === 'key' || k === 'client') continue;
    const val = Array.isArray(v) ? v.map(String).join(', ') : v == null ? '' : typeof v === 'object' ? JSON.stringify(v) : String(v);
    const label = String(k).replace(/[_-]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    if (val.trim()) out.push([label, val.trim()]);
  }
  return out;
}

const cut = (s, n) => (s ? String(s).slice(0, n) : null);

/** Store a submission. Returns the new id, or 0 if it was a duplicate. */
export async function saveLead(fields, origin) {
  const lead = fieldsToLead(fields);
  const body = fields.map(([l, v]) => `${l}: ${v}`).join('\n');
  const message = lead.message || body;

  // Same person + same message within 30 minutes = same submission (double click on Send).
  if (lead.email && message.trim()) {
    const dup = await query(
      `SELECT id FROM leads WHERE email = $1 AND trim(message) = $2 AND received_at > now() - interval '30 minutes' LIMIT 1`,
      [lead.email, message.trim()]
    );
    if (dup.length) return 0;
  }
  const uniq = 'w:' + createHash('sha1').update(body + Math.floor(Date.now() / 60000)).digest('hex');
  const rows = await query(
    `INSERT INTO leads (uniq, name, email, phone, company, service, subject, message, fields, origin, body)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) ON CONFLICT (uniq) DO NOTHING RETURNING id`,
    [uniq, cut(lead.name, 190), cut(lead.email, 190), cut(lead.phone, 80), cut(lead.company, 190), cut(lead.service, 255),
      lead.form_subject || 'Website form submission', message, JSON.stringify(fields), cut(origin, 255), body]
  );
  return rows[0]?.id ?? 0;
}

export function parseFields(json) {
  try { const f = JSON.parse(json || '[]'); return Array.isArray(f) ? f : []; } catch { return []; }
}

const isDay = (s) => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s);

/** WHERE clause + params for search / date filters (used by list and export). */
export function leadFilters({ q, from, to } = {}) {
  const where = ['1=1'];
  const p = [];
  const add = (v) => { p.push(v); return `$${p.length}`; };
  q = String(q || '').trim();
  if (q) {
    const ph = add(`%${q}%`);
    where.push(`(name ILIKE ${ph} OR email ILIKE ${ph} OR phone ILIKE ${ph} OR message ILIKE ${ph} OR company ILIKE ${ph} OR subject ILIKE ${ph})`);
  }
  if (isDay(from)) where.push(`received_at >= (${add(from)}::date)::timestamp AT TIME ZONE ${add(TZ)}`);
  if (isDay(to)) where.push(`received_at < ((${add(to)}::date + 1))::timestamp AT TIME ZONE ${add(TZ)}`);
  return { where: where.join(' AND '), params: p };
}

export function pickFilters(sp) {
  const f = {};
  for (const k of ['q', 'from', 'to']) if (typeof sp?.[k] === 'string' && sp[k] !== '') f[k] = sp[k];
  return f;
}
