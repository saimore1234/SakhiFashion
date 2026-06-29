"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Trash2, Pencil, X } from "lucide-react";

export default function Manager({ title, columns, rows, addLabel }) {
  const [items, setItems] = useState(rows);
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState(() =>
    Object.fromEntries(columns.map((c) => [c.key, ""]))
  );

  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const add = () => {
    const hasValues = columns.every((c) => String(draft[c.key]).trim());
    if (!hasValues) return;
    setItems((prev) => [
      { id: `new-${Date.now()}`, ...draft },
      ...prev,
    ]);
    setDraft(Object.fromEntries(columns.map((c) => [c.key, ""])));
    setAdding(false);
  };

  return (
    <div className="rounded-2xl border border-blush-100/50 bg-white/60 p-6 dark:border-ink-700 dark:bg-ink-800/50">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl font-medium text-ink-900 dark:text-cream-50">
          {title}
        </h3>
        <button
          onClick={() => setAdding((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-xs uppercase tracking-wider text-cream-50 transition-colors hover:bg-gold-400 hover:text-ink-900 dark:bg-gold-400 dark:text-ink-900"
        >
          {adding ? <X size={14} /> : <Plus size={14} />}
          {adding ? "Cancel" : addLabel}
        </button>
      </div>

      {/* Add row */}
      <AnimatePresence>
        {adding && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 grid gap-3 rounded-xl bg-cream-100/60 p-4 dark:bg-ink-900/60 sm:grid-cols-2"
          >
            {columns.map((c) => (
              <input
                key={c.key}
                value={draft[c.key]}
                onChange={(e) =>
                  setDraft({ ...draft, [c.key]: e.target.value })
                }
                placeholder={c.label}
                className="rounded-lg border border-blush-100/60 bg-white/70 px-3 py-2 text-sm text-ink-900 outline-none focus:border-gold-400 dark:border-ink-700 dark:bg-ink-800 dark:text-cream-50"
              />
            ))}
            <button
              onClick={add}
              className="btn-primary col-span-full justify-self-start dark:bg-gold-400"
            >
              Save Entry
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Table */}
      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-blush-100/50 text-xs uppercase tracking-wider text-ink-700/60 dark:border-ink-700 dark:text-cream-50/50">
              {columns.map((c) => (
                <th key={c.key} className="px-3 py-3 font-medium">
                  {c.label}
                </th>
              ))}
              <th className="px-3 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {items.map((row) => (
                <motion.tr
                  key={row.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="border-b border-blush-100/30 text-ink-900 dark:border-ink-800 dark:text-cream-50"
                >
                  {columns.map((c) => (
                    <td key={c.key} className="px-3 py-3">
                      {String(row[c.key])}
                    </td>
                  ))}
                  <td className="px-3 py-3">
                    <div className="flex justify-end gap-2">
                      <button
                        className="grid h-8 w-8 place-items-center rounded-lg text-ink-700/60 transition-colors hover:bg-gold-100 hover:text-gold-600 dark:text-cream-50/50 dark:hover:bg-ink-900"
                        aria-label="Edit"
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        onClick={() => remove(row.id)}
                        className="grid h-8 w-8 place-items-center rounded-lg text-red-400 transition-colors hover:bg-red-500 hover:text-white"
                        aria-label="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
}
