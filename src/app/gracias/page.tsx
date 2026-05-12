import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¡Gracias por tu registro! | Grúas EE.UU.",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-hero-gradient flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        <div className="mb-8 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gruas-general-4446/logo.svg"
            alt="Logo"
            width={180}
            height={29}
          />
        </div>

        <div className="w-20 h-20 bg-brand-orange/10 border-2 border-brand-orange rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10 text-brand-orange"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
          ¡Gracias por tu registro!
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed mb-10">
          Revisa tu <span className="text-green-600 font-semibold">WhatsApp</span> y tu{" "}
          <span className="text-blue-600 font-semibold">correo</span>, porque nos
          pondremos en contacto contigo muy pronto.
        </p>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-10 text-left space-y-4 shadow-sm">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">
            ¿Qué pasa ahora?
          </p>
          {[
            { step: "1", text: "Revisamos la información que nos proporcionaste" },
            { step: "2", text: "Analizamos las opciones disponibles para tu operación" },
            { step: "3", text: "Te presentamos equipos reales con precios y condiciones" },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {item.step}
              </div>
              <p className="text-slate-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="text-slate-400 text-sm hover:text-slate-600 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
