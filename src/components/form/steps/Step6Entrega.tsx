"use client";
import { useState } from "react";

const ESTADOS_MEXICO = [
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
  "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima",
  "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco",
  "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León",
  "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí",
  "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala",
  "Veracruz", "Yucatán", "Zacatecas",
];

interface Props {
  ciudad: string;
  estado: string;
  comentario: string;
  onNext: (ciudad: string, estado: string, comentario: string) => void;
  onBack: () => void;
}

export function Step6Entrega({ ciudad, estado, comentario, onNext, onBack }: Props) {
  const [selCiudad, setSelCiudad] = useState(ciudad);
  const [selEstado, setSelEstado] = useState(estado);
  const [selComentario, setSelComentario] = useState(comentario);

  const canContinue = selEstado;

  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
        ¿Dónde se entregará el equipo?
      </h3>
      <p className="text-slate-500 text-sm mb-5">
        En México o Latinoamérica
      </p>

      <div className="mb-4">
        <label className="text-slate-400 text-xs font-semibold uppercase tracking-widest block mb-2">
          Ciudad de entrega
        </label>
        <input
          type="text"
          value={selCiudad}
          onChange={(e) => setSelCiudad(e.target.value)}
          placeholder="Ej: Monterrey, Guadalajara, CDMX..."
          className="w-full bg-white border border-slate-300 focus:border-brand-orange rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm transition-colors focus:ring-2 focus:ring-brand-orange/20"
        />
      </div>

      <div className="mb-4">
        <label className="text-slate-400 text-xs font-semibold uppercase tracking-widest block mb-2">
          Estado <span className="text-brand-orange">*</span>
        </label>
        <select
          value={selEstado}
          onChange={(e) => setSelEstado(e.target.value)}
          className="w-full bg-white border border-slate-300 focus:border-brand-orange rounded-xl px-4 py-3 text-slate-700 text-sm transition-colors focus:ring-2 focus:ring-brand-orange/20 appearance-none cursor-pointer"
        >
          <option value="">Selecciona un estado...</option>
          {ESTADOS_MEXICO.map((e) => (
            <option key={e} value={e}>{e}</option>
          ))}
          <option value="Otro (LATAM)">Otro (LATAM)</option>
        </select>
      </div>

      <div className="mb-5">
        <label className="text-slate-400 text-xs font-semibold uppercase tracking-widest block mb-2">
          ¿Tienes alguna pregunta o comentario adicional?
        </label>
        <textarea
          value={selComentario}
          onChange={(e) => setSelComentario(e.target.value)}
          placeholder="Cuéntanos más sobre tu proyecto o cualquier duda específica..."
          rows={3}
          className="w-full bg-white border border-slate-300 focus:border-brand-orange rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm resize-none transition-colors focus:ring-2 focus:ring-brand-orange/20"
        />
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
          onClick={() => canContinue && onNext(selCiudad, selEstado, selComentario)}
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
