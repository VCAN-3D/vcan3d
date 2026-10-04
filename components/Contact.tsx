"use client";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";
import { SERVICES, SITE } from "@/lib/data";

const field = "w-full rounded-xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none transition focus:border-saffron focus:bg-white focus:ring-4 focus:ring-saffron/15";

export default function Contact() {
  const [f, setF] = useState({ name: "", phone: "", service: SERVICES[0].title, msg: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}\n\n${f.msg}`;
    window.location.href = `mailto:${SITE.emails[0]}?subject=${encodeURIComponent("Quote request - " + f.service)}&body=${encodeURIComponent(body)}`;
  };
  const cards = [
    { icon: <Mail size={22} />, title: "Email", lines: SITE.emails.map((m) => ({ t: m, h: `mailto:${m}` })) },
    { icon: <Phone size={22} />, title: "Phone", lines: [{ t: SITE.phone, h: SITE.phoneHref }] },
    { icon: <MapPin size={22} />, title: "Location", lines: [{ t: SITE.address, h: SITE.maps }] },
  ];
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <div className="tricolor-bar mx-auto" />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="space-y-5">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1} x={-30} y={0}>
                <div className="group flex gap-5 rounded-3xl border border-black/5 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <span className={`grid h-14 w-14 flex-none place-items-center rounded-2xl text-white transition-transform duration-500 group-hover:rotate-12 ${i % 2 ? "bg-india" : "bg-saffron"}`}>{c.icon}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{c.title}</h3>
                    {c.lines.map((l) => <a key={l.t} href={l.h} className="block text-sm text-muted transition-colors hover:text-saffron" {...(l.h.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>{l.t}</a>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal x={40} y={0}>
            <form onSubmit={submit} className="rounded-3xl border border-black/5 bg-white p-6 shadow-xl sm:p-9">
              <h3 className="font-display text-2xl font-bold">Request a Quote</h3>
              <p className="mt-1 text-sm text-muted">Send your design files or tell us about your project.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input required placeholder="Your name" value={f.name} onChange={set("name")} className={field} />
                <input required type="tel" placeholder="Phone number" value={f.phone} onChange={set("phone")} className={field} />
                <select value={f.service} onChange={set("service")} className={`${field} sm:col-span-2`}>{SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}</select>
                <textarea required rows={4} placeholder="Tell us about your project" value={f.msg} onChange={set("msg")} className={`${field} resize-none sm:col-span-2`} />
              </div>
              <button type="submit" className="btn btn-saffron group mt-6 w-full sm:w-auto">SEND REQUEST <Send size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" /></button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
