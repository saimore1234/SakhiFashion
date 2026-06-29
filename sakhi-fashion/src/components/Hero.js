"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import {
  BANNER_EVENT,
  FALLBACK_IMAGE,
  getBannerVideo,
} from "@/lib/banner";

export default function Hero() {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setVideoUrl(getBannerVideo());
    const onChange = (e) => {
      setVideoReady(false);
      setVideoUrl(e.detail || "");
    };
    window.addEventListener(BANNER_EVENT, onChange);
    return () => window.removeEventListener(BANNER_EVENT, onChange);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background layer: video with image fallback */}
      <div className="absolute inset-0 -z-10">
        {videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            poster={FALLBACK_IMAGE}
            onCanPlay={() => setVideoReady(true)}
            className={`h-full w-full object-cover transition-opacity duration-700 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : null}

        {/* Fallback image with slow zoom (shows when no video or while loading) */}
        <motion.img
          src={FALLBACK_IMAGE}
          alt="Sakhi Fashion editorial banner"
          loading="eager"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className={`h-full w-full object-cover ${
            videoUrl && videoReady ? "hidden" : "block"
          }`}
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/75 via-ink-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/30" />
      </div>

      {/* Floating gold orbs */}
      <div className="pointer-events-none absolute right-[12%] top-[22%] h-24 w-24 animate-float rounded-full bg-gold-300/20 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[18%] right-[28%] h-16 w-16 animate-float rounded-full bg-blush-300/30 blur-xl [animation-delay:1.5s]" />

      {/* Content */}
      <div className="container-luxe relative px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-300/40 bg-white/10 px-4 py-1.5 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-gold-300" />
            <span className="text-[0.7rem] uppercase tracking-luxe text-cream-50">
              Premium Boutique · Est. 2013
            </span>
          </motion.div>

          <h1 className="font-display text-5xl font-medium leading-[0.98] text-cream-50 sm:text-6xl lg:text-7xl">
            {"Elegance in".split(" ").map((w, i) => (
              <motion.span
                key={w}
                className="mr-3 inline-block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 + i * 0.12 }}
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              className="block italic text-gold-gradient"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62 }}
            >
              Every Thread
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-6 max-w-md font-sans text-base font-light leading-relaxed text-cream-50/85 sm:text-lg"
          >
            Discover your perfect style. Hand-curated sarees, ethnic and western
            wear crafted for the modern woman.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link href="#new-arrivals" className="btn-primary group dark:bg-gold-400">
              Shop Now
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#collections"
              className="btn-outline border-cream-50/40 text-cream-50 hover:border-gold-300 hover:text-gold-300"
            >
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-cream-50/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[0.65rem] uppercase tracking-luxe">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
