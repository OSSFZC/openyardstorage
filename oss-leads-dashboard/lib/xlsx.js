import 'server-only';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import ExcelJS from 'exceljs';
import { parseFields } from './leads';
import { asLocalUtc, fmtDateTime } from './time';

const RED = 'FFDC2626', INK = 'FF1F2937', GRAY = 'FF6B7280', BAND = 'FFFEF2F2', LINE = 'FFE5E7EB';
const border = { top: { style: 'thin', color: { argb: LINE } }, left: { style: 'thin', color: { argb: LINE } }, bottom: { style: 'thin', color: { argb: LINE } }, right: { style: 'thin', color: { argb: LINE } } };
const STD = /^(your )?(full |first |last )?(name|e-?mail( address)?|phone( number)?|mobile( number)?|message|company( name)?|service)s?$/i;
const colLetter = (n) => { let s = ''; for (n++; n > 0; n = Math.floor((n - 1) / 26)) s = String.fromCharCode(65 + ((n - 1) % 26)) + s; return s; };

/**
 * Branded, client-ready Excel report: logo + title block, red header row,
 * banded rows, wrapped text, real dates, frozen header, filters, print setup.
 * @returns {Promise<Buffer>}
 */
export async function buildLeadsXlsx(leads, { client, period }) {
  const rows = leads.map((l) => ({
    ...l,
    other: parseFields(l.fields).filter(([k]) => !STD.test(String(k).trim())).map(([k, v]) => `${k}: ${v}`).join('\n'),
  }));
  const has = (k) => rows.some((r) => String(r[k] || '').trim() !== '');

  const cols = [
    ['#', 6, 'n'], ['Date', 14, 'date'], ['Time', 11, 'time'], ['Name', 24, 'name'], ['Email', 32, 'email'], ['Phone', 18, 'phone'],
  ];
  if (has('company')) cols.push(['Company', 24, 'company']);
  if (has('service')) cols.push(['Service', 24, 'service']);
  cols.push(['Message', 60, 'message']);
  if (has('other')) cols.push(['Other details', 42, 'other']);
  const last = colLetter(cols.length - 1);
  const HEAD = 6;

  const wb = new ExcelJS.Workbook();
  wb.creator = client;
  wb.title = `${client} - Website Leads Report`;
  wb.created = new Date();
  const ws = wb.addWorksheet('Leads', {
    views: [{ state: 'frozen', ySplit: HEAD, topLeftCell: `A${HEAD + 1}`, activeCell: `A${HEAD + 1}`, showGridLines: false }],
    pageSetup: {
      paperSize: 9, orientation: 'landscape', fitToPage: true, fitToWidth: 1, fitToHeight: 0,
      printTitlesRow: `${HEAD}:${HEAD}`,
      margins: { left: 0.4, right: 0.4, top: 0.5, bottom: 0.6, header: 0.3, footer: 0.3 },
    },
    headerFooter: { oddFooter: `&L&8${client.replace(/&/g, '&&')} - Website Leads&R&8Page &P of &N` },
  });
  ws.columns = cols.map(([, width]) => ({ width }));

  // Title block (logo sits over A1:B4)
  const font = (o) => ({ name: 'Calibri', family: 2, size: 11, color: { argb: INK }, ...o });
  ws.getRow(1).height = 30; ws.getRow(2).height = 20; ws.getRow(3).height = 18; ws.getRow(4).height = 14; ws.getRow(5).height = 6;
  Object.assign(ws.getCell('C1'), { value: client }).font = font({ bold: true, size: 20 });
  Object.assign(ws.getCell('C2'), { value: 'Website Leads Report' }).font = font({ bold: true, size: 13, color: { argb: RED } });
  Object.assign(ws.getCell('C3'), { value: `Generated on ${fmtDateTime(new Date())}   |   ${period}   |   Total leads: ${rows.length}` }).font = font({ size: 10, color: { argb: GRAY } });
  for (const r of [1, 2, 3]) ws.getCell(`C${r}`).alignment = { vertical: 'middle' };
  cols.forEach((_, i) => { ws.getCell(`${colLetter(i)}5`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: RED } }; });

  try {
    const png = await readFile(path.join(process.cwd(), 'public', 'oss-logo.png'));
    const img = wb.addImage({ buffer: png, extension: 'png' });
    ws.addImage(img, { tl: { col: 0.05, row: 0.02 }, ext: { width: 128, height: 94 }, editAs: 'oneCell' });
  } catch { /* report still works without the logo */ }

  // Header row
  const head = ws.getRow(HEAD);
  head.height = 26;
  cols.forEach(([title], i) => {
    const c = head.getCell(i + 1);
    c.value = title;
    c.font = font({ bold: true, color: { argb: 'FFFFFFFF' } });
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: RED } };
    c.alignment = { horizontal: 'left', vertical: 'middle', indent: 1 };
    c.border = border;
  });

  // Data rows
  rows.forEach((r, n) => {
    const row = ws.getRow(HEAD + 1 + n);
    const band = n % 2 === 1;
    const local = asLocalUtc(r.received_at);
    let lines = 1;
    for (const [, width, key] of cols) {
      if (!['message', 'other', 'name', 'company', 'service'].includes(key)) continue;
      const chars = Math.max(10, Math.floor(width * 1.1));
      lines = Math.max(lines, String(r[key] || '').split('\n').reduce((a, part) => a + Math.max(1, Math.ceil(part.length / chars)), 0));
    }
    row.height = Math.max(22, lines * 15 + 7);

    cols.forEach(([, , key], i) => {
      const c = row.getCell(i + 1);
      c.border = border;
      if (band) c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: BAND } };
      c.font = font({});
      c.alignment = { vertical: 'top', wrapText: true };
      switch (key) {
        case 'n':
          c.value = n + 1; c.font = font({ size: 10, color: { argb: GRAY } }); c.alignment = { horizontal: 'center', vertical: 'top' }; break;
        case 'date':
          c.value = local; c.numFmt = 'dd mmm yyyy'; c.alignment = { horizontal: 'left', vertical: 'top' }; break;
        case 'time':
          c.value = local; c.numFmt = 'hh:mm AM/PM'; c.alignment = { horizontal: 'left', vertical: 'top' }; break;
        case 'name':
          c.value = r.name || ''; c.font = font({ bold: true }); break;
        default:
          c.value = String(r[key] || '');
      }
    });
  });

  if (rows.length) {
    ws.autoFilter = `A${HEAD}:${last}${HEAD + rows.length}`;
  } else {
    const c = ws.getCell(`A${HEAD + 1}`);
    c.value = 'No leads in this period.';
    c.font = font({ size: 10, color: { argb: GRAY } });
    ws.getRow(HEAD + 1).height = 24;
  }

  return Buffer.from(await wb.xlsx.writeBuffer());
}

