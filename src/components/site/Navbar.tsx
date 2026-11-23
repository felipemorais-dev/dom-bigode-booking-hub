import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/barbershop";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Localização" },
];

export function Logo() {
  return (
    <a href="#topo" className="group flex items-baseline gap-2 leading-none" aria-label="Barbearia Dom Bigode — início">
      <span className="font-serif text-xl italic text-primary">Dom</span>
      <span className="font-display text-2xl font-extrabold uppercase tracking-[0.12em] text-foreground">
        Bigode
      </span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled || open
          ? "border-b border-border/60 bg-background/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-4">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/75 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="gold" size="sm" className="h-10 px-5">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Agendar Horário
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 px-5 pb-6 md:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/40 py-4 font-display text-2xl font-bold uppercase tracking-wider text-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="gold" size="xl" className="mt-6 w-full">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Agendar Horário
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
