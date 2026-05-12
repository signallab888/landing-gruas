"use client";
import { useEffect, useRef } from "react";

const CLIP_START = 14;
const CLIP_END = 20;

export function HeroVideoBg() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = CLIP_START;

    const onTimeUpdate = () => {
      if (v.currentTime >= CLIP_END) {
        v.currentTime = CLIP_START;
      }
    };
    v.addEventListener("timeupdate", onTimeUpdate);
    return () => v.removeEventListener("timeupdate", onTimeUpdate);
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      src="/gruas-general-4446/video-hero-bg.mp4"
    />
  );
}
