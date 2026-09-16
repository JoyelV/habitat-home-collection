import { useState } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { collections } from "@/theme/catalog";

type HeaderProps = {
  brand?: string;
  /** Merchant-configurable navigation, defaults to the theme's category set. */
  links?: { label: string; href: string }[];
  cartCount?: number;
};

export function Header({
  brand = "HABITAT",
  links = collections.map((c) => ({ label: c.title, href: `#${c.handle}` })),
  cartCount = 0,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-5 py-4 sm:px-8 lg:py-5">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="-ml-1 p-1 text-foreground lg:hidden"
        >
          <Menu className="size-5" strokeWidth={1.4} />
        </button>

        <a
          href="/"
          className="font-display text-[1.35rem] tracking-[0.3em] text-foreground lg:text-[1.5rem]"
        >
          {brand}
        </a>

        <nav className="ml-10 hidden flex-1 items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-[0.8125rem] tracking-[0.06em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4 lg:ml-0">
          <button type="button" aria-label="Search" className="p-1 text-foreground">
            <Search className="size-[1.15rem]" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="hidden p-1 text-foreground sm:block"
          >
            <User className="size-[1.15rem]" strokeWidth={1.4} />
          </button>
          <button type="button" aria-label="Cart" className="relative p-1 text-foreground">
            <ShoppingBag className="size-[1.15rem]" strokeWidth={1.4} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-accent text-[0.625rem] text-accent-foreground">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-[1.35rem] tracking-[0.3em]">{brand}</span>
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="size-5" strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex flex-col px-5 pt-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-2xl text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
