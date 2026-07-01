"use client";

/**
 * Stylized global-circuit map. City nodes are plotted at their real
 * equirectangular positions over a dot-grid field, connected by a routing line.
 * Decorative but geographically honest (cities from the RA performance history).
 */
const CITIES: { name: string; country: string; lat: number; lon: number }[] = [
  { name: "New York City", country: "USA", lat: 40.71, lon: -74.0 },
  { name: "Detroit", country: "USA", lat: 42.33, lon: -83.05 },
  { name: "Miami", country: "USA", lat: 25.76, lon: -80.19 },
  { name: "New Jersey", country: "USA", lat: 40.06, lon: -74.4 },
  { name: "London", country: "UK", lat: 51.5, lon: -0.12 },
  { name: "Barcelona", country: "ES", lat: 41.39, lon: 2.17 },
];

// Focus the projection on the North Atlantic (his actual circuit) so the
// nodes spread nicely instead of clustering on a full world map.
const LON_MIN = -95, LON_MAX = 15, LAT_MIN = 18, LAT_MAX = 58;
const px = (lon: number) => ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * 100;
const py = (lat: number) => ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * 100;

export function TourMap() {
  const pts = CITIES.map((c) => ({ ...c, x: px(c.lon), y: py(c.lat) }));
  const order = ["Detroit", "New Jersey", "New York City", "Miami", "London", "Barcelona"];
  const route = order
    .map((n) => pts.find((p) => p.name === n))
    .filter(Boolean) as typeof pts;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
      <div
        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-ink-line bg-ink-soft"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_30%_20%,rgba(200,255,0,0.05),transparent_55%)]" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline
            points={route.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke="#c8ff00"
            strokeWidth="0.4"
            strokeOpacity="0.5"
            strokeDasharray="1.5 1.5"
          />
        </svg>
        {pts.map((p) => (
          <div
            key={p.name}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-acid/40" style={{ animationDuration: "2.4s" }} />
            <span className="relative block h-2.5 w-2.5 rounded-full bg-acid shadow-[0_0_10px_rgba(200,255,0,0.9)]" />
            <span className="label-mono absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] text-bone opacity-80">
              {p.name}
            </span>
          </div>
        ))}
      </div>

      <div>
        <div className="label-mono mb-4 text-acid">Global circuit</div>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
          {CITIES.map((c) => (
            <li key={c.name} className="flex items-baseline justify-between border-b border-ink-line pb-2">
              <span className="text-sm text-bone">{c.name}</span>
              <span className="font-mono text-[10px] text-bone-faint">{c.country}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-bone-faint">
          Cities from the artist&apos;s performance history. Booking worldwide.
        </p>
      </div>
    </div>
  );
}
