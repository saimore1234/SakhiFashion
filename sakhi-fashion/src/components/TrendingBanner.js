"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TrendingBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[70vh] items-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10 scale-110">
        <img
          src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=1920&q=80"
          alt="Trending festive edit"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/65" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container-luxe px-5 text-center sm:px-8 lg:px-12"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow !text-gold-300"
        >
          The Festive Edit · 2026
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl font-display text-4xl font-medium leading-tight text-cream-50 sm:text-6xl"
        >
          Dress the season in{" "}
          <span className="italic text-gold-gradient">gold & grace</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-lg font-light text-cream-50/80"
        >
          Up to 40% off on our most-loved bridal and party pieces. Limited
          stock, endless compliments.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Link href="#new-arrivals" className="btn-primary group bg-gold-400 text-ink-900">
            Shop the Edit
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#collections"
            className="btn-outline border-cream-50/40 text-cream-50 hover:border-gold-300 hover:text-gold-300"
          >
            View Lookbook
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
