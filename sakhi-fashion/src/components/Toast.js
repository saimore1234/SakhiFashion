"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useShop } from "@/context/CartContext";

export default function Toast() {
  const { toast } = useShop();

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-[100] -translate-x-1/2">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="glass-strong flex items-center gap-3 rounded-full px-5 py-3 text-sm text-ink-900 dark:text-cream-50"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gold-400 text-ink-900">
              <Check size={14} strokeWidth={3} />
            </span>
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
