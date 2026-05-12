"use client";

const CAPACIDADES = [
  "5-10 TON", "11-15 TON", "16-20 TON", "21-28 TON", "29-35 TON",
  "36-50 TON", "51-90 TON", "91-120 TON", "121-200 TON", "+200 TON",
];

interface Props {
  value: string;
  onNext: (value: string) => void;
  onBack: () => void;
}

export function Step3Capacidad({ value, onNext, onBack }: Props) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
        Seleccione la capacidad mínima del equipo
      </h3>
      <p className="text-slate-500 text-sm mb-5">En toneladas — toca para continuar</p>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {CAPACIDADES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => onNext(c)}
            className={`px-4 py-3 rounded-xl border text-sm font-bold tracking-wide transition-all duration-150 active:scale-[0.98] ${
              value === c
                ? "border-brand-orange bg-brand-orange text-white shadow-lg shadow-brand-orange/30"
                : "border-slate-200 bg-white text-slate-700 hover:border-brand-orange hover:bg-orange-50 hover:shadow-sm hover:shadow-brand-orange/15"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <button type="button" onClick={onBack} className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-all flex items-center gap-1">
        ← Atrás
      </button>
    </div>
  );
}
