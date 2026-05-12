export function TiposGruaSection() {
  const tipos = [
    {
      emoji: "🦾",
      name: "ARTICULADA",
      marcas: "HIAB · Palfinger · Fassi · National Crane",
      rango: "5–15 toneladas",
      desc: "Para construcción ligera, distribución de materiales, instalación de postes, señalética y servicios.",
      tag: "La más solicitada en México",
      tagColor: "bg-green-50 text-green-700 border-green-200",
    },
    {
      emoji: "🏗️",
      name: "TITÁN / SOBRE CAMIÓN",
      marcas: "National Crane · Manitex · Terex · Altec",
      rango: "15–35 toneladas",
      desc: "Para obra pesada, estructuras de acero, instalaciones industriales y torres de energía.",
      tag: "Alta demanda: Jalisco · NL · Veracruz",
      tagColor: "bg-orange-50 text-brand-orange border-orange-200",
    },
    {
      emoji: "🚜",
      name: "TODO TERRENO / RT",
      marcas: "Consulta disponibilidad",
      rango: "Varía por modelo",
      desc: "Para terrenos sin pavimento, construcción en zonas rurales o proyectos de infraestructura.",
      tag: "Consulta disponibilidad",
      tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
  ];

  return (
    <section className="bg-white py-24 px-4 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-brand-orange uppercase border border-brand-orange/30 rounded-full px-4 py-1.5 mb-5">
            Catálogo
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-brand-navy uppercase leading-tight">
            ¿QUÉ TIPO DE GRÚA{" "}
            <span className="text-brand-orange">NECESITA TU OPERACIÓN?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {tipos.map(tipo => (
            <div key={tipo.name} className="group bg-white border border-slate-200 rounded-2xl p-7 flex flex-col gap-4 hover:border-brand-orange/40 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
              <div className="text-4xl">{tipo.emoji}</div>

              <div>
                <p className="font-display font-black text-brand-navy text-lg uppercase leading-tight mb-1">{tipo.name}</p>
                <p className="text-slate-400 text-xs font-medium">{tipo.marcas}</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 bg-slate-100 rounded-full px-3 py-1">
                  {tipo.rango}
                </span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed flex-1">{tipo.desc}</p>

              <span className={`self-start text-xs font-semibold border rounded-full px-3 py-1 ${tipo.tagColor}`}>
                {tipo.tag}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 text-center">
          <p className="text-slate-600 text-[15px]">
            <span className="font-semibold text-brand-navy">¿No estás seguro cuál necesitas?</span>{" "}
            Deja tus datos y nuestro equipo te ayuda a definirlo antes de buscar el equipo.
          </p>
          <a href="#formulario" className="inline-block mt-3 text-brand-orange font-semibold text-sm hover:underline">
            Solicitar evaluación sin costo →
          </a>
        </div>
      </div>
    </section>
  );
}
