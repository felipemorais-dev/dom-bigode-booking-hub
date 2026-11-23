import { describe, expect, it } from "vitest";

import { OPENING_HOURS, SERVICES, serviceWhatsappLink, whatsappLink } from "./barbershop";

const price = (name: string) => SERVICES.find((s) => s.name === name)?.price;

describe("Barbearia Dom Bigode rules", () => {
  it("charges R$ 45 for the men's haircut", () => {
    expect(price("Corte Masculino")).toBe(45);
  });

  it("charges R$ 35 for the full beard with hot towel", () => {
    expect(price("Barba Completa")).toBe(35);
  });

  it("charges R$ 70 for the haircut + beard combo", () => {
    expect(price("Combo Corte + Barba")).toBe(70);
  });

  it("charges R$ 25 for the finishing + eyebrow", () => {
    expect(price("Acabamento")).toBe(25);
  });

  it("opens WhatsApp on +55 21 99999-9999 with a pre-filled message", () => {
    const url = new URL(whatsappLink());
    expect(`${url.origin}${url.pathname}`).toBe("https://wa.me/5521999999999");
    expect(url.searchParams.get("text")).toContain("agendar");
  });

  it("includes the chosen service in the booking message", () => {
    const url = new URL(serviceWhatsappLink("Barba Completa"));
    expect(url.searchParams.get("text")).toContain("Barba Completa");
  });

  it("is open Tuesday to Saturday, 9h to 20h", () => {
    expect(OPENING_HOURS.days).toBe("Terça a Sábado");
    expect(OPENING_HOURS.hours).toBe("09h às 20h");
  });
});
