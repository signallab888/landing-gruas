import { MultiStepForm } from "@/components/form/MultiStepForm";
import { HeroVideoBg } from "./HeroVideoBg";

export function HeroSection() {
  return (
    <div>
      {/* Navbar */}
      <header className="bg-brand-navy border-b border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/gruas-general-4446/logo.svg" alt="MachineryHunters" width={180} height={29} />
          <div className="hidden md:flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Evaluaciones abiertas</span>
          </div>
        </div>
      </header>

      {/* Urgency strip */}
      <div className="bg-brand-orange/10 border-b border-brand-orange/20 px-4 py-2.5 relative z-20">
        <p className="text-center text-sm text-brand-orange font-semibold tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="sm:hidden">⏱ Grúas disponibles en México y USA</span>
          <span className="hidden sm:inline">⏱ Equipos disponibles en USA — moviéndose esta semana</span>
        </p>
      </div>

      {/* Hero body */}
      <section className="relative overflow-hidden bg-white">

        {/* Video background — clip 0:14-0:20 */}
        <HeroVideoBg />

        {/* Overlay: opaque on left for text, fades out on right so video shows */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.97] from-[28%] via-white/90 via-[45%] to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">

          {/* Mobile-only compact headline — above the form */}
          <div className="lg:hidden mb-5">
            <h1 className="font-display text-3xl font-black text-brand-navy leading-[1.05] uppercase tracking-tight">
              COMPRA TU GRÚA EN USA:{" "}
              <span className="text-brand-orange">INSPECCIONADA, IMPORTADA</span>{" "}
              Y PUESTA EN TU OBRA SIN SORPRESAS EN EL PRECIO
            </h1>
          </div>

          {/* Grid: on mobile form is on top, on desktop copy is left / form is right */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

            {/* Left column — full desktop copy (hidden on mobile, shown via desktop) */}
            <div className="hidden lg:flex flex-col gap-6">
              <h1 className="font-display text-4xl md:text-5xl lg:text-[50px] font-black text-brand-navy leading-[1.04] uppercase tracking-tight">
                COMPRA TU GRÚA EN USA:{" "}
                <span className="text-brand-orange">INSPECCIONADA, IMPORTADA</span>{" "}
                Y PUESTA EN TU OBRA SIN SORPRESAS EN EL PRECIO
              </h1>

              <p className="text-slate-600 text-base leading-relaxed font-medium">
                Articuladas, Titán y Todo Terreno de marcas como HIAB, National Crane, Palfinger y Terex,
                verificadas antes de cruzar la frontera, con precio final hasta tu ciudad.
              </p>

              <p className="text-slate-700 text-[15px] leading-relaxed border-l-4 border-brand-orange/50 pl-4">
                No vendemos fotos de internet. Cada equipo pasa por inspección técnica en USA antes de ser ofrecido.
                Tú recibes el reporte, el historial y el precio completo: importación, flete y entrega incluidos,
                antes de tomar cualquier decisión.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Inspección técnica",
                  "Precio final hasta tu obra",
                  "Entrega ~20 días",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-sm text-slate-700 font-semibold bg-white border border-slate-200 rounded-full px-3.5 py-1.5 shadow-sm">
                    <span className="text-brand-orange font-bold">✓</span> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column — form card (renders first on mobile) */}
            <div id="formulario" className="w-full lg:sticky lg:top-6">
              <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-brand-orange via-brand-orange/60 to-brand-navy shadow-[0_8px_40px_-4px_rgba(232,84,10,0.35)]">
                <div className="bg-white rounded-[14px] overflow-hidden">

                  <div className="bg-brand-navy px-5 py-4 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-white font-display font-bold text-xs sm:text-base uppercase tracking-wide leading-tight">
                        <span className="sm:hidden">Evaluación sin costo</span>
                        <span className="hidden sm:inline">Solicita tu evaluación sin costo</span>
                      </p>
                      <p className="text-white/50 text-[11px] mt-0.5 hidden sm:block">Sin compromiso · Confidencial · Precio final hasta tu ciudad</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-500/15 border border-green-400/30 rounded-full px-3 py-1 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-400 text-[10px] font-semibold">En línea</span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-7">
                    <p className="text-slate-500 text-sm text-center mb-5 leading-relaxed">
                      Cuéntanos tu operación. Un especialista te contacta en menos de 24 horas con opciones reales del mercado norteamericano.
                    </p>
                    <MultiStepForm />
                  </div>

                </div>
              </div>

              <p className="text-center text-slate-400 text-xs mt-3">
                🔒 Tu información es 100% confidencial
              </p>
            </div>

          </div>


        </div>
      </section>
    </div>
  );
}
