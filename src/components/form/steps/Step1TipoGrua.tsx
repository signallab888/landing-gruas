"use client";

const TIPOS = [
  "TITÁN",
  "ARTICULADA",
  "SOBRE CAMIÓN",
  "TODO TERRENO",
  "CANASTILLA",
  "BROCA",
  "RT",
  "ARRASTRE",
];

interface Props {
  value: string;
  onNext: (value: string) => void;
}

export function Step1TipoGrua({ value, onNext }: Props) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
        ¿Qué tipo de grúa necesitas?
      </h3>
      <p className="text-slate-500 text-sm mb-5">Selecciona una opción para continuar</p>

      <div className="grid grid-cols-2 gap-2.5">
        {TIPOS.map((tipo) => {
          const selected = value === tipo;
          return (
            <button
              key={tipo}
              type="button"
              onClick={() => onNext(tipo)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl border text-left transition-all duration-150 active:scale-[0.98] ${
                selected
                  ? "border-brand-orange bg-brand-orange text-white shadow-lg shadow-brand-orange/30"
                  : "border-slate-200 bg-white text-slate-700 hover:border-brand-orange hover:bg-orange-50 hover:shadow-sm hover:shadow-brand-orange/15"
              }`}
            >
              <span className="font-bold text-sm tracking-wide">{tipo}</span>
              {selected && (
                <svg className="w-4 h-4 flex-shrink-0 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
