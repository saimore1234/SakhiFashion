"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Star, ShoppingBag } from "lucide-react";
import { products } from "@/data/content";
import { useShop } from "@/context/CartContext";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

const filters = ["All", "Sarees", "Kurtis", "Western Wear", "Party Wear", "Ethnic Wear"];

export default function NewArrivals() {
  const [active, setActive] = useState("All");
  const [quickView, setQuickView] = useState(null);
  const { addToCart } = useShop();

  const visible = useMemo(
    () =>
      active === "All"
        ? products
        : products.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="new-arrivals" className="section bg-cream-100/60 dark:bg-ink-950/40">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Fresh Off The Loom"
          title="New"
          accent="Arrivals"
          lead="The latest additions to the boutique, restocked weekly. Find a piece that feels made for you."
        />

        {/* Filters */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.12em] transition-all ${
                  active === f
                    ? "bg-ink-900 text-cream-50 dark:bg-gold-400 dark:text-ink-900"
                    : "border border-ink-900/15 text-ink-700 hover:border-gold-400 dark:border-cream-50/20 dark:text-cream-50/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={p} onQuickView={setQuickView} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Quick view modal */}
      <AnimatePresence>
        {quickView && (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-ink-950/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQuickView(null)}
          >
            <motion.div
              className="glass-strong relative w-full max-w-3xl overflow-hidden rounded-3xl"
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setQuickView(null)}
                aria-label="Close quick view"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-ink-900 dark:bg-ink-900/80 dark:text-cream-50"
              >
                <X size={18} />
              </button>
              <div className="grid sm:grid-cols-2">
                <img
                  src={quickView.image}
                  alt={quickView.name}
                  className="h-72 w-full object-cover sm:h-full"
                />
                <div className="flex flex-col p-7">
                  <span className="text-[0.7rem] uppercase tracking-luxe text-gold-500">
                    {quickView.category}
                  </span>
                  <h3 className="mt-2 font-display text-3xl font-medium text-ink-900 dark:text-cream-50">
                    {quickView.name}
                  </h3>
                  <div className="mt-3 flex items-center gap-1 text-sm text-ink-700 dark:text-cream-50/70">
                    <Star size={14} className="fill-gold-400 text-gold-400" />
                    {quickView.rating} · 240+ reviews
                  </div>
                  <p className="mt-4 text-sm font-light leading-relaxed text-ink-700/80 dark:text-cream-50/70">
                    A signature Sakhi piece in premium fabric with refined
                    detailing. Tailored for an effortless, flattering drape that
                    moves with you from day to evening.
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="font-display text-2xl font-semibold text-ink-900 dark:text-cream-50">
                      ₹{quickView.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-ink-700/50 line-through dark:text-cream-50/40">
                      ₹{quickView.mrp.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(quickView);
                      setQuickView(null);
                    }}
                    className="btn-primary mt-6 dark:bg-gold-400"
                  >
                    <ShoppingBag size={16} /> Add to Bag
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
