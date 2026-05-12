"use client";
import { useState } from "react";

const faqs = [
  {
    q: "¿El precio incluye importación y flete hasta mi ciudad?",
    a: "Sí. Cuando te presentamos una propuesta, el precio ya incluye el equipo en USA, la importación, el pedimento y el flete hasta tu obra. No hay costos ocultos después.",
  },
  {
    q: "¿Manejan financiamiento?",
    a: "Nosotros no somos financiadora, pero trabajamos con aliados especializados en maquinaria pesada que pueden estudiar tu caso. Si necesitas crédito o arrendamiento, menciónalo en el formulario y te orientamos.",
  },
  {
    q: "¿Cómo sé que el equipo llega en buenas condiciones?",
    a: "Cada equipo pasa por inspección técnica física en USA antes de ser ofrecido. Recibes fotos reales, historial de trabajo y reporte de condición antes de comprometerte con cualquier pago.",
  },
  {
    q: "¿Puedo ir a ver el equipo antes de comprarlo?",
    a: "En muchos casos sí. Coordinamos visitas a patios en USA para clientes que quieren verlo personalmente antes del cierre.",
  },
  {
    q: "¿Puedo comprar solo la pluma sin el camión?",
    a: "Trabajamos principalmente con conjuntos completos (camión + grúa). Si buscas solo el equipo de izaje para montar en camión propio, menciónalo. Evaluamos caso por caso.",
  },
  {
    q: "¿Qué documentación viene con el equipo?",
    a: "Pedimento de importación, título del vehículo, factura, historial técnico y verificación de condición. Todo lo necesario para tramitar placas y operar legalmente.",
  },
  {
    q: "¿Atienden fuera de México?",
    a: "Sí, gestionamos operaciones hacia Centroamérica y Latinoamérica.",
  },
  {
    q: "¿Pueden ayudarme a definir qué tipo de grúa necesito?",
    a: "Sí. Si no estás seguro entre articulada, Titán o todo terreno, ese es el primer paso de la evaluación, antes de buscar cualquier equipo.",
  },
  {
    q: "¿Tiempo de entrega?",
    a: "En promedio 20 días desde que se aprueba la operación hasta entrega en tu obra.",
  },
  {
    q: "¿Trabajan con subastas en USA?",
    a: "Sí. Accedemos a subastas como Ritchie Bros., IronPlanet y mercado privado. Cuando hay una oportunidad que encaja con tu perfil te avisamos antes de que se vaya.",
  },
];

function FAQItem({ faq, index, open, onToggle }: {
  faq: typeof faqs[0];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
        open ? "border-brand-orange/40 shadow-md shadow-brand-orange/5" : "border-slate-200 hover:border-slate-300 shadow-sm"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between px-5 py-4 text-left gap-3"
        aria-expanded={open}
      >
        <span className="text-brand-navy font-semibold text-sm leading-snug">{faq.q}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${
            open ? "bg-brand-orange border-brand-orange rotate-45" : "border-slate-300"
          }`}
        >
          <svg
            className={`w-3 h-3 ${open ? "text-white" : "text-slate-500"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const col1 = faqs.slice(0, 5);
  const col2 = faqs.slice(5, 10);

  return (
    <section className="bg-slate-50 py-24 px-4 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-brand-orange uppercase border border-brand-orange/30 rounded-full px-4 py-1.5 mb-5">
            Preguntas frecuentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-brand-navy uppercase leading-tight">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {/* Columna izquierda */}
          <div className="space-y-3">
            {col1.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
          {/* Columna derecha */}
          <div className="space-y-3">
            {col2.map((faq, i) => (
              <FAQItem
                key={i + 5}
                faq={faq}
                index={i + 5}
                open={open === i + 5}
                onToggle={() => setOpen(open === i + 5 ? null : i + 5)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
