"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function FeaturedCollections() {
  return (
    <section id="collections" className="section">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Featured"
          accent="Collections"
          lead="Six worlds of craft, from heritage drapes to contemporary silhouettes — each piece chosen for the woman who dresses with intention."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.07}>
              <motion.a
                href="#new-arrivals"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative block h-80 overflow-hidden rounded-2xl"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />

                {/* Count chip */}
                <span className="glass absolute right-4 top-4 rounded-full px-3 py-1 text-[0.7rem] font-medium text-cream-50">
                  {c.count} styles
                </span>

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-sans text-[0.7rem] uppercase tracking-luxe text-gold-300">
                    {c.tagline}
                  </p>
                  <div className="mt-1 flex items-end justify-between">
                    <h3 className="font-display text-2xl font-medium text-cream-50">
                      {c.name}
                    </h3>
                    <span className="grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-gold-400 text-ink-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
