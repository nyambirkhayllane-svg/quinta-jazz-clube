"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Armchair,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Flower2,
  MapPin,
  Menu,
  MessageCircle,
  Music4,
  Palette,
  PartyPopper,
  Phone,
  Play,
  Search,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BackToTop } from "@/components/back-to-top";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

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

const services = [
  { title: "Casamentos", description: "Celebrações elegantes com decoração sob medida e gestão integral." },
  { title: "Aniversários", description: "Festas memoráveis, ricas em estilo, gastronomia e ambiente premium." },
  { title: "Eventos Corporativos", description: "Reuniões, jantares e conferências com experiência de alto nível." },
  { title: "Festas Privadas", description: "Ambientes exclusivos para cada ocasião especial." },
  { title: "Decoração Personalizada", description: "Floral, mobiliário e composição visual assinada para cada evento." },
  { title: "Música & Entretenimento", description: "Performances e playlists cuidadosamente seleccionadas para o momento." },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    title: "Casamento ao entardecer",
    category: "Casamentos",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
    title: "Decoração floral sofisticada",
    category: "Decoração Floral",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    title: "Mesa de jantar premium",
    category: "Mesas Decoradas",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    title: "Evento corporativo",
    category: "Eventos Corporativos",
  },
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80",
    title: "Espaço exterior acolhedor",
    category: "Espaços Exteriores",
  },
  {
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80",
    title: "Festa temática nocturna",
    category: "Eventos Noturnos",
  },
];

const reasons = [
  {
    icon: Armchair,
    title: "Espaço sofisticado",
    text: "Um ambiente elegante, acolhedor e preparado para experiências memoráveis.",
  },
  {
    icon: Palette,
    title: "Decoração personalizada",
    text: "Cada detalhe é desenhado para refletir a sua identidade e estilo.",
  },
  {
    icon: Users,
    title: "Equipa especializada",
    text: "Profissionais com visão artística, organização impecável e atendimento premium.",
  },
  {
    icon: MapPin,
    title: "Localização privilegiada",
    text: "Acesso fácil e envolvente, ideal para eventos que querem destacar-se.",
  },
];

const processSteps = [
  "Solicitar orçamento",
  "Agendar visita",
  "Planeamento personalizado",
  "Preparação da decoração",
  "Realização do evento",
];

const testimonials = [
  {
    quote: "Uma experiência impecável, do primeiro contacto à última música. Cada detalhe foi perfeito.",
    author: "Marta & João",
    event: "Casamento de Verão",
  },
  {
    quote: "O espaço transmite luxo e acolhimento. A equipa superou todas as nossas expectativas.",
    author: "Clara Pereira",
    event: "Evento Corporativo",
  },
  {
    quote: "A decoração estava deslumbrante e a organização foi exemplar. Recomendo sem reservas.",
    author: "Rui Santos",
    event: "Aniversário 40 anos",
  },
];

const faqs = [
  {
    question: "Quais os tipos de eventos que acolhem?",
    answer: "Casamentos, festas privadas, eventos corporativos, aniversários e celebrações especiais.",
  },
  {
    question: "É possível personalizar a decoração?",
    answer: "Sim. Trabalhamos com conceitos sob medida, florais, mobiliário e iluminação para cada projeto.",
  },
  {
    question: "Como funciona o processo de reserva?",
    answer: "Começa pelo pedido de orçamento, seguido de visita ao espaço, definição do plano e confirmação da data.",
  },
  {
    question: "Há disponibilidade para eventos em noites e fins de semana?",
    answer: "Sim. A nossa agenda é preparada para acolher eventos premium em diferentes períodos do ano.",
  },
];

const navLinks = [
  ["#sobre", "Sobre"],
  ["#servicos", "Serviços"],
  ["#galeria", "Galeria"],
  ["#faq", "FAQ"],
  ["#contacto", "Contacto"],
] as const;

const dotSections = [
  ["hero", "Início"],
  ["sobre", "Sobre"],
  ["servicos", "Serviços"],
  ["galeria", "Galeria"],
  ["diferenciais", "Diferenciais"],
  ["contacto", "Contacto"],
] as const;

