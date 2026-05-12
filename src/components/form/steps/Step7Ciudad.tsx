"use client";
import { useState } from "react";

interface Props {
  value: string;
  onNext: (value: string) => void;
  onBack: () => void;
}

export function Step7Ciudad({ value, onNext, onBack }: Props) {
  const [ciudad, setCiudad] = useState(value);

  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
        Selecciona la ciudad de entrega del equipo
      </h3>
      <p className="text-slate-500 text-sm mb-5">En México o Latinoamérica</p>

      <input
        type="text"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
        placeholder="Ej: Monterrey, Guadalajara, CDMX..."
        className="w-full bg-white border border-slate-300 focus:border-brand-orange rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm transition-colors focus:ring-2 focus:ring-brand-orange/20 mb-6"
      />

      <div className="flex gap-3">
        <button type="button" onClick={onBack} className="flex-shrink-0 px-5 py-3 rounded-xl border border-slate-300 text-slate-500 hover:text-slate-700 hover:border-slate-400 text-sm font-medium transition-all">
          ← Atrás
        </button>
        <button
          type="button"
          onClick={() => onNext(ciudad)}
          className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm"
        >
          Continuar →
        </button>
      </div>
    </div>
  );
}
