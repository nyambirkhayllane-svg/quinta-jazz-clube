"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Armchair,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  KeyRound,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AboutSection } from "@/components/about-section";
import { BackToTop } from "@/components/back-to-top";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { StatsBar } from "@/components/stats-bar";
import { translations, type Lang } from "@/lib/translations";

// lucide has no saxophone icon; custom glyph drawn in the same stroke style
function SaxophoneIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.8 5.2l2.7-1.1" />
      <path d="M5.5 4.1C8 2.6 10.8 3.4 11.3 6.2l1.3 8.6c.3 2.8.8 4.8 2.7 5.1 2.1.3 3.3-1.6 3-4l-.6-4.4" />
      <path d="M15.9 11l4 1.1" />
      <path d="M10.9 8.4h1.6" />
      <path d="M11.3 11h1.6" />
      <path d="M11.7 13.6h1.6" />
    </svg>
  );
}

// lucide-react removed brand icons; same glyph inlined from the old Instagram icon
function InstagramIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// One set of photos per gallery category; the first photo is the card cover.
const galleryImageSets = [
  [
    "/images/casamento-5.jpg",
    "/images/casamento-6.jpg",
    "/images/casamento-7.png",
    "/images/casamento-8.png",
    "/images/casamento-3.png",
    "/images/casamento-1.png",
    "/images/casamento-4.jpg",
  ],
  [
    "/images/musica-7.png",
    "/images/musica-3.png",
    "/images/musica-5.png",
    "/images/musica-6.png",
    "/images/musica-2.png",
    "/images/musica-9.png",
    "/images/musica-10.png",
  ],
  [
    "/images/festa-4.jpg",
    "/images/festa-1.jpg",
    "/images/festa-2.jpg",
    "/images/festa-3.jpg",
    "/images/festa-5.jpg",
    "/images/festa-6.jpg",
    "/images/festa-7.jpg",
    "/images/festa-8.jpg",
    "/images/festa-9.jpg",
    "/images/festa-10.jpg",
    "/images/festa-11.png",
    "/images/festa-12.png",
  ],
  ["/images/festa-7.jpg", "/images/festa-8.jpg", "/images/festa-10.jpg"],
];

const reasonIcons = [Armchair, Palette, KeyRound, MapPin];

// Renders **segments** of a translation string in bold.
function renderBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? <strong key={index} className="font-bold">{part}</strong> : part,
  );
}

function plainText(text: string) {
  return text.replace(/\*\*/g, "");
}

