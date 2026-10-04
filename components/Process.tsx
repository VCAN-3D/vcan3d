"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal x={-40} y={0} className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Our Process</p>
          <h2 className="section-title">Process Advantage</h2>
          <div className="tricolor-bar" />
          <p className="mt-6 text-muted">Our streamlined process ensures that every project is handled with precision and delivered on time. From the initial concept to the final product, we maintain high standards of quality and efficiency.</p>
          <div className="relative mt-8 overflow-hidden rounded-3xl shadow-2xl">
            <Image src="/assets/process-image.png" alt="VCAN 3D manufacturing process - CAD review to finished part delivery in Chennai" width={1280} height={853} className="h-auto w-full transition-transform duration-700 hover:scale-105" />
          </div>
        </Reveal>

        {/* Steps column stretches to the full row height so the last card ends level with the image */}
        <div className="relative flex flex-col pl-2">
          <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: "easeInOut" }} style={{ originY: 0 }} className="absolute bottom-6 left-[31px] top-6 w-0.5 bg-gradient-to-b from-saffron to-india" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} x={40} y={0} className="relative mb-6 flex flex-1 last:mb-0">
              <div className="group flex flex-1 items-center gap-5 rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <span className={`relative z-10 grid h-14 w-14 flex-none place-items-center rounded-full font-display text-lg font-bold text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 ${i % 2 ? "bg-india" : "bg-saffron"}`}>{s.n}</span>
                <div>
                  <h3 className="flex items-center gap-2 font-display text-xl font-bold">{s.title}<span className="text-muted">{s.icon}</span></h3>
                  <p className="mt-1 text-sm text-muted">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}