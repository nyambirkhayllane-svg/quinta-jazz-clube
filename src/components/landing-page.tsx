"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BackToTop } from "@/components/back-to-top";
import { ContactForm } from "@/components/contact-form";
import { translations, type Lang } from "@/lib/translations";

const copy = {
  pt: {
    nav: [["#historia", "A nossa história"], ["#galeria", "Álbum"], ["#visita", "Visitar"]],
    visit: "Marcar uma visita",
    menu: "Abrir menu",
    closeMenu: "Fechar menu",
    eyebrow: "Uma quinta de família, na Matola",
    hero: <>Onde as celebrações<br />entram para a <em>história.</em></>,
    intro: "Entre árvores maduras e jardins que há décadas recebem famílias, cada casamento encontra espaço para ser vivido à sua maneira.",
    scroll: "Conhecer a nossa história",
    storyLabel: "A nossa história",
    storyTitle: "Tudo começou com uma família e música ao vivo.",
    story1: "Nos anos 1990, Luísa Tembe e Ezequiel Tamele abriram as portas da sua quinta a sessões de jazz. Pessoas encontravam-se, ouviam música e partilhavam a noite. Foi assim que nasceu o nome Quinta Jazz Clube.",
    story2: "Com os anos, o lugar cresceu com as famílias que aqui regressavam. A música abriu caminho a casamentos, aniversários e encontros entre gerações — sempre com a mesma vontade de receber bem.",
    quote: "Acreditamos em celebrar.",
    quoteNote: "Luísa Tembe & Ezequiel Tamele · Fundadores",
    dayLabel: "O vosso dia",
    dayTitle: "Primeiro, a expectativa. Depois, tudo ganha vida.",
    day: [
      ["01", "Chegar", "O jardim recebe os primeiros passos, os reencontros e a expectativa."],
      ["02", "Prometer", "Sob as árvores, duas famílias testemunham o início de uma nova história."],
      ["03", "Partilhar", "A mesa reúne pessoas, conversas e histórias que atravessam gerações."],
      ["04", "Celebrar", "A luz muda, a música começa e a Quinta enche-se de movimento."],
    ],
    albumLabel: "Memórias da Quinta",
    albumTitle: "Cada celebração deixa qualquer coisa connosco.",
    albumCopy: "Um álbum aberto de cerimónias, mesas, jardins e noites que já fazem parte desta casa.",
    open: "Abrir fotografia",
    close: "Fechar álbum",
    othersLabel: "E há sempre mais razões para nos reunirmos",
    othersTitle: "Famílias crescem. Histórias continuam.",
    othersCopy: "Aniversários, encontros privados, música e celebrações profissionais também encontram lugar na Quinta — depois dos casamentos, como novos capítulos da mesma história.",
    visitLabel: "O próximo capítulo pode começar aqui",
    visitTitle: "Venham sentir a Quinta.",
    visitCopy: "Há lugares que uma fotografia não consegue explicar. Marquem uma visita, caminhem pelos jardins e contem-nos como imaginam o vosso dia.",
    location: "Quinta Jazz Clube · Matola, Moçambique",
    footer: "Uma história de família, música e celebração.",
  },
  en: {
    nav: [["#historia", "Our story"], ["#galeria", "Album"], ["#visita", "Visit"]],
    visit: "Plan a visit", menu: "Open menu", closeMenu: "Close menu",
    eyebrow: "A family quinta in Matola",
    hero: <>Where celebrations<br />become part of the <em>story.</em></>,
    intro: "Among mature trees and gardens that have welcomed families for decades, every wedding finds room to be lived in its own way.",
    scroll: "Discover our story",
    storyLabel: "Our story", storyTitle: "It began with a family and live music.",
    story1: "In the 1990s, Luísa Tembe and Ezequiel Tamele opened their quinta to live jazz sessions. People met, listened to music and shared the evening. That is how Quinta Jazz Clube found its name.",
    story2: "Over the years, the place grew with the families who returned. Music made way for weddings, birthdays and gatherings across generations — always with the same desire to welcome people well.",
    quote: "We believe in celebrating.", quoteNote: "Luísa Tembe & Ezequiel Tamele · Founders",
    dayLabel: "Your day", dayTitle: "First, anticipation. Then everything comes alive.",
    day: [["01", "Arrive", "The garden welcomes first steps, reunions and anticipation."], ["02", "Promise", "Beneath the trees, two families witness a new story begin."], ["03", "Share", "The table gathers people, conversations and stories across generations."], ["04", "Celebrate", "The light changes, music begins and the Quinta fills with movement."]],
    albumLabel: "Memories of the Quinta", albumTitle: "Every celebration leaves something with us.",
    albumCopy: "An open album of ceremonies, tables, gardens and evenings that are now part of this home.", open: "Open photograph", close: "Close album",
    othersLabel: "And there are always more reasons to gather", othersTitle: "Families grow. Stories continue.",
    othersCopy: "Birthdays, private gatherings, music and professional celebrations also find a place at the Quinta — after weddings, as new chapters in the same story.",
    visitLabel: "The next chapter can begin here", visitTitle: "Come and experience the Quinta.",
    visitCopy: "Some places cannot be explained by a photograph. Plan a visit, walk through the gardens and tell us how you imagine your day.",
    location: "Quinta Jazz Clube · Matola, Mozambique", footer: "A story of family, music and celebration.",
  },
} as const;

