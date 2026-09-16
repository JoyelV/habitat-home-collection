import { ProductCard } from "@/theme/components/ProductCard";
import { resolveCatalog, type CatalogRef } from "@/theme/catalog";

type FeaturedCollectionProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  /** Semantic reference, e.g. catalog:new-arrivals or catalog:collection:kitchen */
  source?: CatalogRef;
  limit?: number;
  viewAll?: { label: string; href: string };
};

export function FeaturedCollection({
  eyebrow = "Featured",
  heading = "Everyday essentials",
  body = "A small edit of pieces that earn their place on the counter, the shelf and the sofa.",
  source = "catalog:new-arrivals",
  limit = 4,
  viewAll = { label: "View all", href: "#new-arrivals" },
}: FeaturedCollectionProps) {
  const products = resolveCatalog(source, limit);

  return (
    <section id="featured" className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
        <div>
          <p className="label-eyebrow">{eyebrow}</p>
          <h2 className="mt-4 text-[1.9rem] leading-tight text-foreground sm:text-[2.35rem]">
            {heading}
          </h2>
          <p className="mt-3 max-w-[48ch] text-[0.9rem] leading-relaxed text-muted-foreground">
            {body}
          </p>
        </div>
        <a
          href={viewAll.href}
          className="text-[0.7rem] uppercase tracking-[0.18em] text-foreground underline-offset-8 transition-colors duration-300 hover:underline"
        >
          {viewAll.label}
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-8 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </section>
  );
}
