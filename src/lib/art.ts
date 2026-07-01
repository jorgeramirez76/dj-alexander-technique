// Deterministic, license-free cover-art gradient generator.
// Same input string always yields the same gradient — used as a placeholder
// for release artwork where cover-art licensing is unclear.

function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function coverGradient(seed: string): {
  background: string;
  angle: number;
  hueA: number;
  hueB: number;
} {
  const h = hash(seed);
  const hueA = h % 360;
  const hueB = (hueA + 50 + ((h >> 8) % 90)) % 360;
  const angle = (h >> 4) % 360;
  // Vivid duotone club palette with an acid pop — bright enough to carry
  // large legible initials.
  const c1 = `hsl(${hueA} 68% 20%)`;
  const c2 = `hsl(${hueB} 80% 38%)`;
  const c3 = `hsl(${(hueA + 170) % 360} 95% 55%)`;
  return {
    background: `radial-gradient(130% 130% at 22% 12%, ${c3}55 0%, transparent 52%), radial-gradient(120% 120% at 85% 90%, #c8ff0022 0%, transparent 40%), linear-gradient(${angle}deg, ${c1} 0%, ${c2} 100%)`,
    angle,
    hueA,
    hueB,
  };
}

export function initials(title: string): string {
  const words = title.replace(/[^\p{L}\p{N} ]/gu, "").trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}
