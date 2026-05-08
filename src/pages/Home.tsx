import { Hero } from "../components/home/Hero";
import { ProductUniverse } from "../components/home/ProductUniverse";
import { PepsiZero } from "../components/home/PepsiZero";
import { Culture } from "../components/home/Culture";
import { useEffect } from "react";

export function Home() {
  // Smooth scroll behavior to mimic lenis slightly
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-pepsi-black w-full overflow-hidden">
      <Hero />
      <ProductUniverse />
      <PepsiZero />
      <Culture />
    </main>
  );
}