const album = [
  ["/images/quinta-cerimonia.jpg", "Cerimónia entre árvores maduras"],
  ["/images/casamento-6.jpg", "A mesa dos noivos"],
  ["/images/casamento-7.png", "Um encontro de famílias"],
  ["/images/festa-4.jpg", "Celebração junto à piscina"],
  ["/images/casamento-8.png", "Detalhes de uma celebração"],
  ["/images/musica-7.png", "A Quinta ao cair da noite"],
] as const;

const reveal = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.65 } } as const;

export function LandingPage() {
  const [lang, setLang] = useState<Lang>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const c = copy[lang];
  const t = translations[lang];

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    if (activeImage === null) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActiveImage(null);
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", close); document.body.style.overflow = ""; };
  }, [activeImage]);

  return (
    <div className="min-h-screen bg-surface text-body">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#12372b]/82 text-white backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 lg:px-10">
          <a href="#inicio" className="text-lg font-semibold tracking-[-0.02em] sm:text-xl">Quinta Jazz Clube</a>
          <nav aria-label="Principal" className="hidden items-center gap-8 text-sm lg:flex">
            {c.nav.map(([href, label]) => <a key={href} href={href} className="text-white/75 transition hover:text-white">{label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setLang(lang === "pt" ? "en" : "pt")} className="min-h-11 px-3 text-xs font-semibold tracking-[0.18em] text-white/80" aria-label={t.nav.switchLang}>{lang === "pt" ? "EN" : "PT"}</button>
            <a href="#visita" className="hidden min-h-11 items-center bg-white px-5 text-sm font-semibold text-[#12372b] transition hover:bg-[#dce9e1] sm:inline-flex">{c.visit}</a>
            <button type="button" className="grid min-h-11 min-w-11 place-items-center lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? c.closeMenu : c.menu}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-white/15 bg-[#12372b] px-6 py-6 lg:hidden">{c.nav.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-white/10 py-4 text-lg">{label}</a>)}</nav>}
      </header>

      <main>
        <section id="inicio" className="relative min-h-[100svh] overflow-hidden bg-[#12372b]">
          <Image src="/images/quinta-cerimonia.jpg" alt={lang === "pt" ? "Cerimónia preparada nos jardins da Quinta Jazz Clube" : "Ceremony prepared in the gardens of Quinta Jazz Clube"} fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,26,21,.84)_0%,rgba(16,26,21,.46)_52%,rgba(16,26,21,.12)_100%)]" />
          <div className="relative mx-auto flex min-h-[100svh] max-w-[90rem] items-end px-5 pb-16 pt-32 lg:px-10 lg:pb-20">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-4xl text-white">
              <p className="mb-7 text-xs font-semibold uppercase tracking-[0.3em] text-white/75">{c.eyebrow}</p>
              <h1 className="text-[clamp(3.25rem,8vw,7.5rem)] leading-[.94] [&_em]:font-normal [&_em]:text-[#a9d4d7]">{c.hero}</h1>
              <div className="mt-9 flex max-w-2xl flex-col gap-7 border-t border-white/35 pt-7 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-xl text-base leading-7 text-white/82 sm:text-lg">{c.intro}</p>
                <a href="#historia" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold">{c.scroll}<ArrowRight size={16} /></a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="historia" className="px-5 py-28 lg:px-10 lg:py-40">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-28">
            <motion.div {...reveal}>
              <p className="chapter-label">{c.storyLabel}</p>
              <h2 className="mt-7 font-serif text-4xl leading-[1.08] text-strong sm:text-6xl">{c.storyTitle}</h2>
            </motion.div>
            <motion.div {...reveal} className="lg:pt-14">
              <div className="grid gap-8 text-lg leading-9 text-muted sm:grid-cols-2"><p>{c.story1}</p><p>{c.story2}</p></div>
              <blockquote className="mt-16 border-l-2 border-[#b54f3b] pl-8"><p className="family-quote text-3xl italic text-strong sm:text-4xl">“{c.quote}”</p><footer className="mt-5 text-xs uppercase tracking-[0.22em] text-muted">{c.quoteNote}</footer></blockquote>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#12372b] px-5 py-28 text-white lg:px-10 lg:py-40">
          <div className="mx-auto max-w-7xl"><motion.div {...reveal}><p className="text-xs uppercase tracking-[.28em] text-white/60">{c.dayLabel}</p><h2 className="mt-7 max-w-4xl font-serif text-4xl leading-[1.08] sm:text-6xl">{c.dayTitle}</h2></motion.div>
            <div className="mt-20 grid border-t border-white/25 md:grid-cols-4">{c.day.map(([n,title,text]) => <article key={n} className="border-b border-white/20 py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"><span className="font-serif italic text-[#d6c6a8]">{n}</span><h3 className="mt-10 font-serif text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-white/65">{text}</p></article>)}</div>
          </div>
        </section>

        <section id="galeria" className="px-5 py-28 lg:px-10 lg:py-40">
          <div className="mx-auto max-w-[90rem]"><motion.div {...reveal} className="max-w-4xl"><p className="chapter-label">{c.albumLabel}</p><h2 className="mt-7 font-serif text-4xl leading-[1.08] text-strong sm:text-6xl">{c.albumTitle}</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-muted">{c.albumCopy}</p></motion.div>
            <div className="mt-20 grid auto-rows-[14rem] grid-cols-2 gap-3 md:auto-rows-[20rem] md:grid-cols-12">{album.map(([src, alt], index) => <motion.button {...reveal} key={src} type="button" onClick={() => setActiveImage(index)} aria-label={`${c.open}: ${alt}`} className={`group relative overflow-hidden text-left ${index === 0 ? "col-span-2 row-span-2 md:col-span-7" : index === 1 ? "col-span-1 row-span-2 md:col-span-5" : index === 2 ? "col-span-1 md:col-span-4" : index === 3 ? "col-span-2 md:col-span-8" : "col-span-1 md:col-span-6"}`}><Image src={src} alt={alt} fill sizes="(max-width:768px) 100vw, 55vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" /><span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-5 pb-5 pt-16 text-sm text-white">{alt}</span></motion.button>)}</div>
          </div>
        </section>

        <section className="border-y border-line bg-[#e6efe8] px-5 py-24 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><p className="chapter-label">{c.othersLabel}</p><div><h2 className="text-4xl leading-[1.08] text-strong sm:text-5xl">{c.othersTitle}</h2><p className="mt-7 max-w-xl text-lg leading-8 text-muted">{c.othersCopy}</p></div></div></section>

        <section id="visita" className="px-5 py-28 lg:px-10 lg:py-40"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-28"><div><p className="chapter-label">{c.visitLabel}</p><h2 className="mt-7 font-serif text-5xl leading-[1.02] text-strong sm:text-7xl">{c.visitTitle}</h2><p className="mt-7 max-w-md text-lg leading-8 text-muted">{c.visitCopy}</p><div className="mt-10 space-y-4 text-sm"><p className="flex gap-3"><MapPin size={18} />{c.location}</p><a href="tel:+258877490160" className="flex gap-3"><Phone size={18} />+258 87 749 0160</a><a href="https://wa.me/258877490160" className="flex gap-3"><MessageCircle size={18} />WhatsApp</a></div></div><ContactForm key={lang} t={t.form} /></div></section>
      </main>

      <footer className="bg-[#12372b] px-5 py-12 text-white/70 lg:px-10"><div className="mx-auto flex max-w-[90rem] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xl font-semibold text-white">Quinta Jazz Clube</p><p className="mt-2 text-sm">{c.footer}</p></div><div className="flex items-center gap-5 text-sm"><a href="https://www.instagram.com/quintajazzclube/" className="transition hover:text-white">Instagram</a><span>© 2026</span></div></div></footer>

      <AnimatePresence>{activeImage !== null && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={album[activeImage][1]} className="fixed inset-0 z-[70] grid place-items-center bg-[#111713]/95 p-4" onClick={() => setActiveImage(null)}><button type="button" onClick={() => setActiveImage(null)} className="absolute right-5 top-5 z-10 min-h-11 border border-white/30 px-4 text-sm text-white">{c.close}</button><motion.div initial={{ scale: .98 }} animate={{ scale: 1 }} className="relative h-[82vh] w-full max-w-6xl" onClick={e => e.stopPropagation()}><Image src={album[activeImage][0]} alt={album[activeImage][1]} fill sizes="100vw" className="object-contain" /></motion.div></motion.div>}</AnimatePresence>
      <BackToTop />
    </div>
  );
}
