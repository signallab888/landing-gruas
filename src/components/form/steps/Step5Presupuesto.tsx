"use client";

const PRESUPUESTOS = [
  { value: "$61k-$80k", label: "$61k – $80k USD" },
  { value: "$81k-$100k", label: "$81k – $100k USD" },
  { value: "$101k-$150k", label: "$101k – $150k USD" },
  { value: "$151k-$200k", label: "$151k – $200k USD" },
  { value: "Más de $200,000 USD", label: "+$200k USD" },
];

interface Props {
  value: string;
  onNext: (value: string) => void;
  onBack: () => void;
}

export function Step5Presupuesto({ value, onNext, onBack }: Props) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
        Seleccione su presupuesto máximo
      </h3>
      <p className="text-slate-500 text-sm mb-5">En dólares americanos — toca para continuar</p>

      <div className="flex flex-col gap-2.5 mb-4">
        {PRESUPUESTOS.map((p) => (
          <button
            key={p.value}
            type="button"
            onClick={() => onNext(p.value)}
            className={`px-5 py-3.5 rounded-xl border text-sm font-bold tracking-wide text-left transition-all duration-150 active:scale-[0.99] ${
              value === p.value
                ? "border-brand-orange bg-brand-orange text-white shadow-lg shadow-brand-orange/30"
                : "border-slate-200 bg-white text-slate-700 hover:border-brand-orange hover:bg-orange-50 hover:shadow-sm hover:shadow-brand-orange/15"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <button type="button" onClick={onBack} className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-all flex items-center gap-1">
        ← Atrás
      </button>
    </div>
  );
}
