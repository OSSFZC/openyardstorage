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