export function LandingPage() {
  const [activeImage, setActiveImage] = useState<(typeof galleryImages)[number] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [promoVisible, setPromoVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    dotSections.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0a08] text-stone-200">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0c0a08]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <a href="#hero" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/50 text-gold-300">
              <Music4 size={20} />
            </span>
            <span className="font-serif text-lg font-medium tracking-wide text-white sm:text-2xl">
              Quinta Jazz Clube
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-200 lg:flex">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="transition hover:text-gold-300">{label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <a href="tel:+351213456789" className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-gold-300">
              <Phone size={16} className="text-gold-400" />
              +351 213 456 789
            </a>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-xl bg-gold-400 px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:bg-gold-300">
              Solicitar orçamento
              <ArrowRight size={16} />
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="rounded-full border border-white/15 p-2 text-stone-200 lg:hidden"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {mobileMenuOpen ? (
          <div className="border-t border-white/10 bg-[#0c0a08] px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-stone-200">
              {navLinks.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}>{label}</a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-xl bg-gold-400 px-5 py-2.5 text-center font-semibold text-stone-950"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
        {dotSections.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            className={`h-2 w-2 rounded-full transition ${
              activeSection === id ? "scale-150 bg-gold-400" : "bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      <main>
        <section id="hero" className="relative isolate overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=80"
            alt="Interior elegante da Quinta Jazz Clube para eventos premium"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.92)_0%,rgba(12,10,8,0.68)_50%,rgba(12,10,8,0.96)_100%)]" />
          <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex max-w-4xl flex-col items-center"
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-5 py-2 text-sm text-gold-200 backdrop-blur">
                <Sparkles size={16} />
                O palco dos seus melhores momentos
              </div>
              <h1 className="font-serif text-4xl font-medium leading-tight text-white sm:text-6xl lg:text-7xl">
                O espaço. A música.
                <br />
                A sua <em className="italic text-gold-400">celebração</em>.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
                Deixe de imaginar o evento perfeito. Na Quinta Jazz Clube encontra o cenário,
                a decoração, a gastronomia e a banda — tudo num só lugar, com uma equipa
                dedicada do primeiro brinde à última música.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-12 flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl sm:h-20 sm:flex-row sm:items-stretch sm:rounded-full"
              onSubmit={(event) => {
                event.preventDefault();
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <label className="flex flex-1 items-center gap-3 border-b border-white/10 px-6 py-4 text-left sm:border-b-0 sm:border-r sm:py-0">
                <PartyPopper size={20} className="shrink-0 text-gold-400" />
                <span className="flex w-full flex-col">
                  <span className="text-sm font-semibold text-white">Tipo de evento</span>
                  <select className="w-full bg-transparent text-sm text-stone-400 outline-none [color-scheme:dark]" defaultValue="">
                    <option value="" disabled>Qual é a ocasião?</option>
                    <option>Casamento</option>
                    <option>Aniversário</option>
                    <option>Evento corporativo</option>
                    <option>Festa privada</option>
                  </select>
                </span>
              </label>
              <label className="flex flex-1 items-center gap-3 border-b border-white/10 px-6 py-4 text-left sm:border-b-0 sm:border-r sm:py-0">
                <Users size={20} className="shrink-0 text-gold-400" />
                <span className="flex w-full flex-col">
                  <span className="text-sm font-semibold text-white">Convidados</span>
                  <input
                    type="number"
                    min={1}
                    placeholder="Quantas pessoas?"
                    className="w-full bg-transparent text-sm text-stone-400 outline-none [color-scheme:dark] placeholder:text-stone-500"
                  />
                </span>
              </label>
              <label className="flex flex-1 items-center gap-3 px-6 py-4 text-left sm:py-0">
                <CalendarDays size={20} className="shrink-0 text-gold-400" />
                <span className="flex w-full flex-col">
                  <span className="text-sm font-semibold text-white">Data</span>
                  <input
                    type="date"
                    className="w-full bg-transparent text-sm text-stone-400 outline-none [color-scheme:dark]"
                  />
                </span>
              </label>
              <div className="flex items-center justify-center p-3 sm:pr-3">
                <button
                  type="submit"
                  aria-label="Pedir orçamento"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-6 text-sm font-semibold text-stone-950 transition hover:bg-gold-300 sm:h-14 sm:w-14 sm:px-0"
                >
                  <Search size={20} />
                  <span className="sm:hidden">Pedir orçamento</span>
                </button>
              </div>
            </motion.form>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              href="#sobre"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-stone-300 transition hover:text-gold-300"
            >
              ou conheça primeiro o espaço
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionHeading
                eyebrow="Sobre nós"
                title="Elegância, acolhimento e organização"
                accent="impecável"
                description="A Quinta Jazz Clube é um endereço de referência para eventos que exigem sofisticação, atenção aos detalhes e uma experiência verdadeiramente memorável."
              />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  ["Elegância", "Decoração e ambiente que elevam cada detalhe."],
                  ["Atendimento personalizado", "Uma equipa dedicada a cada fase do evento."],
                  ["Organização completa", "Planeamento, execução e acompanhamento premium."],
                  ["Experiência única", "Momento inesquecível para convidados e anfitriões."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <h3 className="font-serif text-lg font-medium text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-stone-400">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-[2rem] border border-gold-400/20 bg-white/[0.03] p-2">
              <Image
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80"
                alt="Equipe a preparar um evento em ambiente premium"
                width={800}
                height={900}
                className="h-[540px] w-full rounded-[1.5rem] object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section id="servicos" className="border-y border-white/5 bg-[#100e0b] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Serviços"
              title="Cada celebração merece um conceito"
              accent="exclusivo"
              description="Da cerimónia ao final da noite, criamos experiências refinadas e personalizadas para todos os tipos de eventos."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-gold-400/40"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/40 text-gold-300">
                    <Flower2 size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-400">{service.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Galeria"
            title="Um espaço que se transforma em cada"
            accent="ocasião"
            description="Explore momentos já vividos em ambientes sofisticados, elegantes e cuidadosamente preparados."
          />
          <div className="mt-12 columns-1 gap-4 md:columns-2 xl:columns-3">
            {galleryImages.map((image, index) => (
              <motion.button
                key={image.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                onClick={() => setActiveImage(image)}
                className="mb-4 block w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] text-left transition hover:border-gold-400/40"
              >
                <div className="relative h-72 w-full">
                  <Image src={image.src} alt={image.title} fill className="object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">{image.category}</p>
                  <h3 className="mt-2 font-serif text-lg font-medium text-white">{image.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <section id="diferenciais" className="relative isolate overflow-hidden py-24">
          <Image
            src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1800&q=80"
            alt="Piano e contrabaixo em ambiente de clube de jazz"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,8,0.95)_0%,rgba(12,10,8,0.8)_45%,rgba(12,10,8,0.65)_100%)]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Porque escolher"
                  title="Diferenciais que fazem a"
                  accent="diferença"
                  description="Do conceito à execução, cada detalhe é pensado para oferecer uma experiência premium e sem stress."
                />
                <a href="#galeria" className="group mt-10 inline-flex items-center gap-4 text-sm font-semibold text-white">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition group-hover:border-gold-400/60 group-hover:text-gold-300">
                    <Play size={18} fill="currentColor" />
                  </span>
                  Ver o espaço
                </a>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {reasons.map((reason) => {
                  const Icon = reason.icon;
                  return (
                    <a
                      key={reason.title}
                      href="#contacto"
                      className="group flex flex-col rounded-[1.5rem] border border-white/10 bg-[#0c0a08]/70 p-6 backdrop-blur transition hover:border-gold-400/40"
                    >
                      <Icon size={30} strokeWidth={1.25} className="text-gold-300" />
                      <h3 className="mt-5 font-serif text-xl font-medium text-white">{reason.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-stone-400">{reason.text}</p>
                      <ArrowRight size={18} className="mt-5 text-gold-400 transition group-hover:translate-x-1" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Processo"
            title="Da primeira conversa à realização do"
            accent="evento"
            description="Um fluxo claro, elegante e pensado para que cada etapa seja simples e tranquila."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold-400">0{index + 1}</div>
                <h3 className="font-serif text-lg font-medium text-white">{step}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#100e0b] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Depoimentos"
              title="Clientes que confiaram em"
              accent="nós"
              description="A qualidade da experiência é o melhor testemunho da nossa proposta."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.author} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <div className="mb-4 flex gap-1 text-gold-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm leading-8 text-stone-300">“{item.quote}”</p>
                  <div className="mt-6">
                    <p className="font-serif font-medium text-white">{item.author}</p>
                    <p className="text-sm text-stone-500">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="FAQ"
                title="Perguntas"
                accent="frequentes"
                description="Informações úteis para quem quer explorar a Quinta Jazz Clube e planejar o próximo evento."
              />
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.question} className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between text-left"
                    >
                      <span className="font-semibold text-white">{faq.question}</span>
                      <ChevronDown className={`text-gold-400 transition ${isOpen ? "rotate-180" : ""}`} size={18} />
                    </button>
                    {isOpen ? <p className="mt-3 text-sm leading-7 text-stone-400">{faq.answer}</p> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div>
              <SectionHeading
                eyebrow="Contacto"
                title="Vamos criar o evento da sua"
                accent="vida"
                description="Partilhe as suas ideias e deixe-nos transformar a sua visão numa experiência única e sofisticada."
              />
              <div className="mt-8 space-y-4 text-sm text-stone-300">
                <div className="flex items-center gap-3"><MapPin size={18} className="text-gold-400" /><span>Quinta Jazz Clube, Lisboa</span></div>
                <div className="flex items-center gap-3"><Phone size={18} className="text-gold-400" /><span>+351 213 456 789</span></div>
                <div className="flex items-center gap-3"><CalendarDays size={18} className="text-gold-400" /><span>Seg-Sex • 09:00 - 20:00</span></div>
                <div className="flex items-center gap-3"><InstagramIcon size={18} className="text-gold-400" /><span>@quintajazzclube</span></div>
              </div>
              <div className="mt-8 flex gap-3">
                <a href="https://wa.me/351213456789" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a href="tel:+351213456789" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-gold-400/50 hover:text-gold-300">
                  <Phone size={16} /> Ligar agora
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 pb-28 text-stone-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Quinta Jazz Clube. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#hero" className="transition hover:text-gold-300">Início</a>
            <a href="#servicos" className="transition hover:text-gold-300">Serviços</a>
            <a href="#contacto" className="transition hover:text-gold-300">Contacto</a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {promoVisible ? (
          <motion.div
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            exit={{ y: 120 }}
            className="fixed inset-x-4 bottom-4 z-50 rounded-2xl border border-white/10 bg-[#12100c]/95 text-stone-300 shadow-2xl backdrop-blur lg:inset-x-8"
          >
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-3 text-sm lg:justify-between">
              <p className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold-300">
                  <CalendarDays size={18} />
                </span>
                <span><span className="font-semibold text-gold-300">Época baixa 2026</span> — eventos de Nov a Mar com condições especiais</span>
              </p>
              <p className="hidden items-center gap-2 md:flex">
                <span>Visitas guiadas todos os sábados</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-stone-200">Lugares limitados</span>
              </p>
              <div className="flex items-center gap-3">
                <a href="#contacto" className="rounded-xl bg-gold-400 px-4 py-2 text-xs font-semibold text-stone-950 transition hover:bg-gold-300">
                  Reservar data →
                </a>
                <button
                  type="button"
                  onClick={() => setPromoVisible(false)}
                  aria-label="Fechar promoção"
                  className="rounded-full p-1 text-stone-500 transition hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-4xl rounded-[1.75rem] border border-white/15 bg-[#12100c] p-3"
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" onClick={() => setActiveImage(null)} className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-2 text-sm text-white">Fechar</button>
              <Image src={activeImage.src} alt={activeImage.title} width={1200} height={800} className="max-h-[75vh] w-full rounded-[1.25rem] object-contain" />
              <div className="px-2 py-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">{activeImage.category}</p>
                <h3 className="mt-2 font-serif text-2xl font-medium">{activeImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <BackToTop />
    </div>
  );
}
