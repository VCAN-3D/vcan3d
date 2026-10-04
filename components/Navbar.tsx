"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { QUOTE_URL } from "@/lib/data";

const links = [["Home", "/"], ["About", "/#about"], ["Services", "/#services"], ["Process", "/#process"], ["Contact", "/#contact"]];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "border-b border-white/10 bg-navy-dark/80 py-2.5 backdrop-blur-xl" : "py-5"}`}>
      <div className="container-x flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/assets/logo.png" alt="VCAN 3D logo" width={44} height={49} className="h-11 w-auto transition-transform duration-500 hover:rotate-[-8deg] hover:scale-110" priority />
          <span className="font-display text-xl font-bold tracking-wide text-white">VCAN <span className="text-saffron">3D</span></span>
        </Link>
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {links.map(([l, h]) => (
            <Link key={l} href={h} className="group relative text-sm font-medium text-white/80 transition-colors hover:text-white">
              {l}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-saffron transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={QUOTE_URL} target="_blank" rel="noopener" className="btn btn-saffron hidden !px-6 !py-2.5 sm:inline-flex">GET A QUOTE</a>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white lg:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "100vh" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden lg:hidden">
            <div className="container-x flex flex-col gap-1 pt-8">
              {links.map(([l, h], i) => (
                <motion.div key={l} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.08 * i + 0.1 }}>
                  <Link href={h} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 font-display text-2xl font-semibold text-white">{l}</Link>
                </motion.div>
              ))}
              <a href={QUOTE_URL} target="_blank" rel="noopener" className="btn btn-saffron mt-8">GET A QUOTE</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
