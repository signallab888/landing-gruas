export function FinanciamientoSection() {
  return (
    <section className="bg-white py-20 px-4 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-brand-navy rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 overflow-hidden relative">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/8 rounded-full blur-3xl pointer-events-none" />

          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center">
            <svg className="w-7 h-7 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <div className="flex-1 relative z-10">
            <h2 className="font-display text-2xl md:text-3xl font-black text-white uppercase leading-tight mb-3">
              ¿NO TIENES EL MONTO COMPLETO AL CONTADO?
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed">
              Somos especialistas en importación y venta de maquinaria, no en crédito — pero sabemos que el financiamiento es una necesidad real. Por eso trabajamos con aliados financieros especializados en maquinaria pesada que pueden estructurar <strong className="text-white/80">arrendamiento o crédito</strong> para tu compra.
            </p>
            <p className="text-white/50 text-sm mt-3">
              Menciona en tu formulario si necesitas financiamiento y te conectamos con las opciones disponibles para tu caso.
            </p>
          </div>

          <a
            href="#formulario"
            className="flex-shrink-0 bg-brand-orange hover:bg-brand-orange-dark text-white font-display font-bold py-3.5 px-7 rounded-xl transition-all duration-200 text-sm uppercase tracking-wide whitespace-nowrap shadow-lg shadow-brand-orange/25 hover:-translate-y-0.5"
          >
            Mencionar en mi evaluación
          </a>
        </div>
      </div>
    </section>
  );
}
