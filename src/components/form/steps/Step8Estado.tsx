"use client";

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
  value: string;
  onNext: (value: string) => void;
  onBack: () => void;
}

export function Step8Estado({ value, onNext, onBack }: Props) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
        Selecciona el estado de entrega
      </h3>
      <p className="text-slate-500 text-sm mb-5">Selecciona y avanza automáticamente</p>

      <select
        value={value}
        onChange={(e) => e.target.value && onNext(e.target.value)}
        className="w-full bg-white border border-slate-300 focus:border-brand-orange rounded-xl px-4 py-3.5 text-slate-700 text-sm transition-colors focus:ring-2 focus:ring-brand-orange/20 appearance-none cursor-pointer mb-4"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1.2rem", paddingRight: "2.5rem" }}
      >
        <option value="">Selecciona un estado...</option>
        {ESTADOS_MEXICO.map((e) => (
          <option key={e} value={e}>{e}</option>
        ))}
        <option value="Otro (LATAM)">Otro (LATAM)</option>
      </select>

      <button type="button" onClick={onBack} className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-all flex items-center gap-1">
        ← Atrás
      </button>
    </div>
  );
}
