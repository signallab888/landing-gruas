export function SocialProof() {
  return (
    <section className="bg-white py-20 px-4 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-brand-orange uppercase border border-brand-orange/30 rounded-full px-4 py-1.5 mb-5">
            Resultados reales
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-black text-brand-navy uppercase">
            Empresas que ya están comprando así
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-3xl px-8 py-12 flex flex-col sm:flex-row items-center justify-around gap-10">
          {[
            { number: "+40", label: "Grúas entregadas en México" },
            { number: "18", label: "Estados con presencia" },
            { number: "20 días", label: "Tiempo promedio de entrega" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-6xl font-black text-brand-orange mb-2 leading-none">{stat.number}</p>
              <p className="text-slate-500 text-sm font-medium max-w-[140px] mx-auto leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
