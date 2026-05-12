import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import { Suspense } from "react";
import { UTMCapture } from "@/components/UTMCapture";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Compra una Grúa en EE.UU. con Respaldo Real | Equipos Verificados",
  description:
    "Accede a equipos de grúas verificados en EE.UU., estructurados como inversión y entregados listos para operar. Evaluación personalizada sin compromiso.",
  keywords:
    "grua usada estados unidos, comprar grua mexico, grua articulada, grua titan, grua todo terreno, importar grua eeuu",
  openGraph: {
    title: "Compra una Grúa en EE.UU. con Respaldo Real",
    description:
      "Equipos verificados en EE.UU. estructurados como inversión y entregados listos para operar.",
    type: "website",
    locale: "es_MX",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${barlow.variable} ${inter.variable}`}>
      <body>
        <Suspense fallback={null}>
          <UTMCapture />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
