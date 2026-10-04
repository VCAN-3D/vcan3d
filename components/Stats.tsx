import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { STATS } from "@/lib/data";

export default function Stats() {
  return (
    <div className="container-x relative z-20 -mt-20">
      <Reveal>
        <div className="grid grid-cols-2 gap-y-6 rounded-3xl border border-black/5 bg-white p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,.25)] sm:p-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} className={`px-2 text-center ${i < 3 ? "lg:border-r lg:border-black/10" : ""}`}>
              <p className={`font-display text-3xl font-extrabold sm:text-4xl ${i % 2 ? "text-india" : "text-saffron"}`}><CountUp to={s.to} suffix={s.suffix} /></p>
              <p className="mt-1 text-[10px] text-muted sm:text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
