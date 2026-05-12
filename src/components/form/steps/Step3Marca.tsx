"use client";
import { useState } from "react";

const MARCAS = [
  "NATIONAL CRANE",
  "MANITEX",
  "TEREX",
  "ALTEC",
  "CORMACH",
  "PALFINGER",
  "ELLIOT",
  "FASSI",
  "DEMAG",
  "SIMON-RO",
  "LINK-BELT",
  "HIAB",
  "GROVE",
  "P&H",
];

interface Props {
  marca: string;
  especifique: string;
  onNext: (marca: string, especifique: string) => void;
  onBack: () => void;
}

export function Step3Marca({ marca, especifique, onNext, onBack }: Props) {
  const [selected, setSelected] = useState(marca);
  const [custom, setCustom] = useState(especifique);

  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
        ¿Qué marca prefieres?
      </h3>
      <p className="text-slate-500 text-sm mb-5">
        Selecciona una o escribe la tuya
      </p>

      <div className="flex flex-wrap gap-2 mb-4 max-h-44 overflow-y-auto pr-1">
        {MARCAS.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setSelected(selected === m ? "" : m)}
            className={`px-3.5 py-2 rounded-lg border text-xs font-semibold transition-all duration-150 ${
              selected === m
                ? "border-brand-orange bg-orange-50 text-brand-orange"
                : "border-slate-200 bg-white text-slate-600 hover:border-brand-orange/40 hover:text-slate-800"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <input
        type="text"
        value={custom}
        onChange={(e) => setCustom(e.target.value)}
        placeholder="Especifica otra marca..."
        className="w-full bg-white border border-slate-300 focus:border-brand-orange rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm transition-colors focus:ring-2 focus:ring-brand-orange/20 mb-4"
      />

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-shrink-0 px-5 py-3 rounded-xl border border-slate-300 text-slate-500 hover:text-slate-700 hover:border-slate-400 text-sm font-medium transition-all"
        >
          ← Atrás
        </button>
        <button
          type="button"
          onClick={() => onNext(selected, custom)}
          className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm"
        >
          Continuar →
        </button>
      </div>
    </div>
  );
}
