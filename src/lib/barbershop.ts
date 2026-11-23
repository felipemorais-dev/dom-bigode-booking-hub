export const WHATSAPP_NUMBER = "5521999999999";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Barbearia Dom Bigode e gostaria de agendar um horário.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsappLink(serviceName: string): string {
  return whatsappLink(
    `Olá! Vim pelo site da Barbearia Dom Bigode e gostaria de agendar: ${serviceName}.`,
  );
}

export type Service = {
  name: string;
  detail: string;
  description: string;
  price: number;
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    name: "Corte Masculino",
    detail: "Degradê / Social",
    description: "Tesoura e máquina com acabamento na navalha, do clássico ao moderno.",
    price: 45,
  },
  {
    name: "Barba Completa",
    detail: "Com toalha quente",
    description: "Ritual completo com toalha quente, óleos e navalha para um acabamento impecável.",
    price: 35,
  },
  {
    name: "Combo Corte + Barba",
    detail: "O mais pedido",
    description: "A experiência Dom Bigode completa: corte sob medida e barba com toalha quente.",
    price: 70,
    featured: true,
  },
  {
    name: "Acabamento",
    detail: "Pezinho + Sobrancelha",
    description: "Manutenção rápida para manter o visual alinhado entre um corte e outro.",
    price: 25,
  },
];

export function formatPrice(value: number): string {
  return `R$ ${value}`;
}

export const OPENING_HOURS = {
  days: "Terça a Sábado",
  hours: "09h às 20h",
  closed: "Domingo e Segunda",
};

export const ADDRESS = {
  street: "Rua Dr. Alfredo Backer, 1250",
  neighborhood: "Alcântara",
  city: "São Gonçalo - RJ",
  zip: "24452-005",
};
