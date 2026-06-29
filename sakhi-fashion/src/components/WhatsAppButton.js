"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";

const PREFILLED_MESSAGE =
  "Hello Sakhi Fashion, I am interested in your collection.";

const contacts = [
  { label: "Sales — Suchita", number: "919773011832", display: "+91 97730 11832" },
  { label: "Support — Vinayak", number: "919773298728", display: "+91 97732 98728" },
];

function whatsappLink(number) {
  return `https://wa.me/${number}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;
}

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: "spring", damping: 24, stiffness: 280 }}
            className="glass-strong absolute bottom-16 left-0 w-72 overflow-hidden rounded-2xl shadow-soft"
          >
            <div className="flex items-center justify-between bg-[#1faa55] px-5 py-4 text-cream-50">
              <div className="flex items-center gap-2.5">
                <MessageCircle size={20} />
                <div>
                  <p className="text-sm font-semibold">Chat with us</p>
                  <p className="text-[0.7rem] text-cream-50/80">
                    Typically replies within minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close WhatsApp menu"
                className="grid h-7 w-7 place-items-center rounded-full transition-colors hover:bg-cream-50/15"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-2 bg-cream-50 p-3 dark:bg-ink-900">
              {contacts.map((c) => (
                <a
                  key={c.number}
                  href={whatsappLink(c.number)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-ink-900/10 px-4 py-3 transition-colors hover:border-[#1faa55] hover:bg-[#1faa55]/5 dark:border-cream-50/10"
                >
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-[#1faa55]/10 text-[#1faa55]">
                    <Phone size={16} />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-ink-900 dark:text-cream-50">
                      {c.label}
                    </span>
                    <span className="block text-xs text-ink-700/60 dark:text-cream-50/60">
                      {c.display}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ scale: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } }}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#1faa55] text-cream-50 shadow-soft"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }}>
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }}>
              <MessageCircle size={26} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
