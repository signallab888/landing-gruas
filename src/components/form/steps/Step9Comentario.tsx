"use client";
import { useState } from "react";

interface Props {
  value: string;
  onNext: (value: string) => void;
  onBack: () => void;
}

export function Step9Comentario({ value, onNext, onBack }: Props) {
  const [comentario, setComentario] = useState(value);

  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
        ¿Tienes alguna pregunta o comentario?
      </h3>
      <p className="text-slate-500 text-sm mb-5">
        Opcional — puedes dejarlo en blanco si no tienes dudas
      </p>

      <textarea
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Ej: Necesito el equipo con cierta configuración, ¿tienen disponibilidad en Monterrey?"
        rows={4}
        className="w-full bg-white border border-slate-200 focus:border-brand-orange rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm resize-none transition-colors focus:ring-2 focus:ring-brand-orange/20 mb-5"
      />

      <div className="flex gap-3">
        <button type="button" onClick={onBack} className="flex-shrink-0 px-5 py-3 rounded-xl border border-slate-300 text-slate-500 hover:text-slate-700 hover:border-slate-400 text-sm font-medium transition-all">
          ← Atrás
        </button>
        <button
          type="button"
          onClick={() => onNext(comentario)}
          className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm"
        >
          {comentario.trim() ? "Continuar →" : "Omitir y continuar →"}
        </button>
      </div>
    </div>
  );
}
