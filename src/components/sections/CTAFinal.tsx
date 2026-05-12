export function CTAFinal() {
  return (
    <section className="relative bg-brand-navy py-28 px-4 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-orange/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-brand-orange/12 border border-brand-orange/30 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          <span className="text-white/80 text-sm font-medium">Sin compromiso · Evaluación gratuita</span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-5">
          SI ESTÁS EVALUANDO COMPRAR UNA GRÚA EN LOS PRÓXIMOS 3 MESES,{" "}
          <span className="text-brand-orange">ESTE ES EL MOMENTO DE ESTRUCTURAR LA OPERACIÓN</span>
        </h2>

        <p className="text-white/55 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Deja tus datos, cuéntanos qué necesitas y en menos de 24 horas un especialista te contacta con opciones reales del mercado norteamericano.
        </p>

        <a
          href="#formulario"
          className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-display font-black text-xl uppercase tracking-wide px-12 py-5 rounded-2xl transition-all duration-200 shadow-xl shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:-translate-y-1"
        >
          Solicitar evaluación sin costo
        </a>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {[
            "Sin compromiso",
            "Tu información es confidencial",
            "Respondemos en menos de 24 horas",
          ].map(t => (
            <div key={t} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/50 text-sm">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
