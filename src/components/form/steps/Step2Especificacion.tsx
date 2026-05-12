"use client";
import { useState } from "react";

interface Props {
  value: string;
  onNext: (value: string) => void;
  onBack: () => void;
}

export function Step2Especificacion({ value, onNext, onBack }: Props) {
  const [text, setText] = useState(value);

  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
        Especifica el equipo
      </h3>
      <p className="text-slate-500 text-sm mb-6">
        Describe el equipo que tienes en mente (modelo, capacidad, uso, etc.)
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ej: Grúa articulada de 50 ton para obra en altura, preferentemente año 2010 en adelante..."
        rows={4}
        className="w-full bg-white border border-slate-300 focus:border-brand-orange rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 text-sm resize-none transition-colors focus:ring-2 focus:ring-brand-orange/20"
      />

      <div className="flex gap-3 mt-5">
        <button
          type="button"
          onClick={onBack}
          className="flex-shrink-0 px-5 py-3 rounded-xl border border-slate-300 text-slate-500 hover:text-slate-700 hover:border-slate-400 text-sm font-medium transition-all"
        >
          ← Atrás
        </button>
        <button
          type="button"
          onClick={() => onNext(text)}
          className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm"
        >
          Continuar →
        </button>
      </div>

      <p className="text-slate-400 text-xs text-center mt-3">
        Puedes dejarlo en blanco si no tienes especificaciones aún
      </p>
    </div>
  );
}
