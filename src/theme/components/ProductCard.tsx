import { useState } from "react";
import { Plus, Star } from "lucide-react";
import type { Product } from "@/theme/catalog";

export function ProductCard({ product }: { product: Product }) {
  const [variant, setVariant] = useState(
    product.variants.find((v) => v.available)?.id ?? product.variants[0]?.id,
  );
  const selected = product.variants.find((v) => v.id === variant);
  const purchasable = product.available && Boolean(selected?.available);

  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1008}
          height={1008}
          className="aspect-square w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
        {!purchasable && (
          <span className="absolute left-3 top-3 bg-background/90 px-2.5 py-1 text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
            Out of stock
          </span>
        )}
        <button
          type="button"
          disabled={!purchasable}
          aria-label={`Quick add ${product.name}`}
          className="absolute bottom-3 right-3 flex size-9 items-center justify-center bg-background text-foreground opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100 disabled:cursor-not-allowed disabled:opacity-0"
        >
          <Plus className="size-4" strokeWidth={1.4} />
        </button>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="text-[0.95rem] font-medium tracking-tight text-foreground">
          {product.name}
        </h3>
        <span className="text-[0.9rem] text-foreground">{product.price}</span>
      </div>
      <p className="mt-1 text-[0.8125rem] text-muted-foreground">{product.descriptor}</p>

      {product.reviews && (
        <p className="mt-2 flex items-center gap-1.5 text-[0.75rem] text-muted-foreground">
          <Star className="size-3.5 fill-current text-accent" strokeWidth={0} />
          {product.reviews.rating.toFixed(1)}
          <span className="text-muted-foreground/70">({product.reviews.count})</span>
        </p>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {product.variants.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => setVariant(v.id)}
            disabled={!v.available}
            className={`border px-2.5 py-1 text-[0.6875rem] uppercase tracking-[0.12em] transition-colors duration-300 ${
              v.id === variant
                ? "border-foreground text-foreground"
                : "border-border text-muted-foreground hover:border-foreground/40"
            } ${v.available ? "" : "line-through opacity-45"}`}
          >
            {v.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        disabled={!purchasable}
        className="mt-4 w-full border border-foreground/25 py-3 text-[0.7rem] uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-foreground hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:border-border disabled:text-muted-foreground disabled:hover:bg-transparent"
      >
        {purchasable ? "Add to cart" : "Unavailable"}
      </button>
    </article>
  );
}
