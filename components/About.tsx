import Image from "next/image";
import { ArrowRight, Check, Factory, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

const points = [
  "Concept development & functional prototyping",
  "Low-volume production with fast turnaround",
  "Strict quality standards, complete customer satisfaction",
];

const features = [
  { title: "Precision-first", text: "High-detail manufacturing for prototypes and production parts.", icon: Sparkles },
  { title: "Fast delivery", text: "Efficient workflows that keep product timelines moving.", icon: Gauge },
  { title: "Quality assurance", text: "Each stage is checked to ensure reliable output and consistency.", icon: ShieldCheck },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,153,51,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(19,136,8,0.18),_transparent_28%)]" />
      <div className="container-x relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal x={-50} y={0}>
            <div>
              <p className="eyebrow text-saffron">About VCAN 3D</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight sm:text-5xl">
                Engineering better products from concept to scale.
              </h2>
              <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-saffron via-white to-india" />

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-300">
                <p>VCAN 3D is a Chennai-based manufacturing partner delivering advanced 3D printing, rapid prototyping, and vacuum casting solutions for modern product teams.</p>
                <p>With over 15 years of experience, we help clients turn ambitious ideas into robust, production-ready parts with speed, precision, and dependable quality.</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="font-display text-3xl font-bold text-saffron">15+</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Years</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="font-display text-3xl font-bold text-white">8</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Services</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="font-display text-3xl font-bold text-india">5</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Industries</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal x={50} y={0}>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -left-6 top-6 h-28 w-28 rounded-full bg-saffron/30 blur-3xl" />
              <div className="absolute -right-5 bottom-6 h-28 w-28 rounded-full bg-india/30 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <Image src="/assets/aboutus.png" alt="VCAN 3D manufacturing facility in Chennai" width={1080} height={722} className="h-[450px] w-full object-cover" />
                </div>
              </div>

              <div className="absolute -bottom-5 left-5 rounded-2xl bg-white p-4 text-slate-900 shadow-2xl">
                <div className="flex items-center gap-2 text-saffron">
                  <Factory className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">Smart manufacturing</span>
                </div>
                <p className="mt-2 text-sm font-medium text-slate-700">From concept validation to low-volume production.</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="mb-4 inline-flex rounded-xl bg-saffron/10 p-2.5 text-saffron">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:p-6">
          <ul className="grid gap-3 md:grid-cols-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm font-medium text-slate-200">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-india text-white">
                  <Check size={14} />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
            <p className="text-sm text-slate-300">Reliable manufacturing support for ambitious ideas and critical product timelines.</p>
            <Link href="/#services" className="inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-3 text-sm font-semibold text-white transition hover:bg-saffron-hover">
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
