import heroImage from "@/assets/hero-kitchen.jpg";

type HeroProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
};

export function Hero({
  eyebrow = "Home & Lifestyle",
  heading = "Objects for the way a day actually moves.",
  body = "A considered selection for the kitchen, the quiet hours and everything in between — chosen for material, proportion and daily use.",
  primaryCta = { label: "Shop the collection", href: "#featured" },
  secondaryCta = { label: "New arrivals", href: "#new-arrivals" },
  image = heroImage,
  imageAlt = "Sunlit modern kitchen with stone counter, oak cabinetry and everyday kitchen objects in use",
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-secondary">
      <div className="mx-auto grid max-w-[1400px] items-stretch lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="order-2 flex flex-col justify-center px-5 py-12 sm:px-8 lg:order-1 lg:py-28 lg:pr-16">
          <p className="label-eyebrow">{eyebrow}</p>
          <h1 className="mt-6 max-w-[16ch] text-[2.35rem] leading-[1.06] text-foreground sm:text-[3rem] lg:text-[3.6rem]">
            {heading}
          </h1>
          <p className="mt-6 max-w-[46ch] text-[0.95rem] leading-relaxed text-muted-foreground">
            {body}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center bg-primary px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.18em] text-primary-foreground transition-opacity duration-300 hover:opacity-85"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className="inline-flex items-center justify-center border border-foreground/25 px-7 py-3.5 text-[0.75rem] uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-foreground"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <img
            src={image}
            alt={imageAlt}
            width={1600}
            height={1200}
            className="h-[58vw] max-h-[720px] w-full object-cover sm:h-[46vw] lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}
