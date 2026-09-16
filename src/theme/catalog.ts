/**
 * HABITAT — semantic catalog references.
 *
 * Sections never hold merchant IDs. They reference catalog sources such as
 * `catalog:new-arrivals` or `catalog:collection:<handle>`; the merchant maps
 * those handles to real products in their storefront admin.
 */

import carafe from "@/assets/product-carafe.jpg";
import fan from "@/assets/product-fan.jpg";
import blanket from "@/assets/product-blanket.jpg";
import storage from "@/assets/product-storage.jpg";

export type CatalogRef = `catalog:new-arrivals` | `catalog:collection:${string}`;

export type ProductVariant = {
  id: string;
  label: string;
  available: boolean;
};

export type Product = {
  handle: string;
  name: string;
  /** Merchant-provided short descriptor. No performance or benefit claims. */
  descriptor: string;
  price: string;
  image: string;
  collection: string;
  available: boolean;
  variants: ProductVariant[];
  /** Merchant-provided review summary; omitted when the merchant has none. */
  reviews?: { rating: number; count: number };
};

export const collections: { handle: string; title: string }[] = [
  { handle: "kitchen", title: "Kitchen" },
  { handle: "comfort", title: "Comfort" },
  { handle: "cooling", title: "Cooling" },
  { handle: "smart-home", title: "Smart Home" },
  { handle: "organization", title: "Organization" },
  { handle: "lifestyle", title: "Lifestyle" },
];

/** Sample catalog data — replaced by the merchant's own catalog. */
const products: Product[] = [
  {
    handle: "stoneware-carafe",
    name: "Stoneware Carafe",
    descriptor: "Matte glazed ceramic, 1.2 L",
    price: "$68",
    image: carafe,
    collection: "kitchen",
    available: true,
    variants: [
      { id: "sand", label: "Sand", available: true },
      { id: "stone", label: "Stone", available: true },
      { id: "charcoal", label: "Charcoal", available: false },
    ],
    reviews: { rating: 4.8, count: 42 },
  },
  {
    handle: "tower-fan",
    name: "Tower Fan",
    descriptor: "Bladeless column, three speeds",
    price: "$249",
    image: fan,
    collection: "cooling",
    available: true,
    variants: [
      { id: "stone", label: "Stone", available: true },
      { id: "charcoal", label: "Charcoal", available: true },
    ],
    reviews: { rating: 4.6, count: 118 },
  },
  {
    handle: "chunky-knit-throw",
    name: "Chunky Knit Throw",
    descriptor: "Cotton blend, 130 × 170 cm",
    price: "$120",
    image: blanket,
    collection: "comfort",
    available: true,
    variants: [
      { id: "clay", label: "Clay", available: true },
      { id: "ivory", label: "Ivory", available: true },
    ],
    reviews: { rating: 4.9, count: 76 },
  },
  {
    handle: "stacking-boxes",
    name: "Stacking Boxes",
    descriptor: "Solid oak, set of three",
    price: "$145",
    image: storage,
    collection: "organization",
    available: false,
    variants: [
      { id: "oak", label: "Oak", available: false },
      { id: "black-ash", label: "Black Ash", available: true },
    ],
    reviews: { rating: 4.7, count: 23 },
  },
];

/** Resolve a semantic catalog reference to products. */
export function resolveCatalog(ref: CatalogRef, limit?: number): Product[] {
  const list =
    ref === "catalog:new-arrivals"
      ? products
      : products.filter((p) => p.collection === ref.replace("catalog:collection:", ""));
  return typeof limit === "number" ? list.slice(0, limit) : list;
}
