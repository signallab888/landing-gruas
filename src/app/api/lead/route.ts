import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;

    if (ghlWebhookUrl) {
      const ghlPayload = {
        contact: {
          full_name: body.full_name,
          phone: body.phone,
          email: body.email,
          seleccione_la_gra_de_su_inters: body["contact.seleccione_la_gra_de_su_inters"],
          especifique_el_equipo_de_su_interes: body["contact.especifique_el_equipo_de_su_interes"],
          seleccionar_marca_de_su_inters: body["contact.seleccionar_marca_de_su_inters"],
          especifique_la_marca_de_su_interes: body["contact.especifique_la_marca_de_su_interes"],
          seleccione_la_capacidad_minima_del_equipo: body["contact.seleccione_la_capacidad_minima_del_equipo"],
          cul_es_el_ao_mnimo_de_la_maquinaria_que_necesitas: body["contact.cul_es_el_ao_mnimo_de_la_maquinaria_que_necesitas"],
          seleccione_su_presupuesto_mximo00: body["contact.seleccione_su_presupuesto_mximo00"],
          en_cunto_tiempo_planeas_comprar_el_equipo_66: body["contact.en_cunto_tiempo_planeas_comprar_el_equipo_66"],
          ciudad: body["contact.ciudad"],
          selecciona_tu_estado: body["contact.selecciona_tu_estado"],
          tienes_alguna_otra_pregunta_o_comentario_sobre_el_equipo11: body["contact.tienes_alguna_otra_pregunta_o_comentario_sobre_el_equipo11"],
        },
        source: "landing-gruas-general-4446",
      };

      const ghlRes = await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ghlPayload),
      });

      if (!ghlRes.ok) {
        console.error("GHL webhook error:", ghlRes.status, await ghlRes.text());
      }
    } else {
      console.log("GHL_WEBHOOK_URL not set — lead data:", JSON.stringify(body, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ success: false, error: "Internal error" }, { status: 500 });
  }
}
