import { TZ } from './config';

const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/** Wall-clock parts of a date in the dashboard time zone. */
export function parts(d) {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone: TZ, year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric', weekday: 'short', hourCycle: 'h23',
    }).formatToParts(new Date(d)).map((x) => [x.type, x.value])
  );
  return {
    y: +p.year, m: +p.month, d: +p.day, h: +p.hour, i: +p.minute, s: +p.second,
    wd: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday),
  };
}

const pad = (n) => String(n).padStart(2, '0');
const h12 = (h) => `${pad(h % 12 || 12)}`;
const ampm = (h) => (h < 12 ? 'AM' : 'PM');

export const ymd = (d) => { const p = parts(d); return `${p.y}-${pad(p.m)}-${pad(p.d)}`; };
export const fmtDate = (d) => { const p = parts(d); return `${pad(p.d)} ${MON[p.m - 1]} ${p.y}`; };
export const fmtTime = (d) => { const p = parts(d); return `${h12(p.h)}:${pad(p.i)} ${ampm(p.h)}`; };
export const fmtDateTime = (d) => `${fmtDate(d)}, ${fmtTime(d)}`;
export const fmtLong = (d) => { const p = parts(d); return `${DAY[p.wd]}, ${fmtDate(d)} · ${fmtTime(d)}`; };
export const fmtDayMonth = (s) => { const [, m, d] = s.split('-').map(Number); return `${d} ${MON[m - 1]}`; };
export const fmtYmd = (s) => { const [y, m, d] = s.split('-').map(Number); return `${pad(d)} ${MON[m - 1]} ${y}`; };

/** Today's date (YYYY-MM-DD) in the dashboard time zone, shifted by `days`. */
export function todayYmd(days = 0) {
  const p = parts(Date.now());
  const t = new Date(Date.UTC(p.y, p.m - 1, p.d + days));
  return t.toISOString().slice(0, 10);
}

/**
 * Date whose UTC fields equal the local wall-clock time.
 * Excel has no time zones, so this makes the sheet show local time.
 */
export function asLocalUtc(d) {
  const p = parts(d);
  return new Date(Date.UTC(p.y, p.m - 1, p.d, p.h, p.i, p.s));
}

export function timeAgo(d) {
  const diff = (Date.now() - new Date(d).getTime()) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return fmtDate(d);
}

export function initials(name) {
  const n = String(name || '').trim();
  if (!n) return '?';
  const w = n.split(/\s+/);
  return ((w[0][0] || '') + (w.length > 1 ? w[w.length - 1][0] : '')).toUpperCase();
}
