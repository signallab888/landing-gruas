"use client";
import { useState } from "react";

const PRESUPUESTOS = [
  { value: "$61k-$80k", label: "$61k – $80k USD" },
  { value: "$81k-$100k", label: "$81k – $100k USD" },
  { value: "$101k-$150k", label: "$101k – $150k USD" },
  { value: "$151k-$200k", label: "$151k – $200k USD" },
  { value: "Más de $200,000 USD", label: "+$200k USD" },
];

const TIEMPOS = [
  { value: "Inmediatamente (dentro del próximo mes)", label: "Inmediatamente", sub: "Dentro del próximo mes" },
  { value: "A corto plazo (1-3 meses)", label: "Corto plazo", sub: "1–3 meses" },
  { value: "A medio plazo (3-6 meses)", label: "Medio plazo", sub: "3–6 meses" },
  { value: "A largo plazo (+6 meses)", label: "Largo plazo", sub: "+6 meses" },
];

interface Props {
  presupuesto: string;
  tiempo: string;
  onNext: (presupuesto: string, tiempo: string) => void;
  onBack: () => void;
}

export function Step5PresupuestoTiempo({ presupuesto, tiempo, onNext, onBack }: Props) {
  const [selPre, setSelPre] = useState(presupuesto);
  const [selTie, setSelTie] = useState(tiempo);

  const canContinue = selPre && selTie;

  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-5">
        Presupuesto y tiempo de compra
      </h3>

      <div className="mb-5">
        <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
          Presupuesto máximo
        </p>
        <div className="flex flex-wrap gap-2">
          {PRESUPUESTOS.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => setSelPre(p.value)}
              className={`px-4 py-2.5 rounded-lg border text-sm font-semibold transition-all duration-150 ${
                selPre === p.value
                  ? "border-brand-orange bg-orange-50 text-brand-orange"
                  : "border-slate-200 bg-white text-slate-600 hover:border-brand-orange/40"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
          ¿En cuánto tiempo planeas comprar?
        </p>
        <div className="grid grid-cols-2 gap-2">
          {TIEMPOS.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setSelTie(t.value)}
              className={`px-4 py-3 rounded-xl border text-left transition-all duration-150 ${
                selTie === t.value
                  ? "border-brand-orange bg-orange-50"
                  : "border-slate-200 bg-white hover:border-brand-orange/40"
              }`}
            >
              <p className={`text-sm font-semibold ${selTie === t.value ? "text-brand-orange" : "text-slate-700"}`}>
                {t.label}
              </p>
              <p className="text-slate-400 text-xs">{t.sub}</p>
            </button>
          ))}
        </div>
      </div>

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
          onClick={() => canContinue && onNext(selPre, selTie)}
          disabled={!canContinue}
          className={`flex-1 font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm ${
            canContinue
              ? "bg-brand-orange hover:bg-brand-orange-dark text-white"
              : "bg-slate-100 text-slate-400 cursor-not-allowed"
          }`}
        >
          Continuar →
        </button>
      </div>
    </div>
  );
}
