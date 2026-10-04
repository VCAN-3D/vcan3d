import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { QUOTE_URL } from "@/lib/data";

export default function CTA() {
  return (
    <section className="container-x pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#f38b2e] px-6 py-16 text-center text-white shadow-[0_18px_45px_-24px_rgba(243,139,46,0.9)] sm:py-20">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full border-2 border-dashed border-white/25" />
          <div className="absolute -bottom-12 -right-8 h-52 w-52 rounded-full border-2 border-dashed border-white/25" />
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <h2 className="relative font-display text-3xl font-extrabold sm:text-5xl md:text-6xl">Ready to Build Your Idea?</h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-xl">
            Send your design files or tell us about your project. Get a detailed quote and fast turnaround from VCAN 3D, Chennai.
          </p>
          <a
            href={QUOTE_URL}
            target="_blank"
            rel="noopener"
            className="btn group relative mt-8 bg-white !px-10 !py-4 text-base font-bold uppercase tracking-wide text-[#1f2937] shadow-[0_16px_35px_-18px_rgba(15,23,42,0.9)] hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-20px_rgba(15,23,42,0.9)]"
          >
            Request a Quote
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
