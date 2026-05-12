export function ValueProposition() {
  const points = [
    {
      label: "Qué tipo de grúa realmente necesita tu operación",
      detail: "Articulada, Titán, RT o Canastilla",
    },
    {
      label: "Dónde está la mejor oportunidad en USA ahora mismo",
      detail: "Inventario directo o subasta",
    },
    {
      label: "Cuánto deberías invertir para que te genere retorno real",
      detail: "",
    },
    {
      label: "Cómo importarla sin errores, sin sobrecostos",
      detail: "Con toda la documentación en regla",
    },
  ];

  return (
    <section className="bg-white py-24 px-4 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-amber-600 uppercase bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-6">
              Evaluación estratégica
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-navy uppercase leading-tight mb-5">
              ESTO NO ES UNA COTIZACIÓN.{" "}
              <span className="text-brand-orange">ES UNA EVALUACIÓN ESTRATÉGICA DE COMPRA.</span>
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
              Cualquier proveedor te puede mandar un número. Nosotros te decimos exactamente qué equipo necesita tu operación, dónde encontrarlo en el mercado norteamericano y cuánto te va a costar puesto en tu obra, sin que te lleves sorpresas en la frontera.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm shadow-brand-orange/30">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-800 font-medium text-[15px] leading-snug">{point.label}</p>
                    {point.detail && <p className="text-slate-400 text-sm mt-0.5">{point.detail}</p>}
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-l-4 border-brand-orange pl-5 py-1">
              <p className="text-brand-navy font-display text-xl font-bold italic">
                "Empresas que compran bien no improvisan. Estructuran."
              </p>
            </div>
          </div>

          {/* Right — info card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-9 shadow-xl shadow-slate-100/80">
            <div className="flex items-center gap-4 pb-6 mb-6 border-b border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-brand-navy font-bold text-base">Proceso verificado</p>
                <p className="text-slate-500 text-sm">Análisis técnico + historial de cada unidad</p>
              </div>
            </div>

            <div className="space-y-4 mb-7">
              {[
                { label: "Tiempo promedio de entrega", value: "~20 días", color: "text-green-600" },
                { label: "Cobertura de operación", value: "México + LATAM", color: "text-blue-600" },
                { label: "Tipo de evaluación", value: "Sin compromiso", color: "text-brand-orange" },
                { label: "Acceso a mercado", value: "Subasta + inventario privado", color: "text-slate-700" },
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                  <span className="text-slate-500 text-sm">{item.label}</span>
                  <span className={`font-semibold text-sm ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>

            <a
              href="#formulario"
              className="block w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-display font-bold py-4 px-6 rounded-xl text-center transition-all duration-200 text-base uppercase tracking-wide shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:-translate-y-0.5"
            >
              Solicitar evaluación sin costo
            </a>
            <p className="text-center text-slate-400 text-xs mt-3">Sin compromiso · Evaluación confidencial</p>
          </div>

        </div>
      </div>
    </section>
  );
}
