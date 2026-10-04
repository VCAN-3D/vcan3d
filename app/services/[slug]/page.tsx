import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, MoveUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServicePageEnter from "@/components/ServicePageEnter";
import content from "@/lib/services-content.json";
import { SERVICES, QUOTE_URL } from "@/lib/data";

type Block = { t: string; x?: string; items?: string[] };
type Page = { title: string; subtitle: string; blocks: Block[]; images: { src: string; alt: string }[] };
const pages = content as Record<string, Page>;

export const generateStaticParams = () => Object.keys(pages).map((slug) => ({ slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = pages[params.slug];
  return page ? { title: `${page.title} in Chennai | VCAN 3D`, description: page.subtitle } : {};
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const page = pages[params.slug];
  if (!page) notFound();
  const others = SERVICES.filter((service) => service.slug !== params.slug);

  return (
    <ServicePageEnter>
      <>
        <section className="relative overflow-hidden bg-navy-dark pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
          <div className="grid-bg absolute inset-0" />
          <div className="absolute -left-24 top-12 h-72 w-72 animate-drift rounded-full bg-saffron/25 blur-[110px]" />
          <div className="absolute -bottom-20 right-1/4 h-72 w-72 animate-drift rounded-full bg-india/25 blur-[110px]" />
          <div className="container-x relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal className="relative z-10">
              <Link href="/#services" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-saffron transition hover:-translate-x-1">
                <ArrowLeft size={16} /> Back to Services
              </Link>
              <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{page.title}</h1>
              <div className="tricolor-bar" />
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{page.subtitle}</p>
            </Reveal>

            {page.images[0] && (
              <Reveal delay={0.12} x={35} y={0}>
                <div className="group relative mx-auto aspect-[5/4] w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
                  <div className="absolute inset-3 overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={`/assets/${page.images[0].src}`}
                      alt={page.images[0].alt || page.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-white to-india" />
                </div>
              </Reveal>
            )}
          </div>
        </section>

        <section className="bg-surface py-16 sm:py-24">
          <div className="container-x">
            <div className="mx-auto max-w-4xl">
              {page.blocks.map((block, index) => {
                if (block.t === "h2") {
                  return (
                    <Reveal key={index}>
                      <h2 className="mb-6 mt-14 border-l-4 border-saffron pl-5 font-display text-2xl font-bold leading-tight first:mt-0 sm:text-3xl">
                        {block.x}
                      </h2>
                    </Reveal>
                  );
                }
                if (block.t === "h3") {
                  return (
                    <Reveal key={index}>
                      <h3 className="mb-5 mt-12 font-display text-xl font-bold sm:text-2xl">{block.x}</h3>
                    </Reveal>
                  );
                }
                if (block.t === "p") {
                  return (
                    <Reveal key={index}>
                      <p className="rounded-2xl border border-black/5 bg-white p-6 text-base leading-8 text-muted shadow-sm sm:p-8 sm:text-lg">
                        {block.x}
                      </p>
                    </Reveal>
                  );
                }
                if (block.t === "list") {
                  return (
                    <ul key={index} className="grid gap-3 sm:grid-cols-2">
                      {block.items!.map((item, itemIndex) => (
                        <Reveal key={itemIndex} delay={itemIndex * 0.06}>
                          <li className="flex h-full items-start gap-3 rounded-2xl border border-black/5 bg-white p-5 text-sm leading-relaxed shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:text-base">
                            <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-india text-white">
                              <Check size={14} />
                            </span>
                            <span>{item}</span>
                          </li>
                        </Reveal>
                      ))}
                    </ul>
                  );
                }
                return (
                  <div key={index} className="grid gap-4 sm:grid-cols-2">
                    {block.items!.map((item, itemIndex) => (
                      <Reveal key={itemIndex} delay={itemIndex * 0.06}>
                        <div className="flex h-full min-h-24 items-center rounded-2xl border-l-4 border-saffron bg-white px-6 py-5 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:text-base">
                          {item}
                        </div>
                      </Reveal>
                    ))}
                  </div>
                );
              })}
              <Reveal className="mt-12">
                <a href={QUOTE_URL} target="_blank" rel="noopener" className="btn btn-saffron group">
                  GET A QUOTE <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>

            {page.images.length > 1 && (
              <div className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-2">
                {page.images.slice(1).map((image, index) => (
                  <Reveal key={image.src} delay={index * 0.1}>
                    <div className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-2 shadow-lg">
                      <Image
                        src={`/assets/${image.src}`}
                        alt={image.alt || page.title}
                        width={1280}
                        height={934}
                        className="h-auto w-full rounded-[1.25rem] transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="container-x">
            <h2 className="mb-8 font-display text-2xl font-bold">Explore More Services</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-black/10 bg-surface px-5 py-4 font-medium transition-all hover:-translate-y-0.5 hover:border-saffron hover:bg-saffron hover:text-white"
                >
                  <span>{service.title}</span>
                  <MoveUpRight size={18} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>

      </>
    </ServicePageEnter>
  );
}
