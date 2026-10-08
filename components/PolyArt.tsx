import type { Palette } from "@/lib/content";

// Deterministic low-poly placeholder art. Rendered at build time, so the same
// seed always gives the same SVG and no client JavaScript is needed.

const W = 400;
const H = 300;

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type RGB = [number, number, number];

const toRgb = (hex: string): RGB => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const mix = (a: RGB, b: RGB, t: number): RGB =>
  [0, 1, 2].map((i) => a[i] + (b[i] - a[i]) * t) as RGB;

const shade = (c: RGB, amt: number): RGB =>
  c.map((v) => Math.max(0, Math.min(255, v + amt * 255))) as RGB;

const css = ([r, g, b]: RGB) => `rgb(${Math.round(r)} ${Math.round(g)} ${Math.round(b)})`;

const r1 = (n: number) => Math.round(n * 10) / 10;

type Props = {
  seed: number;
  palette: Palette;
  cols?: number;
  rows?: number;
  className?: string;
};

export default function PolyArt({ seed, palette, cols = 8, rows = 6, className }: Props) {
  const rand = mulberry32(seed);
  const [c0, c1, c2] = palette.map(toRgb);
  const colour = (t: number) => (t < 0.5 ? mix(c0, c1, t * 2) : mix(c1, c2, (t - 0.5) * 2));

  const cw = W / cols;
  const ch = H / rows;
  const pts: [number, number][][] = [];
  for (let r = 0; r <= rows; r++) {
    const row: [number, number][] = [];
    for (let c = 0; c <= cols; c++) {
      const jx = c === 0 || c === cols ? 0 : (rand() - 0.5) * cw * 0.8;
      const jy = r === 0 || r === rows ? 0 : (rand() - 0.5) * ch * 0.8;
      row.push([c * cw + jx, r * ch + jy]);
    }
    pts.push(row);
  }

  const tris: { d: string; fill: string }[] = [];
  const push = (...p: [number, number][]) => {
    const cx = (p[0][0] + p[1][0] + p[2][0]) / 3;
    const cy = (p[0][1] + p[1][1] + p[2][1]) / 3;
    const t = Math.min(1, Math.max(0, (cx / W) * 0.65 + (cy / H) * 0.35 + (rand() - 0.5) * 0.12));
    const fill = css(shade(colour(t), (rand() - 0.5) * 0.14));
    tris.push({ d: p.map(([x, y]) => `${r1(x)},${r1(y)}`).join(" "), fill });
  };
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const a = pts[r][c], b = pts[r][c + 1], d = pts[r + 1][c], e = pts[r + 1][c + 1];
      if (rand() > 0.5) {
        push(a, b, e);
        push(a, e, d);
      } else {
        push(a, b, d);
        push(b, e, d);
      }
    }
  }

  return (
    <svg
      className={className}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {tris.map((t, i) => (
        <polygon key={i} points={t.d} fill={t.fill} stroke={t.fill} strokeWidth={0.6} />
      ))}
    </svg>
  );
}
