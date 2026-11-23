import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-wide text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      <div className={cn("gold-rule mt-5 w-24", align === "center" && "mx-auto")} />
      {subtitle && <p className="mt-5 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}
