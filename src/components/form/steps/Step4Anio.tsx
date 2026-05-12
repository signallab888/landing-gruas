"use client";

const ANIOS = [
  "1990-1994", "1995-1999", "2000-2004",
  "2005-2009", "2010-2014", "2015 en adelante",
];

interface Props {
  value: string;
  onNext: (value: string) => void;
  onBack: () => void;
}

export function Step4Anio({ value, onNext, onBack }: Props) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
        ¿Cuál es el año mínimo de la maquinaria?
      </h3>
      <p className="text-slate-500 text-sm mb-5">Toca una opción para continuar</p>

      <div className="grid grid-cols-2 gap-2.5 mb-4">
        {ANIOS.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => onNext(a)}
            className={`px-4 py-3.5 rounded-xl border text-sm font-bold tracking-wide transition-all duration-150 active:scale-[0.98] ${
              value === a
                ? "border-brand-orange bg-brand-orange text-white shadow-lg shadow-brand-orange/30"
                : "border-slate-200 bg-white text-slate-700 hover:border-brand-orange hover:bg-orange-50 hover:shadow-sm hover:shadow-brand-orange/15"
            }`}
          >
            {a}
          </button>
        ))}
      </div>

      <button type="button" onClick={onBack} className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-all flex items-center gap-1">
        ← Atrás
      </button>
    </div>
  );
}
