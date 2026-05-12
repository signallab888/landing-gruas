"use client";
import { useState } from "react";

const MARCAS = [
  "NATIONAL CRANE", "MANITEX", "TEREX", "ALTEC", "CORMACH",
  "PALFINGER", "ELLIOT", "FASSI", "DEMAG", "SIMON-RO",
  "LINK-BELT", "HIAB", "GROVE", "P&H",
];

interface Props {
  marca: string;
  especifique: string;
  onNext: (marca: string, especifique: string) => void;
  onBack: () => void;
}

export function Step2Marca({ marca, especifique, onNext, onBack }: Props) {
  const [selected, setSelected] = useState<string[]>(
    marca ? marca.split(", ").filter(Boolean) : []
  );
  const [custom, setCustom] = useState(especifique);

  const toggle = (m: string) => {
    setSelected((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  };

  const handleContinue = () => {
    onNext(selected.join(", "), custom);
  };

  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
        Seleccionar marca de su interés
      </h3>
      <p className="text-slate-500 text-sm mb-4">
        Puedes elegir una o varias
      </p>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {MARCAS.map((m) => {
          const isSelected = selected.includes(m);
          return (
            <button
              key={m}
              type="button"
              onClick={() => toggle(m)}
              className={`px-3 py-2.5 rounded-lg border text-xs font-bold tracking-wide transition-all duration-150 text-left flex items-center justify-between gap-2 active:scale-[0.98] ${
                isSelected
                  ? "border-brand-orange bg-brand-orange text-white shadow-md shadow-brand-orange/25"
                  : "border-slate-200 bg-white text-slate-600 hover:border-brand-orange hover:bg-orange-50 hover:shadow-sm hover:shadow-brand-orange/15"
              }`}
            >
              <span>{m}</span>
              {isSelected && (
                <svg className="w-3.5 h-3.5 flex-shrink-0 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          );
        })}
      </div>

      <input
        type="text"
        value={custom}
        onChange={(e) => setCustom(e.target.value)}
        placeholder="Otra marca (escribe aquí)..."
        className="w-full bg-slate-50 border border-slate-200 focus:border-brand-orange rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm transition-colors focus:ring-2 focus:ring-brand-orange/20 mb-4"
      />

      {selected.length > 0 && (
        <p className="text-xs text-slate-400 mb-3">
          Seleccionadas: <span className="text-brand-orange font-semibold">{selected.join(", ")}</span>
        </p>
      )}

      <div className="flex gap-3">
        <button type="button" onClick={onBack} className="flex-shrink-0 px-5 py-3 rounded-xl border border-slate-300 text-slate-500 hover:text-slate-700 hover:border-slate-400 text-sm font-medium transition-all">
          ← Atrás
        </button>
        <button
          type="button"
          onClick={handleContinue}
          className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-brand-orange/25 hover:-translate-y-0.5"
        >
          Continuar →
        </button>
      </div>
    </div>
  );
}
