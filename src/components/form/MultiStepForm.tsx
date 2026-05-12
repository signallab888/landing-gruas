"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Step1TipoGrua } from "./steps/Step1TipoGrua";
import { Step2Marca } from "./steps/Step2Marca";
import { Step3Capacidad } from "./steps/Step3Capacidad";
import { Step4Anio } from "./steps/Step4Anio";
import { Step5Presupuesto } from "./steps/Step5Presupuesto";
import { Step6Tiempo } from "./steps/Step6Tiempo";
import { Step7Ciudad } from "./steps/Step7Ciudad";
import { Step8Estado } from "./steps/Step8Estado";
import { Step9Comentario } from "./steps/Step9Comentario";
import { Step7Contacto } from "./steps/Step7Contacto";
import { getStoredUTMs } from "@/components/UTMCapture";

export type FormData = {
  "contact.seleccione_la_gra_de_su_inters": string;
  "contact.seleccionar_marca_de_su_inters": string;
  "contact.especifique_la_marca_de_su_interes": string;
  "contact.seleccione_la_capacidad_minima_del_equipo": string;
  "contact.cul_es_el_ao_mnimo_de_la_maquinaria_que_necesitas": string;
  "contact.seleccione_su_presupuesto_mximo00": string;
  "contact.en_cunto_tiempo_planeas_comprar_el_equipo_66": string;
  "contact.ciudad": string;
  "contact.selecciona_tu_estado": string;
  "contact.tienes_alguna_otra_pregunta_o_comentario_sobre_el_equipo11": string;
  full_name: string;
  phone: string;
  email: string;
  privacidad: boolean;
};

const TOTAL_STEPS = 10;

const stepLabels = [
  "Tipo",
  "Marca",
  "Capacidad",
  "Año",
  "Presupuesto",
  "Tiempo",
  "Ciudad",
  "Estado",
  "Comentario",
  "Contacto",
];

export function MultiStepForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const updateData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (contactData: Partial<FormData>) => {
    setSubmitting(true);
    const utms = getStoredUTMs();
    const payload = { ...formData, ...contactData, ...utms };
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Still redirect on error
    }
    router.push("/gracias");
  };

  const progress = (step / TOTAL_STEPS) * 100;

  return (
    <div>
      {/* Progress header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-400 text-xs font-medium">
            Paso <span className="text-slate-600 font-bold">{step}</span> de {TOTAL_STEPS}
          </span>
          <span className="text-brand-orange text-xs font-bold uppercase tracking-wide bg-orange-50 border border-brand-orange/20 rounded-full px-2.5 py-0.5">
            {stepLabels[step - 1]}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-orange to-amber-400 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Step dots */}
        <div className="flex gap-1 mt-2.5 justify-center">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i + 1 < step
                  ? "w-5 h-1.5 bg-brand-orange"
                  : i + 1 === step
                  ? "w-7 h-1.5 bg-brand-orange shadow-sm shadow-brand-orange/50"
                  : "w-2 h-1.5 bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="min-h-[280px]">
        {step === 1 && (
          <Step1TipoGrua
            value={formData["contact.seleccione_la_gra_de_su_inters"] ?? ""}
            onNext={(v) => {
              updateData({ "contact.seleccione_la_gra_de_su_inters": v });
              next();
            }}
          />
        )}
        {step === 2 && (
          <Step2Marca
            marca={formData["contact.seleccionar_marca_de_su_inters"] ?? ""}
            especifique={formData["contact.especifique_la_marca_de_su_interes"] ?? ""}
            onNext={(marca, especifique) => {
              updateData({
                "contact.seleccionar_marca_de_su_inters": marca,
                "contact.especifique_la_marca_de_su_interes": especifique,
              });
              next();
            }}
            onBack={back}
          />
        )}
        {step === 3 && (
          <Step3Capacidad
            value={formData["contact.seleccione_la_capacidad_minima_del_equipo"] ?? ""}
            onNext={(v) => {
              updateData({ "contact.seleccione_la_capacidad_minima_del_equipo": v });
              next();
            }}
            onBack={back}
          />
        )}
        {step === 4 && (
          <Step4Anio
            value={formData["contact.cul_es_el_ao_mnimo_de_la_maquinaria_que_necesitas"] ?? ""}
            onNext={(v) => {
              updateData({ "contact.cul_es_el_ao_mnimo_de_la_maquinaria_que_necesitas": v });
              next();
            }}
            onBack={back}
          />
        )}
        {step === 5 && (
          <Step5Presupuesto
            value={formData["contact.seleccione_su_presupuesto_mximo00"] ?? ""}
            onNext={(v) => {
              updateData({ "contact.seleccione_su_presupuesto_mximo00": v });
              next();
            }}
            onBack={back}
          />
        )}
        {step === 6 && (
          <Step6Tiempo
            value={formData["contact.en_cunto_tiempo_planeas_comprar_el_equipo_66"] ?? ""}
            onNext={(v) => {
              updateData({ "contact.en_cunto_tiempo_planeas_comprar_el_equipo_66": v });
              next();
            }}
            onBack={back}
          />
        )}
        {step === 7 && (
          <Step7Ciudad
            value={formData["contact.ciudad"] ?? ""}
            onNext={(v) => {
              updateData({ "contact.ciudad": v });
              next();
            }}
            onBack={back}
          />
        )}
        {step === 8 && (
          <Step8Estado
            value={formData["contact.selecciona_tu_estado"] ?? ""}
            onNext={(v) => {
              updateData({ "contact.selecciona_tu_estado": v });
              next();
            }}
            onBack={back}
          />
        )}
        {step === 9 && (
          <Step9Comentario
            value={formData["contact.tienes_alguna_otra_pregunta_o_comentario_sobre_el_equipo11"] ?? ""}
            onNext={(v) => {
              updateData({ "contact.tienes_alguna_otra_pregunta_o_comentario_sobre_el_equipo11": v });
              next();
            }}
            onBack={back}
          />
        )}
        {step === 10 && (
          <Step7Contacto
            onSubmit={handleSubmit}
            onBack={back}
            submitting={submitting}
          />
        )}
      </div>
    </div>
  );
}
