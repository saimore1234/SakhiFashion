"use client";

import { motion } from "framer-motion";
import { Gem, HeartHandshake, Leaf } from "lucide-react";
import { stats } from "@/data/content";
import Counter from "./Counter";
import Reveal from "./Reveal";

const values = [
  {
    icon: Gem,
    title: "Crafted to Last",
    text: "Premium fabrics and finishing, inspected by hand before they reach you.",
  },
  {
    icon: HeartHandshake,
    title: "Made Ethically",
    text: "Fair wages and dignified work for every artisan in our supply chain.",
  },
  {
    icon: Leaf,
    title: "Mindful Production",
    text: "Small-batch drops that reduce waste without compromising on choice.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-luxe">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image collage */}
          <Reveal>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80"
                alt="Inside the Sakhi atelier"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-3xl object-cover"
              />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="glass-strong absolute -bottom-6 -right-4 w-44 rounded-2xl p-5 sm:-right-8"
              >
                <p className="font-display text-3xl font-semibold text-gold-gradient">
                  <Counter value={12} suffix=" yrs" />
                </p>
                <p className="mt-1 text-xs text-ink-700 dark:text-cream-50/70">
                  of dressing women for their best moments
                </p>
              </motion.div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <span className="eyebrow">Our Story</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-ink-900 dark:text-cream-50 sm:text-5xl">
                A boutique built on{" "}
                <span className="italic text-gold-gradient">friendship</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 font-light leading-relaxed text-ink-700/85 dark:text-cream-50/75">
                Sakhi means a trusted friend — and that&apos;s exactly the role we
                play in your wardrobe. What began in 2013 as a single rack of
                hand-picked sarees has grown into a fashion house loved across
                320 cities, yet the promise hasn&apos;t changed: thoughtful pieces,
                honest prices, and the kind of fit that makes you stand a little
                taller.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={0.2 + i * 0.08}>
                  <div>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-100 text-gold-600 dark:bg-ink-800">
                      <v.icon size={20} />
                    </span>
                    <h3 className="mt-3 font-display text-lg font-medium text-ink-900 dark:text-cream-50">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-sm font-light text-ink-700/75 dark:text-cream-50/65">
                      {v.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-blush-100/40 dark:bg-ink-800/60 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-cream-50/80 px-6 py-9 text-center dark:bg-ink-900/80"
              >
                <p className="font-display text-4xl font-semibold text-gold-gradient sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs uppercase tracking-luxe text-ink-700/70 dark:text-cream-50/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
