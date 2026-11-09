'use client';
import { useEffect, useRef, useState } from 'react';

const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const fmt = (k) => { const [, m, d] = k.split('-').map(Number); return `${d} ${MON[m - 1]}`; };

/** 30-day line chart (plain SVG, no library). */
export default function Chart({ series }) {
  const box = useRef(null);
  const [size, setSize] = useState({ W: 0, H: 0 });
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const el = box.current;
    const measure = () => setSize({ W: el.clientWidth, H: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const keys = Object.keys(series);
  const vals = keys.map((k) => series[k]);
  const { W, H } = size;
  let svg = null;

  if (W > 0 && H > 0 && keys.length) {
    const pad = { l: 30, r: 10, t: 12, b: 26 };
    const step = Math.ceil(Math.max(4, ...vals) / 4);
    const top = step * 4;
    const x = (i) => pad.l + (i * (W - pad.l - pad.r)) / Math.max(1, keys.length - 1);
    const y = (v) => pad.t + (H - pad.t - pad.b) * (1 - v / top);
    const pts = vals.map((v, i) => [x(i), y(v)]);
    const line = pts.map((pt, i) => (i ? 'L' : 'M') + pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join('');
    const area = `${line}L${x(keys.length - 1)},${y(0)}L${x(0)},${y(0)}Z`;
    const ticks = [0, 7, 14, 21, keys.length - 1];

    const onMove = (ev) => {
      const rect = ev.currentTarget.getBoundingClientRect();
      const mx = ((ev.clientX - rect.left) / rect.width) * W;
      const i = Math.max(0, Math.min(keys.length - 1, Math.round(((mx - pad.l) / (W - pad.l - pad.r)) * (keys.length - 1))));
      setHover({ i, px: pts[i][0], py: pts[i][1] });
    };

    svg = (
      <>
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
          <defs>
            <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#ef4444" stopOpacity=".18" /><stop offset="1" stopColor="#ef4444" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g className="grid">
            {[0, 1, 2, 3, 4].map((g) => <line key={g} x1={pad.l} x2={W - pad.r} y1={y(step * g)} y2={y(step * g)} />)}
          </g>
          <g className="axis">
            {[0, 1, 2, 3, 4].map((g) => <text key={g} x={pad.l - 8} y={y(step * g) + 4} textAnchor="end">{step * g}</text>)}
            {ticks.map((i) => (
              <text key={'x' + i} x={x(i)} y={H - 6} textAnchor={i === 0 ? 'start' : i === keys.length - 1 ? 'end' : 'middle'}>{fmt(keys[i])}</text>
            ))}
          </g>
          <path d={area} fill="url(#lg)" />
          <path d={line} fill="none" stroke="#dc2626" strokeWidth="2.25" strokeLinejoin="round" strokeLinecap="round" />
          {hover && (
            <>
              <line x1={hover.px} x2={hover.px} y1={pad.t} y2={y(0)} stroke="#fecaca" strokeDasharray="3 3" />
              <circle cx={hover.px} cy={hover.py} r="4.5" fill="#fff" stroke="#dc2626" strokeWidth="2.25" />
            </>
          )}
        </svg>
        <div className="chart-tip" style={hover ? { left: hover.px, top: hover.py, opacity: 1 } : { opacity: 0 }}>
          {hover && <><b>{vals[hover.i]}</b> lead{vals[hover.i] === 1 ? '' : 's'} · {fmt(keys[hover.i])}</>}
        </div>
      </>
    );
  }

  return <div className="chart" ref={box}>{svg}</div>;
}
