export type Lang = "pt" | "en";

const pt = {
  nav: {
    links: [
      ["#sobre", "Sobre"],
      ["#galeria", "Galeria"],
      ["#faq", "FAQ"],
      ["#contacto", "Contacto"],
    ],
    cta: "Marcar uma visita",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    switchToLight: "Mudar para tema claro",
    switchToDark: "Mudar para tema escuro",
    switchLang: "Switch to English",
  },
  dots: [
    ["hero", "Início"],
    ["sobre", "Sobre"],
    ["diferenciais", "Diferenciais"],
    ["galeria", "Galeria"],
    ["contacto", "Contacto"],
  ],
  hero: {
    badge: "Acreditamos em celebrar",
    titleLine1: "Onde as grandes celebrações",
    titleLine2Pre: "encontram o seu ",
    titleAccent: "lugar",
    paragraph:
      "Entre jardins, árvores maduras e espaços que se transformam, criamos o cenário para um dia que continuará a ser recordado durante gerações.",
    imageAlt: "Cerimónia de casamento nos jardins da Quinta Jazz Clube",
    stats: [
      { value: 30, suffix: "+", prefix: "", label: "Anos de história" },
      { value: 200, suffix: "+", prefix: "", label: "Eventos realizados" },
      { value: 100, suffix: "%", prefix: "", label: "Presença e cuidado" },
      { value: 500, suffix: "", prefix: "Até", label: "Convidados" },
    ],
  },
  about: {
    eyebrow: "Desde 1995",
    titlePre: "Celebrar hoje. Recordar para ",
    titleAccent: "sempre",
    descPre:
      "Há anos que a Quinta Jazz Clube é um lugar onde famílias, amigos e casais se reúnem para celebrar os momentos mais importantes da vida. Cada evento passa a fazer parte da nossa história, e cada convidado é recebido com o mesmo cuidado, ",
    descHighlight: "calor e atenção",
    descPost:
      " que nos definem desde o início. Rodeada pela natureza e pensada para se adaptar a cada celebração, a Quinta preserva uma elegância serena — aquela que deixa espaço para as pessoas, para os afetos e para as memórias.",
    imageAlt: "Mesa decorada para casamento no salão da Quinta Jazz",
  },
  gallery: {
    eyebrow: "Galeria",
    title: "Imagine o vosso dia a acontecer",
    accent: "aqui",
    description:
      "Cada celebração encontra a sua própria forma. Estes são alguns dos momentos que já fazem parte da nossa história.",
    close: "Fechar",
    items: [
      { title: 'Onde o vosso **"Sim"** ganha vida.', category: "Casamentos" },
      { title: "Onde tudo começou. E continua.", category: "Música & Eventos" },
      { title: "Há sempre uma razão para celebrar.", category: "Festas" },
      { title: "O espaço certo para reunir, inspirar e celebrar.", category: "Eventos Corporativos" },
    ],
  },
  why: {
    eyebrow: "A Quinta",
    title: "Um lugar com espaço para a vossa",
    accent: "história",
    description:
      "Natureza, experiência e uma equipa que compreende o significado de cada detalhe.",
    watch: "Ver o espaço",
    imageAlt: "Piano e contrabaixo em ambiente de clube de jazz",
    items: [
      { title: "Natureza que acolhe", text: "Jardins amplos, árvores maduras e diferentes ambientes para viver cada momento do dia." },
      { title: "Uma celebração só vossa", text: "O espaço adapta-se à vossa história, sem perder a serenidade e o carácter da Quinta." },
      { title: "Experiência tranquila", text: "Anos a receber celebrações ensinaram-nos quando orientar, quando antecipar e quando deixar o momento acontecer." },
      { title: "Cuidado em cada detalhe", text: "Uma equipa presente do primeiro encontro ao último brinde, com hospitalidade genuína." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Perguntas",
    accent: "frequentes",
    description:
      "Informações úteis para quem quer explorar a Quinta Jazz Clube e planejar o próximo evento.",
    items: [
      {
        question: "Que tipos de eventos podem ser realizados na Quinta Jazz?",
        answer:
          "A Quinta Jazz está preparada para receber casamentos, aniversários, eventos corporativos, batizados, festas privadas e outras celebrações. Os nossos espaços adaptam-se a diferentes estilos e dimensões de evento.",
      },
      {
        question: "Posso alugar apenas o espaço?",
        answer:
          "Sim. Disponibilizamos a opção de aluguer exclusivo da quinta ou soluções mais completas, adaptadas às necessidades de cada cliente.",
      },
      {
        question: "O que está incluído no serviço chave na mão?",
        answer:
          "Dependendo do pacote escolhido, podemos tratar da decoração, catering, fotografia, sistema de som e coordenação do evento, garantindo uma experiência tranquila do início ao fim.",
      },
      {
        question: "É possível visitar a quinta antes da reserva?",
        answer:
          "Claro. Recomendamos sempre uma visita ao espaço para conhecer as instalações, esclarecer dúvidas e explorar as diferentes possibilidades para o seu evento.",
      },
      {
        question: "Com quanta antecedência devo reservar?",
        answer:
          "Aconselhamos a reserva com a maior antecedência possível, especialmente para casamentos e eventos durante a época alta, de forma a garantir a disponibilidade da data pretendida.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Venham conhecer o lugar do vosso",
    accent: "dia",
    description:
      "Uma visita é a melhor forma de sentir a Quinta. Contem-nos o que imaginam e recebemo-vos com tempo para conversar.",
    location: "Quinta Jazz, Matola",
    hours: "Seg-Sex • 09:00 - 20:00",
    whatsapp: "WhatsApp",
    call: "Ligar agora",
  },
  form: {
    name: "Nome",
    namePlaceholder: "Inês Costa",
    email: "Email",
    emailPlaceholder: "ines@email.com",
    phone: "Telefone",
    phonePlaceholder: "+258 84 123 4567",
    eventType: "Tipo de Evento",
    eventTypePlaceholder: "Casamento",
    guests: "Número de Convidados",
    date: "Data",
    message: "Mensagem",
    messagePlaceholder: "Conte-nos mais sobre a sua ideia...",
    submit: "Pedir uma visita",
    sending: "A enviar...",
    success: "Obrigado! A sua mensagem foi recebida e entraremos em contacto em breve.",
    error: "Por favor corrija os dados do formulário antes de enviar.",
    validation: {
      name: "Introduza o seu nome",
      email: "Introduza um email válido",
      phone: "Introduza um telefone válido",
      eventType: "Indique o tipo de evento",
      guests: "Indique o número de convidados",
      date: "Indique uma data",
      message: "Descreva o seu evento",
    },
  },
  promo: {
    leadStrong: "Época baixa 2026",
    leadRest: " — eventos de Nov a Mar com condições especiais",
    visits: "Visitas guiadas todos os sábados",
    chip: "Lugares limitados",
    cta: "Reservar data →",
    close: "Fechar promoção",
  },
  footer: {
    rights: "© 2026 Quinta Jazz Clube. Todos os direitos reservados.",
    links: [
      ["#hero", "Início"],
      ["#galeria", "Galeria"],
      ["#contacto", "Contacto"],
    ],
  },
};

const en: typeof pt = {
  nav: {
    links: [
      ["#sobre", "About"],
      ["#galeria", "Gallery"],
      ["#faq", "FAQ"],
      ["#contacto", "Contact"],
    ],
    cta: "Plan a visit",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
    switchLang: "Mudar para Português",
  },
  dots: [
    ["hero", "Home"],
    ["sobre", "About"],
    ["diferenciais", "Highlights"],
    ["galeria", "Gallery"],
    ["contacto", "Contact"],
  ],
  hero: {
    badge: "We believe in celebrating",
    titleLine1: "Where life's greatest celebrations",
    titleLine2Pre: "find their ",
    titleAccent: "place",
    paragraph:
      "Among gardens, mature trees and spaces that transform, we create the setting for a day that will be remembered for generations.",
    imageAlt: "Wedding ceremony in the gardens of Quinta Jazz Clube",
    stats: [
      { value: 30, suffix: "+", prefix: "", label: "Years of history" },
      { value: 200, suffix: "+", prefix: "", label: "Events hosted" },
      { value: 100, suffix: "%", prefix: "", label: "Presence and care" },
      { value: 500, suffix: "", prefix: "Up to", label: "Guests" },
    ],
  },
  about: {
    eyebrow: "Since 1995",
    titlePre: "Celebrated today. Remembered ",
    titleAccent: "always",
    descPre:
      "For years, Quinta Jazz Clube has been a place where families, friends and couples gather to celebrate life's most meaningful moments. Every event becomes part of our story, and every guest is welcomed with the same ",
    descHighlight: "warmth and care",
    descPost:
      " that have defined us from the beginning. Surrounded by nature and designed to adapt to each celebration, the Quinta preserves a quiet elegance that leaves room for people, affection and memories.",
    imageAlt: "Decorated wedding table in the Quinta Jazz pavilion",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Imagine your day unfolding",
    accent: "here",
    description:
      "Every celebration finds its own expression. These are some of the moments that have already become part of our story.",
    close: "Close",
    items: [
      { title: 'Where your **"I do"** comes to life.', category: "Weddings" },
      { title: "Where it all began. And continues.", category: "Music & Events" },
      { title: "There's always a reason to celebrate.", category: "Parties" },
      { title: "The right space to gather, inspire and celebrate.", category: "Corporate Events" },
    ],
  },
  why: {
    eyebrow: "The Quinta",
    title: "A place with room for your",
    accent: "story",
    description:
      "Nature, experience and a team that understands the meaning behind every detail.",
    watch: "See the venue",
    imageAlt: "Piano and double bass in a jazz club setting",
    items: [
      { title: "Nature that welcomes", text: "Expansive gardens, mature trees and distinct settings for every part of the day." },
      { title: "A celebration of your own", text: "The venue adapts to your story while preserving the calm character of the Quinta." },
      { title: "Quiet experience", text: "Years of celebrations have taught us when to guide, when to anticipate and when to let the moment unfold." },
      { title: "Care in every detail", text: "A present team from the first meeting to the final toast, with genuine hospitality." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked",
    accent: "questions",
    description:
      "Useful information for anyone planning their next event at Quinta Jazz Clube.",
    items: [
      {
        question: "What types of events can be held at Quinta Jazz?",
        answer:
          "Quinta Jazz is ready to host weddings, birthdays, corporate events, christenings, private parties and other celebrations. Our spaces adapt to different styles and event sizes.",
      },
      {
        question: "Can I hire just the venue?",
        answer:
          "Yes. We offer exclusive venue hire or more complete solutions, tailored to each client's needs.",
      },
      {
        question: "What does the turnkey service include?",
        answer:
          "Depending on the chosen package, we can take care of décor, catering, photography, sound and event coordination, ensuring a smooth experience from start to finish.",
      },
      {
        question: "Can I visit the quinta before booking?",
        answer:
          "Of course. We always recommend visiting the venue to see the facilities, clear up any questions and explore the different possibilities for your event.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We advise booking as early as possible, especially for weddings and high-season events, to guarantee the availability of your preferred date.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Come and discover the place for your",
    accent: "day",
    description:
      "A visit is the best way to experience the Quinta. Tell us what you imagine and we will welcome you with time to talk.",
    location: "Quinta Jazz, Matola",
    hours: "Mon-Fri • 09:00 - 20:00",
    whatsapp: "WhatsApp",
    call: "Call now",
  },
  form: {
    name: "Name",
    namePlaceholder: "Inês Costa",
    email: "Email",
    emailPlaceholder: "ines@email.com",
    phone: "Phone",
    phonePlaceholder: "+258 84 123 4567",
    eventType: "Event Type",
    eventTypePlaceholder: "Wedding",
    guests: "Number of Guests",
    date: "Date",
    message: "Message",
    messagePlaceholder: "Tell us more about your idea...",
    submit: "Request a visit",
    sending: "Sending...",
    success: "Thank you! Your message has been received and we'll be in touch shortly.",
    error: "Please fix the form details before submitting.",
    validation: {
      name: "Enter your name",
      email: "Enter a valid email",
      phone: "Enter a valid phone number",
      eventType: "Tell us the type of event",
      guests: "Tell us the number of guests",
      date: "Pick a date",
      message: "Describe your event",
    },
  },
  promo: {
    leadStrong: "Low season 2026",
    leadRest: " — events from Nov to Mar with special conditions",
    visits: "Guided tours every Saturday",
    chip: "Limited spots",
    cta: "Book a date →",
    close: "Dismiss promotion",
  },
  footer: {
    rights: "© 2026 Quinta Jazz Clube. All rights reserved.",
    links: [
      ["#hero", "Home"],
      ["#galeria", "Gallery"],
      ["#contacto", "Contact"],
    ],
  },
};

export type Translation = typeof pt;

export const translations: Record<Lang, Translation> = { pt, en };
