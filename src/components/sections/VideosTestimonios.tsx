"use client";

import { useState, useRef } from "react";

const videos = [
  {
    src: "/gruas-general-4446/video-titan.mp4",
    titulo: "¿Cómo una Grúa Titán puede transformar tu negocio?",
    empresa: "Cliente Grúa Titán",
    tag: "Caso de éxito",
  },
  {
    src: "/gruas-general-4446/video-proceso.mp4",
    titulo: "¿Cómo traer una grúa desde EE.UU. hasta México?",
    empresa: "Proceso completo",
    tag: "Explicación",
  },
];

function VideoCard({ video }: { video: typeof videos[0] }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg shadow-slate-100/80 flex flex-col">
      {/* Etiqueta */}
      <div className="px-5 pt-5 pb-3 flex items-center gap-2">
        <span className="text-xs font-semibold bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full">
          {video.tag}
        </span>
      </div>

      {/* Video */}
      <div className="relative mx-5 rounded-xl overflow-hidden bg-slate-900 aspect-video cursor-pointer" onClick={toggle}>
        <video
          ref={ref}
          src={video.src}
          className="w-full h-full object-cover"
          playsInline
          onEnded={() => setPlaying(false)}
        />
        {/* Overlay play/pausa */}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center shadow-xl">
              <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        {playing && (
          <div className="absolute bottom-3 right-3">
            <div className="w-9 h-9 rounded-full bg-black/50 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-5 py-4">
        <p className="font-display font-bold text-brand-navy text-base leading-snug mb-1">
          {video.titulo}
        </p>
        <p className="text-slate-500 text-sm">{video.empresa}</p>
      </div>
    </div>
  );
}

export function VideosTestimonios() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold tracking-widest text-brand-orange uppercase mb-3">
            Testimonio real
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-brand-navy mb-3">
            Empresas que ya están comprando así
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Mira cómo otras empresas han transformado su operación adquiriendo
            equipos verificados en el mercado norteamericano.
          </p>
        </div>

        {/* Grid de videos */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {videos.map((v) => (
            <VideoCard key={v.src} video={v} />
          ))}
        </div>

      </div>
    </section>
  );
}
