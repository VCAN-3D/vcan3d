import Reveal from "./Reveal";
import { WHY } from "@/lib/data";

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-24 text-white sm:py-32">
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-saffron/25 blur-[110px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-india/30 blur-[110px]" />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The VCAN Edge</p>
          <h2 className="section-title">Why Choose VCAN 3D?</h2>
          <div className="tricolor-bar mx-auto" />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.1}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[.04] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-saffron/60 hover:bg-white/[.07]">
                <div className="flex items-start gap-5">
                  <span className={`grid h-14 w-14 flex-none place-items-center rounded-2xl text-white transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110 ${i % 2 ? "bg-india" : "bg-saffron"}`}>{w.icon}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{w.text}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
