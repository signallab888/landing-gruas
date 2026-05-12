export function InspeccionSection() {
  const checks = [
    {
      n: "01",
      title: "Inspección técnica física",
      desc: "En los patios de USA, antes de ser ofrecido al cliente.",
    },
    {
      n: "02",
      title: "Historial de trabajo y mantenimiento",
      desc: "Revisión documental completa del ciclo de vida del equipo.",
    },
    {
      n: "03",
      title: "Registro fotográfico real",
      desc: "Fotos reales del equipo, no imágenes de stock ni archivo.",
    },
    {
      n: "04",
      title: "Documentación completa",
      desc: "Título, odómetro, condición de pluma y sistema hidráulico verificados.",
    },
  ];

  return (
    <section className="bg-slate-900 py-24 px-4 overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-brand-orange uppercase border border-brand-orange/40 rounded-full px-4 py-1.5 mb-6">
              Verificación
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-5">
              CADA GRÚA QUE MANEJAMOS PASA POR{" "}
              <span className="text-brand-orange">VERIFICACIÓN ANTES DE CRUZAR</span>
            </h2>
            <p className="text-white/55 text-[15px] leading-relaxed mb-8">
              El mayor riesgo de comprar maquinaria importada es recibir un equipo con problemas ocultos. Por eso, antes de presentarte cualquier opción, nuestro equipo realiza:
            </p>

            <div className="border border-brand-orange/20 rounded-2xl bg-brand-orange/5 px-6 py-5">
              <p className="text-brand-orange font-display text-lg font-bold">
                "Lo que ves es lo que llega a tu obra."
              </p>
            </div>
          </div>

          {/* Right — checklist */}
          <div className="space-y-4">
            {checks.map(item => (
              <div key={item.n} className="flex items-start gap-5 bg-white/5 border border-white/8 rounded-2xl p-5 hover:border-brand-orange/30 hover:bg-white/8 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-[15px] mb-1">{item.title}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
