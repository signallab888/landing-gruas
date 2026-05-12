export function PrecioSection() {
  const includes = [
    "Costo del equipo en USA",
    "Importación y pedimento",
    "Flete hasta tu ciudad en México",
    "Documentación para placas y operación",
  ];

  return (
    <section className="bg-slate-50 py-24 px-4 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-brand-orange uppercase border border-brand-orange/30 rounded-full px-4 py-1.5 mb-6">
              Transparencia total
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-navy uppercase leading-tight mb-5">
              EL PRECIO QUE TE DAMOS{" "}
              <span className="text-brand-orange">INCLUYE TODO</span>
            </h2>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
              La mayoría de vendedores te dan el precio del equipo en USA y después te cobran importación, agente aduanal y flete por separado. Con nosotros eso no pasa.
            </p>

            <ul className="space-y-3 mb-8">
              {includes.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-l-4 border-brand-orange pl-5">
              <p className="text-brand-navy font-display text-xl font-bold italic">
                "Lo que te cotizamos es lo que pagas. Sin sorpresas."
              </p>
            </div>
          </div>

          {/* Right — price range card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-100/80">
            <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold mb-2">Rango de referencia</p>
            <div className="mb-6">
              <p className="font-display text-5xl font-black text-brand-navy leading-none">
                $65K – $150K
              </p>
              <p className="text-brand-orange font-semibold mt-1">USD · Precio final puesto en tu obra</p>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              La mayoría de nuestros clientes trabaja con presupuestos entre <strong className="text-slate-700">$65,000 y $150,000 USD</strong> dependiendo del tipo de grúa y tonelaje requerido.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Articulada 5–15 t", range: "$65K – $95K USD" },
                { label: "Titán / Sobre camión", range: "$90K – $130K USD" },
                { label: "Todo Terreno / RT", range: "$110K – $150K+ USD" },
              ].map(r => (
                <div key={r.label} className="flex justify-between items-center py-2.5 border-b border-slate-100 last:border-0">
                  <span className="text-slate-600 text-sm">{r.label}</span>
                  <span className="font-semibold text-brand-navy text-sm">{r.range}</span>
                </div>
              ))}
            </div>

            <a
              href="#formulario"
              className="block w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-display font-bold py-4 px-6 rounded-xl text-center transition-all duration-200 text-base uppercase tracking-wide shadow-md shadow-brand-orange/20 hover:-translate-y-0.5"
            >
              Solicitar cotización completa
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
