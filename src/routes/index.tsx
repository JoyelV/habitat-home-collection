import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/theme/sections/AnnouncementBar";
import { Header } from "@/theme/sections/Header";
import { Hero } from "@/theme/sections/Hero";
import { FeaturedCollection } from "@/theme/sections/FeaturedCollection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "HABITAT — Home & Lifestyle Storefront Theme" },
      {
        name: "description",
        content:
          "HABITAT is a warm, contemporary storefront theme for home goods, kitchen, comfort, cooling and organization products.",
      },
      { property: "og:title", content: "HABITAT — Home & Lifestyle Storefront Theme" },
      {
        property: "og:description",
        content:
          "A calm, editorial ecommerce theme for home, kitchen and lifestyle merchants.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <FeaturedCollection />
      </main>
    </div>
  );
}
