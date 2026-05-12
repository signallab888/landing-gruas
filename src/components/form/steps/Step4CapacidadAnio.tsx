"use client";
import { useState } from "react";

const CAPACIDADES = [
  "5-10 ton",
  "11-15 ton",
  "16-20 ton",
  "21-28 ton",
  "29-35 ton",
  "36-50 ton",
  "51-90 ton",
  "91-120 ton",
  "121-200 ton",
  "+200 ton",
];

const ANIOS = [
  "1990-1994",
  "1995-1999",
  "2000-2004",
  "2005-2009",
  "2010-2014",
  "2015 en adelante",
];

interface Props {
  capacidad: string;
  anio: string;
  onNext: (capacidad: string, anio: string) => void;
  onBack: () => void;
}

export function Step4CapacidadAnio({ capacidad, anio, onNext, onBack }: Props) {
  const [selCap, setSelCap] = useState(capacidad);
  const [selAnio, setSelAnio] = useState(anio);

  const canContinue = selCap && selAnio;

  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-5">
        Capacidad y año del equipo
      </h3>

      <div className="mb-5">
        <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
          Capacidad mínima (toneladas)
        </p>
        <div className="flex flex-wrap gap-2">
          {CAPACIDADES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelCap(c)}
              className={`px-3.5 py-2 rounded-lg border text-xs font-semibold transition-all duration-150 ${
                selCap === c
                  ? "border-brand-orange bg-orange-50 text-brand-orange"
                  : "border-slate-200 bg-white text-slate-600 hover:border-brand-orange/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
          Año mínimo de la maquinaria
        </p>
        <div className="flex flex-wrap gap-2">
          {ANIOS.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setSelAnio(a)}
              className={`px-3.5 py-2 rounded-lg border text-xs font-semibold transition-all duration-150 ${
                selAnio === a
                  ? "border-brand-orange bg-orange-50 text-brand-orange"
                  : "border-slate-200 bg-white text-slate-600 hover:border-brand-orange/40"
              }`}
            >
              {a}
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
          onClick={() => canContinue && onNext(selCap, selAnio)}
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