export function LandingPage() {
  const [activeGallery, setActiveGallery] = useState<{ images: string[]; title: string; category: string } | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [promoVisible, setPromoVisible] = useState(false);
  const [promoDismissed, setPromoDismissed] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [lang, setLang] = useState<Lang>("pt");

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("qjc-lang", lang);
  }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            if (entry.target.id === "contacto" && !promoDismissed) setPromoVisible(true);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    t.dots.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [t, promoDismissed]);

  return (
    <div className="min-h-screen bg-surface text-body">
      <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <a href="#hero" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/50 text-gold-400">
              <SaxophoneIcon size={20} />
            </span>
            <span className="font-serif text-lg font-medium tracking-wide text-strong sm:text-2xl">
              Quinta Jazz Clube
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-body lg:flex">
            {t.nav.links.map(([href, label]) => (
              <a key={href} href={href} className="transition hover:text-gold-400">{label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <button
              type="button"
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              aria-label={t.nav.switchLang}
              className="rounded-full border border-line-strong px-3 py-2 text-xs font-bold tracking-widest text-strong transition hover:border-gold-400/60 hover:text-gold-400"
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>
            <a href="tel:+258877490160" className="flex items-center gap-2 text-sm font-semibold text-strong transition hover:text-gold-400">
              <Phone size={16} className="text-gold-400" />
              +258 87 749 0160
            </a>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-xl bg-gold-400 px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:bg-gold-300">
              {t.nav.cta}
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              aria-label={t.nav.switchLang}
              className="rounded-full border border-line-strong px-2.5 py-2 text-xs font-bold tracking-widest text-strong"
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="rounded-full border border-line-strong p-2 text-strong"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen ? (
          <div className="border-t border-line bg-surface px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-body">
              {t.nav.links.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}>{label}</a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-xl bg-gold-400 px-5 py-2.5 text-center font-semibold text-stone-950"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
        {t.dots.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            className={`h-2 w-2 rounded-full transition ${
              activeSection === id ? "scale-150 bg-gold-400" : "bg-strong/20 hover:bg-strong/40"
            }`}
          />
        ))}
      </div>

      <main>
        <section id="hero" className="relative isolate overflow-hidden">
          <Image
            src="/images/quinta-cerimonia.jpg"
            alt={t.hero.imageAlt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,19,16,0.94)_0%,rgba(13,19,16,0.72)_48%,rgba(13,19,16,0.16)_100%)]" />
          <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-center px-6 pb-16 pt-24 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex max-w-3xl flex-col items-start text-left"
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs tracking-wide text-gold-200 backdrop-blur">
                <Sparkles size={14} />
                {t.hero.badge}
              </div>
              <h1 className="font-serif text-5xl font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-8xl">
                {t.hero.titleLine1}
                <br />
                {t.hero.titleLine2Pre}
                <em className="italic text-gold-400">{t.hero.titleAccent}</em>.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
                {t.hero.paragraph}
              </p>
              <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a href="#contacto" className="inline-flex min-h-12 items-center justify-center gap-3 bg-gold-400 px-7 py-3 text-sm font-semibold text-stone-950 transition hover:bg-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300">
                  {lang === "pt" ? "Agendar uma visita" : "Schedule a visit"}<ArrowRight size={16} />
                </a>
                <a href="https://wa.me/258877490160" className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  <MessageCircle size={17} /> WhatsApp
                </a>
              </div>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-stone-300">
                {lang === "pt" ? "Matola · Casamentos · Celebrações · Eventos corporativos" : "Matola · Weddings · Celebrations · Corporate events"}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-16 w-full max-w-4xl lg:mt-20"
            >
              <StatsBar stats={t.hero.stats} />
            </motion.div>
          </div>
        </section>

        <AboutSection t={t.about} />

        <section className="bg-surface px-6 py-24 lg:px-8 lg:py-32" aria-labelledby="experience-title">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-500">{lang === "pt" ? "Uma experiência completa" : "A complete experience"}</p>
                <h2 id="experience-title" className="mt-6 max-w-[12ch] font-serif text-4xl leading-[1.08] text-strong sm:text-5xl">{lang === "pt" ? "Do primeiro encontro ao último brinde." : "From the first meeting to the final toast."}</h2>
              </div>
              <div className="grid gap-px border-y border-line sm:grid-cols-3 sm:border-x">
                {[
                  ["01", lang === "pt" ? "Conhecer" : "Discover", lang === "pt" ? "Uma visita privada para sentir o espaço e partilhar a sua visão." : "A private visit to experience the venue and share your vision."],
                  ["02", lang === "pt" ? "Desenhar" : "Design", lang === "pt" ? "Ambiente, menu e produção pensados em conjunto, detalhe a detalhe." : "Setting, menu and production considered together, detail by detail."],
                  ["03", lang === "pt" ? "Celebrar" : "Celebrate", lang === "pt" ? "Uma equipa presente para que possa viver o momento com tranquilidade." : "A present team so you can enjoy the moment with complete peace of mind."],
                ].map(([number, title, copy]) => (
                  <article key={number} className="border-line px-6 py-8 sm:border-r sm:last:border-r-0 lg:px-8 lg:py-10">
                    <span className="font-serif text-sm italic text-gold-500">{number}</span>
                    <h3 className="mt-8 font-serif text-2xl text-strong">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="diferenciais" className="relative isolate overflow-hidden py-24">
          <Image
            src="/images/musica-7.png"
            alt={t.why.imageAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,8,0.95)_0%,rgba(12,10,8,0.8)_45%,rgba(12,10,8,0.65)_100%)]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <SectionHeading
                  onImage
                  eyebrow={t.why.eyebrow}
                  title={t.why.title}
                  accent={t.why.accent}
                  description={t.why.description}
                />
                <a href="#galeria" className="mt-10 inline-flex items-center gap-3 border-b border-gold-400 pb-2 text-sm font-semibold text-white transition hover:text-gold-300">{t.why.watch}<ArrowRight size={16} /></a>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {t.why.items.map((reason, index) => {
                  const Icon = reasonIcons[index];
                  return (
                    <div
                      key={reason.title}
                      className="group flex cursor-default flex-col rounded-[1.5rem] border border-white/10 bg-[#0c0a08]/70 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-gold-400/40"
                    >
                      <Icon size={30} strokeWidth={1.25} className="text-gold-300" />
                      <h3 className="mt-5 font-serif text-xl font-medium text-white">{reason.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-stone-400">{reason.text}</p>
                      <ArrowRight size={18} className="mt-5 text-gold-400 transition group-hover:translate-x-1" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow={t.gallery.eyebrow}
            title={t.gallery.title}
            accent={t.gallery.accent}
            description={t.gallery.description}
          />
          <div className="mt-12 columns-1 gap-4 md:columns-2">
            {t.gallery.items.map((item, index) => (
              <motion.button
                key={galleryImageSets[index][0]}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                onClick={() => {
                  setActiveGallery({ images: galleryImageSets[index], ...item });
                  setActiveIndex(0);
                }}
                className="mb-4 block w-full overflow-hidden rounded-[1.5rem] border border-line bg-card text-left transition hover:border-gold-400/40"
              >
                <div className="relative h-72 w-full">
                  <Image src={galleryImageSets[index][0]} alt={plainText(item.title)} fill className="object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">{item.category}</p>
                  <h3 className="mt-2 font-serif text-lg font-medium text-strong">{renderBold(item.title)}</h3>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow={t.faq.eyebrow}
                title={t.faq.title}
                accent={t.faq.accent}
                description={t.faq.description}
              />
            </div>
            <div className="space-y-4">
              {t.faq.items.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.question} className="rounded-[1.25rem] border border-line bg-card p-4">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between text-left"
                    >
                      <span className="font-semibold text-strong">{faq.question}</span>
                      <ChevronDown className={`text-gold-400 transition ${isOpen ? "rotate-180" : ""}`} size={18} />
                    </button>
                    {isOpen ? <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-line bg-card p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div>
              <SectionHeading
                eyebrow={t.contact.eyebrow}
                title={t.contact.title}
                accent={t.contact.accent}
                description={t.contact.description}
              />
              <div className="mt-8 space-y-4 text-sm text-body">
                <div className="flex items-center gap-3"><MapPin size={18} className="text-gold-400" /><span>{t.contact.location}</span></div>
                <div className="flex items-center gap-3"><Phone size={18} className="text-gold-400" /><span>+258 87 749 0160</span></div>
                <div className="flex items-center gap-3"><CalendarDays size={18} className="text-gold-400" /><span>{t.contact.hours}</span></div>
                <div className="flex items-center gap-3"><InstagramIcon size={18} className="text-gold-400" /><span>@quintajazzclube</span></div>
              </div>
              <div className="mt-8 flex gap-3">
                <a href="https://wa.me/258877490160" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">
                  <MessageCircle size={16} /> {t.contact.whatsapp}
                </a>
                <a href="tel:+258877490160" className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-semibold text-strong transition hover:border-gold-400/50 hover:text-gold-400">
                  <Phone size={16} /> {t.contact.call}
                </a>
              </div>
            </div>
            <ContactForm key={lang} t={t.form} />
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 pb-28 text-muted">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>{t.footer.rights}</p>
          <div className="flex gap-4">
            {t.footer.links.map(([href, label]) => (
              <a key={href} href={href} className="transition hover:text-gold-400">{label}</a>
            ))}
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {promoVisible ? (
          <motion.div
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            exit={{ y: 120 }}
            className="fixed inset-x-4 bottom-4 z-50 rounded-2xl border border-line bg-overlay text-body shadow-2xl backdrop-blur lg:inset-x-8"
          >
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-3 text-sm lg:justify-between">
              <p className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-field text-gold-400">
                  <CalendarDays size={18} />
                </span>
                <span><span className="font-semibold text-gold-400">{t.promo.leadStrong}</span>{t.promo.leadRest}</span>
              </p>
              <p className="hidden items-center gap-2 md:flex">
                <span>{t.promo.visits}</span>
                <span className="rounded-full bg-field px-3 py-1 text-xs font-semibold text-body">{t.promo.chip}</span>
              </p>
              <div className="flex items-center gap-3">
                <a href="#contacto" className="rounded-xl bg-gold-400 px-4 py-2 text-xs font-semibold text-stone-950 transition hover:bg-gold-300">
                  {t.promo.cta}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setPromoVisible(false);
                    setPromoDismissed(true);
                  }}
                  aria-label={t.promo.close}
                  className="rounded-full p-1 text-faint transition hover:text-strong"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {activeGallery ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setActiveGallery(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[1.75rem] border border-white/15 bg-[#12100c] p-3"
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" onClick={() => setActiveGallery(null)} className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-2 text-sm text-white">{t.gallery.close}</button>
              <Image
                src={activeGallery.images[activeIndex]}
                alt={`${plainText(activeGallery.title)} — ${activeIndex + 1}`}
                width={1200}
                height={800}
                className="max-h-[62vh] w-full rounded-[1.25rem] object-contain"
              />
              {activeGallery.images.length > 1 ? (
                <div className="mt-3 flex gap-3 overflow-x-auto px-1">
                  {activeGallery.images.map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`${plainText(activeGallery.title)} — ${index + 1}`}
                      className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                        index === activeIndex ? "border-gold-400" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={src} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              ) : null}
              <div className="px-2 py-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">{activeGallery.category}</p>
                <h3 className="mt-2 font-serif text-2xl font-medium">{renderBold(activeGallery.title)}</h3>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <BackToTop />
    </div>
  );
}
