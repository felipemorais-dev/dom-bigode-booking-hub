import { createFileRoute } from "@tanstack/react-router";
import { Beer, CalendarClock, Clock, MapPin, Navigation, Phone, Scissors, Snowflake, Star } from "lucide-react";

import { Logo, Navbar } from "@/components/site/Navbar";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppFloat, WhatsAppIcon } from "@/components/site/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import {
  ADDRESS,
  OPENING_HOURS,
  SERVICES,
  formatPrice,
  serviceWhatsappLink,
  whatsappLink,
} from "@/lib/barbershop";
import { cn } from "@/lib/utils";

const unsplash = (id: string, w: number, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}${h ? `&h=${h}` : ""}`;

const HERO_ID = "1585747860715-2ba37e788b70";
const HERO_OG = unsplash(HERO_ID, 1200, 630);

const TITLE = "Barbearia Dom Bigode | Corte e barba em São Gonçalo - RJ";
const DESCRIPTION =
  "Estilo, tradição e precisão em cada corte. Barbearia premium em Alcântara, São Gonçalo: corte, barba com toalha quente e combo. Agende pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO_OG },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_OG },
    ],
  }),
  component: Index,
});

const DIFERENCIAIS = [
  {
    icon: Snowflake,
    title: "Ambiente Climatizado",
    text: "Conforto total mesmo no calor de São Gonçalo. Relaxe enquanto cuidamos do seu visual.",
  },
  {
    icon: Beer,
    title: "Cerveja Gelada Cortesia",
    text: "Uma cerveja trincando por nossa conta para acompanhar o seu corte.",
  },
  {
    icon: CalendarClock,
    title: "Atendimento com Hora Marcada",
    text: "Sem fila e sem espera. Você chega, senta na cadeira e é atendido na hora.",
  },
];

const DEPOIMENTOS = [
  {
    name: "Rafael Monteiro",
    place: "Alcântara",
    text: "Melhor degradê que já fiz em São Gonçalo. Ambiente top, atendimento pontual e a cerveja gelada fecha com chave de ouro.",
  },
  {
    name: "Thiago Albuquerque",
    place: "Zé Garoto",
    text: "A barba com toalha quente é outro nível. Saio de lá renovado toda vez. Virei cliente fiel do Dom Bigode.",
  },
  {
    name: "Lucas Ferreira",
    place: "Mutondo",
    text: "Agendei pelo WhatsApp, cheguei e fui atendido na hora. Profissionais caprichosos e lugar muito bem cuidado.",
  },
];

const GALERIA = [
  { id: "1503951914875-452162b0f3f1", alt: "Barbeiro finalizando barba com navalha" },
  { id: "1599351431202-1e0f0137899a", alt: "Acabamento de degradê com máquina" },
  { id: "1517832606299-7ae9b720a186", alt: "Barba sendo aparada com tesoura" },
  { id: "1622286342621-4bd786c2447c", alt: "Corte moderno com textura" },
  { id: "1621605815971-fbc98d665033", alt: "Ferramentas da barbearia sobre a bancada" },
  { id: "1622287162716-f311baa1a2b8", alt: "Barbeiro atendendo cliente no salão" },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Servicos />
        <Diferenciais />
        <Sobre />
        <Galeria />
        <Depoimentos />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative flex min-h-[100svh] items-center">
      <img
        src={unsplash(HERO_ID, 2000)}
        alt="Interior da Barbearia Dom Bigode com cadeiras clássicas e luz quente"
        className="absolute inset-0 size-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            Alcântara · São Gonçalo - RJ
          </p>
          <h1 className="mt-6 font-display text-5xl font-black uppercase leading-[0.9] tracking-wide sm:text-7xl lg:text-8xl">
            Estilo, tradição e <span className="text-gold-gradient">precisão</span> em cada corte
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/80 sm:text-xl">
            Sua experiência premium de barbearia no coração de São Gonçalo.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild variant="gold" size="xl">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5!" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            <a
              href="#servicos"
              className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-primary sm:ml-4"
            >
              Ver serviços e preços →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Servicos() {
  return (
    <section id="servicos" className="relative px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Serviços & Preços"
          title="Cuidado sob medida"
          subtitle="Técnica apurada, produtos de primeira e atenção a cada detalhe."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.name}
              className={cn(
                "group relative flex flex-col rounded-sm border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/70",
                s.featured ? "border-primary/70" : "border-border",
              )}
            >
              {s.featured && (
                <span className="absolute -top-3 left-7 bg-gold-gradient px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary-foreground">
                  Mais pedido
                </span>
              )}
              <Scissors className="size-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide">{s.name}</h3>
              <p className="mt-1 font-serif text-lg italic text-primary">{s.detail}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <div className="my-6 gold-rule opacity-50" />
              <p className="font-display text-5xl font-extrabold tracking-wide">
                <span className="mr-1 align-top text-xl text-primary">R$</span>
                {formatPrice(s.price).replace("R$ ", "")}
              </p>
              <Button asChild variant="subtle" className="mt-6 h-10 w-full rounded-sm">
                <a
                  href={serviceWhatsappLink(`${s.name} (${s.detail}) - ${formatPrice(s.price)}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar este serviço
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Diferenciais() {
  return (
    <section className="border-y border-border/60 bg-card px-5 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3 md:gap-8">
        {DIFERENCIAIS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <div className="flex size-20 items-center justify-center rounded-full border border-primary/50 bg-background">
              <Icon className="size-8 text-primary" strokeWidth={1.4} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide">{title}</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="absolute -left-3 -top-3 size-full border border-primary/40" aria-hidden="true" />
          <img
            src={unsplash("1512690459411-b9245aed614b", 1000, 1100)}
            alt="Cadeira clássica de barbeiro em couro"
            loading="lazy"
            className="relative aspect-[10/11] w-full object-cover"
          />
          <div className="absolute -bottom-6 right-4 bg-gold-gradient px-6 py-4 text-primary-foreground shadow-gold sm:right-8">
            <p className="font-display text-4xl font-black leading-none">+10</p>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em]">anos de navalha</p>
          </div>
        </div>
        <div>
          <SectionHeading align="left" eyebrow="Sobre nós" title="Barbearia de verdade, do jeito clássico" />
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              A Dom Bigode nasceu em Alcântara com uma ideia simples: resgatar o ritual da barbearia
              tradicional, com o padrão de acabamento que o homem moderno exige.
            </p>
            <p>
              Aqui cada cliente tem hora marcada, conversa boa e atenção total do barbeiro. Do social
              ao degradê mais navalhado, o compromisso é o mesmo: você sair melhor do que entrou.
            </p>
          </div>
          <p className="mt-8 font-serif text-2xl italic text-primary">“Tradição no corte, respeito no atendimento.”</p>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section id="galeria" className="bg-card px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Galeria" title="Nosso trabalho" subtitle="Um pouco do dia a dia na cadeira do Dom Bigode." />
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALERIA.map((g, i) => (
            <figure
              key={g.id}
              className={cn("group relative overflow-hidden", i === 0 && "md:row-span-2")}
            >
              <img
                src={unsplash(g.id, 800, i === 0 ? 1100 : 600)}
                alt={g.alt}
                loading="lazy"
                className="size-full object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 border border-primary/0 transition-colors duration-500 group-hover:border-primary/60" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  return (
    <section className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Depoimentos" title="Quem senta, aprova" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {DEPOIMENTOS.map((d) => (
            <figure key={d.name} className="flex flex-col rounded-sm border border-border bg-card p-7 shadow-card">
              <div className="flex gap-1" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-foreground/85 leading-relaxed">“{d.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-gold-gradient font-display text-lg font-bold text-primary-foreground">
                  {d.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{d.name}</span>
                  <span className="block text-xs text-muted-foreground">{d.place}, São Gonçalo</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Localizacao() {
  const mapsQuery = encodeURIComponent(`${ADDRESS.street}, ${ADDRESS.neighborhood}, ${ADDRESS.city}`);
  return (
    <section id="localizacao" className="border-t border-border/60 bg-card px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHeading align="left" eyebrow="Localização & Horários" title="Venha nos visitar" />

          <ul className="mt-10 space-y-8">
            <li className="flex gap-5">
              <MapPin className="mt-1 size-6 shrink-0 text-primary" strokeWidth={1.5} />
              <div>
                <p className="font-display text-xl font-bold uppercase tracking-wide">Endereço</p>
                <p className="mt-1 text-muted-foreground">
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.neighborhood}, {ADDRESS.city}
                  <br />
                  CEP {ADDRESS.zip}
                </p>
              </div>
            </li>
            <li className="flex gap-5">
              <Clock className="mt-1 size-6 shrink-0 text-primary" strokeWidth={1.5} />
              <div className="w-full max-w-sm">
                <p className="font-display text-xl font-bold uppercase tracking-wide">Horário de funcionamento</p>
                <div className="mt-2 flex justify-between border-b border-border py-2 text-sm">
                  <span className="text-foreground/85">{OPENING_HOURS.days}</span>
                  <span className="font-semibold text-primary">{OPENING_HOURS.hours}</span>
                </div>
                <div className="flex justify-between py-2 text-sm">
                  <span className="text-muted-foreground">{OPENING_HOURS.closed}</span>
                  <span className="text-muted-foreground">Fechado</span>
                </div>
              </div>
            </li>
            <li className="flex gap-5">
              <Phone className="mt-1 size-6 shrink-0 text-primary" strokeWidth={1.5} />
              <div>
                <p className="font-display text-xl font-bold uppercase tracking-wide">WhatsApp</p>
                <p className="mt-1 text-muted-foreground">(21) 99999-9999</p>
              </div>
            </li>
          </ul>

          <Button asChild variant="gold" size="xl" className="mt-10 w-full sm:w-auto">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5!" />
              Agendar Horário
            </a>
          </Button>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-sm border border-border map-grid lg:min-h-full">
          {/* Simulated map */}
          <div className="absolute left-0 right-0 top-[38%] h-5 -rotate-6 bg-accent/80" aria-hidden="true" />
          <div className="absolute bottom-0 left-[58%] top-0 w-4 rotate-12 bg-accent/80" aria-hidden="true" />
          <div className="absolute left-0 right-0 top-[72%] h-3 rotate-3 bg-accent/60" aria-hidden="true" />
          <div className="absolute bottom-0 left-[22%] top-0 w-3 -rotate-6 bg-accent/60" aria-hidden="true" />
          <div className="absolute right-[8%] top-[10%] size-24 rounded-sm bg-whatsapp/10" aria-hidden="true" />

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
            <div className="mb-2 whitespace-nowrap bg-background px-3 py-2 text-xs font-semibold shadow-card">
              Barbearia Dom Bigode
            </div>
            <span className="relative flex size-12 items-center justify-center rounded-full bg-gold-gradient shadow-gold">
              <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" aria-hidden="true" />
              <Scissors className="relative size-5 text-primary-foreground" />
            </span>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 flex items-center gap-2 bg-background/95 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground shadow-card transition-colors hover:text-primary"
          >
            <Navigation className="size-4 text-primary" />
            Abrir no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <Logo />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Barbearia Dom Bigode · {ADDRESS.neighborhood}, {ADDRESS.city}
        </p>
      </div>
    </footer>
  );
}
