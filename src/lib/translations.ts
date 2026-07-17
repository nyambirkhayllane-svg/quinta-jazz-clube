export type Lang = "pt" | "en";

const pt = {
  nav: {
    links: [
      ["#sobre", "Sobre"],
      ["#galeria", "Galeria"],
      ["#faq", "FAQ"],
      ["#contacto", "Contacto"],
    ],
    cta: "Solicitar orçamento",
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
    badge: "O palco dos seus melhores momentos",
    titleLine1: "O espaço. A música.",
    titleLine2Pre: "A sua ",
    titleAccent: "celebração",
    paragraph:
      "Deixe de imaginar o evento perfeito. Na Quinta Jazz Clube encontra o cenário, a decoração, a gastronomia e a banda — tudo num só lugar, com uma equipa dedicada do primeiro brinde à última música.",
    imageAlt: "Cerimónia de casamento nos jardins da Quinta Jazz Clube",
    stats: [
      { value: 30, suffix: "+", prefix: "", label: "Anos de história" },
      { value: 200, suffix: "+", prefix: "", label: "Eventos realizados" },
      { value: 100, suffix: "%", prefix: "", label: "Compromisso" },
      { value: 500, suffix: "", prefix: "Até", label: "Convidados" },
    ],
  },
  about: {
    eyebrow: "Desde 1995",
    titlePre: "O cenário perfeito para momentos que merecem ser ",
    titleAccent: "inesquecíveis",
    descPre:
      "Há mais de três décadas, a Quinta Jazz transforma momentos especiais em experiências memoráveis. Nascida como um palco de concertos de jazz e encontros culturais, evoluiu para um espaço de eventos onde a natureza, a ",
    descHighlight: "elegância",
    descPost:
      " e a atenção ao detalhe se unem para criar celebrações únicas. Seja um casamento, um aniversário ou um evento privado, adaptamos cada projeto à visão de cada cliente, oferecendo desde o aluguer do espaço até soluções completas chave na mão.",
    imageAlt: "Mesa decorada para casamento no salão da Quinta Jazz",
  },
  gallery: {
    eyebrow: "Galeria",
    title: "Um espaço que se transforma em cada",
    accent: "ocasião",
    description:
      "Explore momentos já vividos em ambientes sofisticados, elegantes e cuidadosamente preparados.",
    close: "Fechar",
    items: [
      { title: 'Onde o vosso **"Sim"** ganha vida.', category: "Casamentos" },
      { title: "Onde tudo começou. E continua.", category: "Música & Eventos" },
      { title: "Há sempre uma razão para celebrar.", category: "Festas" },
      { title: "O espaço certo para reunir, inspirar e celebrar.", category: "Eventos Corporativos" },
    ],
  },
  why: {
    eyebrow: "Porque escolher?",
    title: "Tudo o que torna a Quinta Jazz",
    accent: "única",
    description:
      "Do conceito à execução, cada detalhe é pensado para oferecer uma experiência premium e sem stress.",
    watch: "Ver o espaço",
    imageAlt: "Piano e contrabaixo em ambiente de clube de jazz",
    items: [
      { title: "Espaço sofisticado", text: "Um ambiente elegante, acolhedor e preparado para experiências memoráveis." },
      { title: "Decoração personalizada", text: "Cada detalhe é desenhado para refletir a sua identidade e estilo." },
      { title: "Serviço chave na mão", text: "Do aluguer do espaço à organização completa do evento, tratamos de cada detalhe por si." },
      { title: "Localização privilegiada", text: "Acesso fácil e envolvente, ideal para eventos que querem destacar-se." },
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
    title: "Vamos criar o evento da sua",
    accent: "vida",
    description:
      "Partilhe as suas ideias e deixe-nos transformar a sua visão numa experiência única e sofisticada.",
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
    submit: "Solicitar orçamento",
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
    cta: "Request a quote",
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
    badge: "The stage for your finest moments",
    titleLine1: "The venue. The music.",
    titleLine2Pre: "Your ",
    titleAccent: "celebration",
    paragraph:
      "Stop imagining the perfect event. At Quinta Jazz Clube you'll find the setting, the décor, the gastronomy and the band — all in one place, with a dedicated team from the first toast to the last song.",
    imageAlt: "Wedding ceremony in the gardens of Quinta Jazz Clube",
    stats: [
      { value: 30, suffix: "+", prefix: "", label: "Years of history" },
      { value: 200, suffix: "+", prefix: "", label: "Events hosted" },
      { value: 100, suffix: "%", prefix: "", label: "Commitment" },
      { value: 500, suffix: "", prefix: "Up to", label: "Guests" },
    ],
  },
  about: {
    eyebrow: "Since 1995",
    titlePre: "The perfect setting for moments that deserve to be ",
    titleAccent: "unforgettable",
    descPre:
      "For more than three decades, Quinta Jazz has been turning special moments into memorable experiences. Born as a stage for jazz concerts and cultural gatherings, it has evolved into an events venue where nature, ",
    descHighlight: "elegance",
    descPost:
      " and attention to detail come together to create one-of-a-kind celebrations. Whether it's a wedding, a birthday or a private event, we tailor every project to each client's vision — from simple venue hire to complete turnkey solutions.",
    imageAlt: "Decorated wedding table in the Quinta Jazz pavilion",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "A venue that transforms for every",
    accent: "occasion",
    description:
      "Step into moments already lived in sophisticated, elegant and carefully prepared settings.",
    close: "Close",
    items: [
      { title: 'Where your **"I do"** comes to life.', category: "Weddings" },
      { title: "Where it all began. And continues.", category: "Music & Events" },
      { title: "There's always a reason to celebrate.", category: "Parties" },
      { title: "The right space to gather, inspire and celebrate.", category: "Corporate Events" },
    ],
  },
  why: {
    eyebrow: "Why choose us?",
    title: "Everything that makes Quinta Jazz",
    accent: "unique",
    description:
      "From concept to execution, every detail is designed to deliver a premium, stress-free experience.",
    watch: "See the venue",
    imageAlt: "Piano and double bass in a jazz club setting",
    items: [
      { title: "Sophisticated venue", text: "An elegant, welcoming setting built for memorable experiences." },
      { title: "Personalised décor", text: "Every detail is designed to reflect your identity and style." },
      { title: "Turnkey service", text: "From venue hire to full event planning, we take care of every detail for you." },
      { title: "Prime location", text: "Easy, charming access — ideal for events that want to stand out." },
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
    title: "Let's create the event of your",
    accent: "life",
    description:
      "Share your ideas and let us turn your vision into a unique, sophisticated experience.",
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
    submit: "Request a quote",
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
