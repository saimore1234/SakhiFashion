"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] grid place-items-center bg-cream-50 dark:bg-ink-950"
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="font-display text-5xl font-medium tracking-tight text-ink-900 dark:text-cream-50">
                Sakhi
              </span>
              <span className="font-display text-5xl font-medium text-gold-gradient">
                .
              </span>
            </motion.div>
            <span className="eyebrow">Fashion House</span>
            <div className="relative h-px w-40 overflow-hidden bg-blush-100 dark:bg-ink-800">
              <motion.span
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-300 to-gold-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
