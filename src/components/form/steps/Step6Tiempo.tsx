"use client";

const TIEMPOS = [
  { value: "Inmediatamente (dentro del próximo mes)", label: "Inmediatamente", sub: "Dentro del próximo mes" },
  { value: "A corto plazo (1-3 meses)", label: "Corto plazo", sub: "1–3 meses" },
  { value: "A medio plazo (3-6 meses)", label: "Medio plazo", sub: "3–6 meses" },
  { value: "A largo plazo (+6 meses)", label: "Largo plazo", sub: "+6 meses" },
];

interface Props {
  value: string;
  onNext: (value: string) => void;
  onBack: () => void;
}

export function Step6Tiempo({ value, onNext, onBack }: Props) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
        ¿En cuánto tiempo planeas comprar el equipo?
      </h3>
      <p className="text-slate-500 text-sm mb-5">Toca una opción para continuar</p>

      <div className="grid grid-cols-2 gap-2.5 mb-4">
        {TIEMPOS.map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => onNext(t.value)}
            className={`px-4 py-4 rounded-xl border text-left transition-all duration-150 active:scale-[0.98] ${
              value === t.value
                ? "border-brand-orange bg-brand-orange shadow-lg shadow-brand-orange/30"
                : "border-slate-200 bg-white hover:border-brand-orange hover:bg-orange-50 hover:shadow-sm hover:shadow-brand-orange/15"
            }`}
          >
            <p className={`text-sm font-bold ${value === t.value ? "text-white" : "text-slate-700"}`}>{t.label}</p>
            <p className={`text-xs mt-0.5 ${value === t.value ? "text-white/75" : "text-slate-400"}`}>{t.sub}</p>
          </button>
        ))}
      </div>

      <button type="button" onClick={onBack} className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-all flex items-center gap-1">
        ← Atrás
      </button>
    </div>
  );
}
