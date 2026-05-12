export function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Déjanos tus datos",
      desc: "Llena el formulario con el tipo de grúa, tonelaje y presupuesto. Tarda menos de 3 minutos.",
    },
    {
      number: "02",
      title: "Analizamos tu operación",
      desc: "Un especialista en maquinaria revisa tu caso y busca en inventario USA el equipo que más te conviene, incluyendo subastas y oferta privada.",
    },
    {
      number: "03",
      title: "Te presentamos opciones reales",
      desc: "Recibes 2 o 3 alternativas con especificaciones, fotos, historial y precio final puesto en tu ciudad. Tú decides.",
    },
  ];

  return (
    <section className="bg-brand-navy py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-brand-orange uppercase mb-4 border border-brand-orange/30 rounded-full px-4 py-1.5">
            Así funciona
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase leading-tight">
            Simple, rápido y sin presión
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 relative">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < 2 && (
                <div className="hidden md:block absolute top-10 left-full w-5 h-px bg-gradient-to-r from-brand-orange/60 to-transparent z-10" />
              )}

              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full hover:bg-white/8 hover:border-brand-orange/30 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-brand-orange flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-orange/30 group-hover:scale-105 transition-transform duration-300">
                    <span className="font-display text-xl font-black text-white">{step.number}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white leading-snug">{step.title}</h3>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
