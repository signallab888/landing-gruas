"use client";
import { useState } from "react";
import type { FormData } from "../MultiStepForm";

interface Props {
  onSubmit: (data: Partial<FormData>) => Promise<void>;
  onBack: () => void;
  submitting: boolean;
}

const COUNTRY_CODES = [
  { code: "+52", flag: "🇲🇽", name: "México" },
  { code: "+1", flag: "🇺🇸", name: "EE.UU." },
  { code: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+51", flag: "🇵🇪", name: "Perú" },
  { code: "+58", flag: "🇻🇪", name: "Venezuela" },
  { code: "+55", flag: "🇧🇷", name: "Brasil" },
  { code: "+502", flag: "🇬🇹", name: "Guatemala" },
  { code: "+503", flag: "🇸🇻", name: "El Salvador" },
  { code: "+507", flag: "🇵🇦", name: "Panamá" },
];

export function Step7Contacto({ onSubmit, onBack, submitting }: Props) {
  const [nombre, setNombre] = useState("");
  const [countryCode, setCountryCode] = useState("+52");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [privacidad, setPrivacidad] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!nombre.trim()) errs.nombre = "Tu nombre es requerido";
    if (!phoneNum.trim()) errs.phone = "Tu teléfono es requerido";
    if (!email.trim() || !email.includes("@")) errs.email = "Email válido requerido";
    if (!privacidad) errs.privacidad = "Debes aceptar el aviso de privacidad";
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    await onSubmit({
      full_name: nombre,
      phone: `${countryCode}${phoneNum}`,
      email,
      privacidad,
    });
  };

  return (
    <div>
      <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
        ¿A quién le enviamos el análisis?
      </h3>
      <p className="text-slate-500 text-sm mb-5">
        Último paso: te contactamos en menos de 24 horas
      </p>

      <div className="mb-4">
        <label className="text-slate-400 text-xs font-semibold uppercase tracking-widest block mb-2">
          Nombre completo <span className="text-brand-orange">*</span>
        </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre y apellido"
          className={`w-full bg-white border rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm transition-colors focus:ring-2 focus:ring-brand-orange/20 ${
            errors.nombre ? "border-red-400" : "border-slate-300 focus:border-brand-orange"
          }`}
        />
        {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
      </div>

      <div className="mb-4">
        <label className="text-slate-400 text-xs font-semibold uppercase tracking-widest block mb-2">
          Teléfono (WhatsApp) <span className="text-brand-orange">*</span>
        </label>
        <div className="flex gap-0">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="bg-slate-50 border border-slate-300 border-r-0 rounded-l-xl px-3 py-3 text-slate-700 text-sm focus:outline-none focus:border-brand-orange cursor-pointer flex-shrink-0"
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value.replace(/\D/g, ""))}
            placeholder="Número de WhatsApp"
            className={`flex-1 bg-white border rounded-r-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm transition-colors focus:ring-2 focus:ring-brand-orange/20 ${
              errors.phone ? "border-red-400" : "border-slate-300 focus:border-brand-orange"
            }`}
          />
        </div>
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div className="mb-5">
        <label className="text-slate-400 text-xs font-semibold uppercase tracking-widest block mb-2">
          Correo electrónico <span className="text-brand-orange">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tucorreo@empresa.com"
          className={`w-full bg-white border rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm transition-colors focus:ring-2 focus:ring-brand-orange/20 ${
            errors.email ? "border-red-400" : "border-slate-300 focus:border-brand-orange"
          }`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <label className={`flex items-start gap-3 cursor-pointer group mb-5 ${errors.privacidad ? "text-red-500" : ""}`}>
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            checked={privacidad}
            onChange={(e) => setPrivacidad(e.target.checked)}
            className="sr-only"
          />
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
              privacidad
                ? "border-brand-orange bg-brand-orange"
                : errors.privacidad
                ? "border-red-400"
                : "border-slate-300 group-hover:border-slate-400"
            }`}
          >
            {privacidad && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-slate-500 text-xs leading-relaxed">
          Acepto el aviso de privacidad y autorizo el tratamiento de mis datos para recibir información comercial.{" "}
          <span className="text-brand-orange">Información confidencial</span>.
        </span>
      </label>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={submitting}
          className="flex-shrink-0 px-5 py-3 rounded-xl border border-slate-300 text-slate-500 hover:text-slate-700 hover:border-slate-400 text-sm font-medium transition-all disabled:opacity-50"
        >
          ← Atrás
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm relative"
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enviando...
            </span>
          ) : (
            "Solicitar análisis de compra"
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        {["Sin compromiso", "100% confidencial", "Respuesta en 24h"].map((t) => (
          <span key={t} className="text-slate-400 text-[10px] font-medium">
            ✓ {t}
          </span>
        ))}
      </div>
    </div>
  );
}
