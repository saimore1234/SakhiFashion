"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { instagramPosts } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function InstagramGallery() {
  return (
    <section className="section bg-cream-100/60 dark:bg-ink-950/40">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="@sakhifashion"
          title="Styled by"
          accent="Our Community"
          lead="Tag #SakhiStyle to be featured. A little inspiration from women who wear it best."
        />

        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {instagramPosts.map((src, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 0.98 }}
                className="group relative block break-inside-avoid overflow-hidden rounded-2xl"
              >
                <img
                  src={src}
                  alt={`Sakhi Fashion community post ${i + 1}`}
                  loading="lazy"
                  className={`w-full object-cover ${
                    i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
                  }`}
                />
                <div className="absolute inset-0 grid place-items-center bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/45">
                  <Instagram
                    size={28}
                    className="scale-50 text-cream-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  />
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Instagram size={16} /> Follow @sakhifashion
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
