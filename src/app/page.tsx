import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { InspeccionSection } from "@/components/sections/InspeccionSection";
import { TiposGruaSection } from "@/components/sections/TiposGruaSection";
import { PrecioSection } from "@/components/sections/PrecioSection";
import { VideosTestimonios } from "@/components/sections/VideosTestimonios";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const metadata: Metadata = {
  title: "Compra una Grúa en USA: Inspeccionada, Importada y Puesta en tu Obra",
  description:
    "Articuladas, Titán y Todo Terreno verificadas antes de cruzar la frontera. Precio final hasta tu ciudad, importación, flete y entrega incluidos. Evaluación sin costo.",
};

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <ProcessSteps />
      <ValueProposition />
      <InspeccionSection />
      <TiposGruaSection />
      <PrecioSection />
      <VideosTestimonios />
      <FAQSection />
      <CTAFinal />
      <SiteFooter />
    </main>
  );
}
