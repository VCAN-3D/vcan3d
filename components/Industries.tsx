import { INDUSTRIES } from "@/lib/data";

export default function Industries() {
  const row = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];
  return (
    <section aria-label="Industries We Serve" className="overflow-hidden bg-navy-dark py-14">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-saffron">Industries We Serve</p>
      <div className="group flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
        {row.map((x, i) => (
          <div key={i} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-white transition-colors hover:border-saffron hover:bg-saffron/10">
            <span className={i % 2 ? "text-[#2fbf3a]" : "text-saffron"}>{x.icon}</span>
            <span className="whitespace-nowrap font-display text-lg font-semibold">{x.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