/**
 * Marketing report: every dataset on the Marketing page, one sheet per table
 * (Summary, Leads, Google Analytics, Search Console, Tag Manager).
 * Sections that are not connected / failed are listed on the Summary sheet and skipped.
 * @returns {Promise<Buffer>}
 */
export async function buildMarketingXlsx(data, { client }) {
  const { days, leads, ga4, gsc, gtm } = data;
  const wb = new ExcelJS.Workbook();
  wb.creator = client;
  wb.title = `${client} - Marketing Report`;
  wb.created = new Date();

  const font = (o) => ({ name: 'Calibri', family: 2, size: 11, color: { argb: INK }, ...o });
  const fill = (argb) => ({ type: 'pattern', pattern: 'solid', fgColor: { argb } });
  const FORMATS = { int: '#,##0', dec: '#,##0.0', pct: '0.0%', pctchg: '+0.0%;-0.0%;0.0%', dur: '[h]:mm:ss' };

  /**
   * One branded sheet. cols: [header, width, getter(row), format?]
   * Numbers stay real numbers so they can be sorted, filtered and summed in Excel.
   */
  function addSheet(name, title, cols, rows, empty = 'No data for this period.') {
    const HEAD = 4;
    const ws = wb.addWorksheet(name.slice(0, 31), {
      views: [{ state: 'frozen', ySplit: HEAD, topLeftCell: `A${HEAD + 1}`, activeCell: `A${HEAD + 1}`, showGridLines: false }],
      pageSetup: { paperSize: 9, orientation: 'landscape', fitToPage: true, fitToWidth: 1, fitToHeight: 0, printTitlesRow: `${HEAD}:${HEAD}` },
    });
    ws.columns = cols.map(([, width]) => ({ width }));
    ws.getRow(1).height = 26;
    Object.assign(ws.getCell('A1'), { value: title }).font = font({ bold: true, size: 15, color: { argb: RED } });
    Object.assign(ws.getCell('A2'), { value: `${client}   |   Last ${days} days   |   Generated on ${fmtDateTime(new Date())}` }).font = font({ size: 10, color: { argb: GRAY } });
    ws.getRow(HEAD).height = 24;
    cols.forEach(([header, , , format], i) => {
      const c = ws.getRow(HEAD).getCell(i + 1);
      c.value = header;
      c.font = font({ bold: true, color: { argb: 'FFFFFFFF' } });
      c.fill = fill(RED);
      c.alignment = { horizontal: format ? 'right' : 'left', vertical: 'middle', indent: 1 };
      c.border = border;
    });
    rows.forEach((r, n) => {
      const row = ws.getRow(HEAD + 1 + n);
      cols.forEach(([, , get, format], i) => {
        const c = row.getCell(i + 1);
        const v = get(r);
        c.value = v == null || (typeof v === 'number' && !isFinite(v)) ? '' : v;
        c.border = border;
        c.font = font({});
        if (n % 2 === 1) c.fill = fill(BAND);
        c.alignment = { vertical: 'top', horizontal: format ? 'right' : 'left', wrapText: !format };
        if (format) c.numFmt = FORMATS[format];
      });
    });
    if (rows.length) ws.autoFilter = `A${HEAD}:${colLetter(cols.length - 1)}${HEAD + rows.length}`;
    else Object.assign(ws.getCell(`A${HEAD + 1}`), { value: empty }).font = font({ size: 10, color: { argb: GRAY } });
    return ws;
  }

  // ---- Summary ----
  const kpi = (section, metric, t, format, invert) => ({ section, metric, value: t.value, previous: t.previous, change: t.change, format, invert });
  const summary = [];
  if (leads?.status === 'ok') {
    summary.push({ section: 'Leads', metric: 'Leads', value: leads.total, previous: leads.previous, change: leads.change == null ? null : leads.change / 100, format: 'int' });
    for (const c of leads.channels) summary.push({ section: 'Leads', metric: `Leads · ${c.label}`, value: c.leads, format: 'int' });
  }
  if (ga4?.status === 'ok') {
    const t = ga4.totals;
    summary.push(
      kpi('Google Analytics 4', 'Visitors (active users)', t.activeUsers, 'int'),
      kpi('Google Analytics 4', 'New visitors', t.newUsers, 'int'),
      kpi('Google Analytics 4', 'Sessions', t.sessions, 'int'),
      kpi('Google Analytics 4', 'Page views', t.screenPageViews, 'int'),
      kpi('Google Analytics 4', 'Key events', t.keyEvents, 'int'),
      kpi('Google Analytics 4', 'Engagement rate', t.engagementRate, 'pct'),
      kpi('Google Analytics 4', 'Avg. session duration (seconds)', t.averageSessionDuration, 'dec'),
    );
  }
  if (gsc?.status === 'ok') {
    const t = gsc.totals;
    summary.push(
      kpi('Search Console', 'Clicks from Google', t.clicks, 'int'),
      kpi('Search Console', 'Impressions', t.impressions, 'int'),
      kpi('Search Console', 'Click-through rate', t.ctr, 'pct'),
      kpi('Search Console', 'Average position (lower is better)', t.position, 'dec'),
    );
  }
  // Percent-change from the API is in percent units (12.3); Excel's % format wants a fraction.
  for (const s of summary) if (s.change != null && s.section !== 'Leads') s.change /= 100;

  const ws0 = addSheet('Summary', 'Marketing Summary', [
    ['Source', 22, (r) => r.section],
    ['Metric', 38, (r) => r.metric],
    ['This period', 16, (r) => r.value, 'dec'],
    ['Previous period', 16, (r) => r.previous, 'dec'],
    ['Change', 12, (r) => r.change, 'pctchg'],
  ], summary, 'No connected data sources yet.');
  // Whole numbers where the metric is a count; percentages for rates.
  summary.forEach((s, n) => {
    const fmt = FORMATS[s.format] || FORMATS.dec;
    for (const col of [3, 4]) ws0.getRow(5 + n).getCell(col).numFmt = fmt;
  });
  const states = [['Leads by source', leads], ['Google Analytics 4', ga4], ['Search Console', gsc], ['Tag Manager', gtm]]
    .filter(([, s]) => s && s.status !== 'ok');
  if (states.length) {
    let r = 5 + summary.length + 1;
    Object.assign(ws0.getCell(`A${r++}`), { value: 'Not included in this report' }).font = font({ bold: true });
    for (const [name, s] of states) {
      const why = s.status === 'setup' ? `Not connected yet (missing: ${(s.missing || []).join(', ')})` : `Could not be loaded: ${s.error || 'unknown error'}`;
      ws0.getCell(`A${r}`).value = name; ws0.getCell(`B${r}`).value = why;
      ws0.getCell(`A${r}`).font = font({}); ws0.getCell(`B${r}`).font = font({ color: { argb: GRAY } });
      r++;
    }
  }

  // ---- Leads ----
  if (leads?.status === 'ok') {
    addSheet('Leads by channel', 'Leads by Channel', [['Channel', 28, (r) => r.label], ['Leads', 14, (r) => r.leads, 'int']], leads.channels);
    addSheet('Leads per day', 'Leads per Day', [['Date', 16, (r) => r.date], ['Leads', 14, (r) => r.leads, 'int']], leads.daily);
    if (leads.campaigns.length) addSheet('Lead campaigns', 'Lead Campaigns (utm_campaign)', [['Campaign', 40, (r) => r.label], ['Leads', 14, (r) => r.leads, 'int']], leads.campaigns);
  }

  // ---- Google Analytics 4 ----
  if (ga4?.status === 'ok') {
    addSheet('GA4 daily', 'Google Analytics - Daily', [['Date', 16, (r) => r.date], ['Sessions', 14, (r) => r.sessions, 'int'], ['Visitors', 14, (r) => r.users, 'int']], ga4.daily);
    addSheet('GA4 channels', 'Google Analytics - Traffic Channels', [
      ['Channel', 28, (r) => r.label], ['Sessions', 14, (r) => r.sessions, 'int'], ['Visitors', 14, (r) => r.activeUsers, 'int'],
      ['Key events', 14, (r) => r.keyEvents, 'int'], ['Engagement rate', 16, (r) => r.engagementRate, 'pct'],
    ], ga4.channels);
    addSheet('GA4 sources', 'Google Analytics - Sources', [['Source', 32, (r) => r.label], ['Sessions', 14, (r) => r.sessions, 'int'], ['Key events', 14, (r) => r.keyEvents, 'int']], ga4.sources);
    addSheet('GA4 pages', 'Google Analytics - Most Viewed Pages', [
      ['Page', 54, (r) => r.label], ['Views', 14, (r) => r.screenPageViews, 'int'], ['Visitors', 14, (r) => r.activeUsers, 'int'],
      ['Avg. session (sec)', 18, (r) => r.averageSessionDuration, 'dec'],
    ], ga4.pages);
    addSheet('GA4 landing pages', 'Google Analytics - Landing Pages', [
      ['Landing page', 54, (r) => r.label], ['Sessions', 14, (r) => r.sessions, 'int'], ['Key events', 14, (r) => r.keyEvents, 'int'], ['Engagement rate', 16, (r) => r.engagementRate, 'pct'],
    ], ga4.landingPages);
    addSheet('GA4 devices', 'Google Analytics - Devices', [['Device', 24, (r) => r.label], ['Sessions', 14, (r) => r.sessions, 'int'], ['Visitors', 14, (r) => r.activeUsers, 'int']], ga4.devices);
    addSheet('GA4 cities', 'Google Analytics - Top Cities', [['City', 28, (r) => r.label], ['Visitors', 14, (r) => r.activeUsers, 'int'], ['Sessions', 14, (r) => r.sessions, 'int']], ga4.cities);
    addSheet('GA4 events', 'Google Analytics - Events', [['Event', 34, (r) => r.label], ['Count', 14, (r) => r.eventCount, 'int'], ['Users', 14, (r) => r.totalUsers, 'int']], ga4.events);
  }

  // ---- Search Console ----
  if (gsc?.status === 'ok') {
    const q = (first, width) => [
      [first, width, (r) => r.key], ['Clicks', 12, (r) => r.clicks, 'int'], ['Impressions', 14, (r) => r.impressions, 'int'],
      ['CTR', 12, (r) => r.ctr, 'pct'], ['Avg. position', 14, (r) => r.position, 'dec'],
    ];
    addSheet('GSC daily', 'Search Console - Daily', [['Date', 16, (r) => r.date], ['Clicks', 12, (r) => r.clicks, 'int'], ['Impressions', 14, (r) => r.impressions, 'int']], gsc.daily);
    addSheet('GSC queries', 'Search Console - Top Search Terms', q('Search term', 50), gsc.queries);
    addSheet('GSC opportunities', 'Search Console - Opportunities (position 4-20, 10+ impressions)', q('Search term', 50), gsc.opportunities);
    addSheet('GSC pages', 'Search Console - Top Pages', q('Page', 54), gsc.pages.map((r) => ({ ...r, key: r.key.replace(/^https?:\/\/[^/]+/, '') || '/' })));
    addSheet('GSC devices', 'Search Console - Devices', q('Device', 24), gsc.devices);
  }

  // ---- Tag Manager ----
  if (gtm?.status === 'ok') {
    const rows = [
      ['Container', gtm.gtmId], ['Published', gtm.published ? 'Yes' : 'No'], ['Installed on live home page', gtm.onSite ? 'Yes' : 'No'],
      ['GA4 measurement IDs', gtm.measurementIds.join(', ') || 'none'], ['Google Ads IDs', gtm.adsIds.join(', ') || 'none'],
      ['GA4 event tags', gtm.events.join(', ') || 'none'], ['Issues', gtm.issues.join('\n') || 'None'],
    ];
    addSheet('Tag Manager', 'Tag Manager Health Check', [['Check', 32, (r) => r[0]], ['Result', 70, (r) => r[1]]], rows);
  }

  return Buffer.from(await wb.xlsx.writeBuffer());
}
