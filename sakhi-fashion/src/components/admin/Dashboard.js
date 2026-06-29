"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  ShoppingBag,
  Users,
  IndianRupee,
} from "lucide-react";

const kpis = [
  { icon: IndianRupee, label: "Revenue (30d)", value: "₹18.4L", delta: "+12.5%" },
  { icon: ShoppingBag, label: "Orders", value: "1,284", delta: "+8.2%" },
  { icon: Users, label: "New Customers", value: "642", delta: "+19.1%" },
  { icon: TrendingUp, label: "Conversion", value: "3.8%", delta: "+0.4%" },
];

const sales = [42, 58, 49, 73, 64, 88, 79, 95, 84, 102, 96, 118];
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const topCategories = [
  { name: "Sarees", pct: 34 },
  { name: "Bridal", pct: 26 },
  { name: "Party Wear", pct: 18 },
  { name: "Kurtis", pct: 14 },
  { name: "Western", pct: 8 },
];

export default function Dashboard() {
  const max = Math.max(...sales);
  return (
    <div className="space-y-6">
      {/* KPI cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="rounded-2xl border border-blush-100/50 bg-white/60 p-5 dark:border-ink-700 dark:bg-ink-800/50"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-100 text-gold-600 dark:bg-ink-900">
                <k.icon size={18} />
              </span>
              <span className="text-xs font-medium text-emerald-500">
                {k.delta}
              </span>
            </div>
            <p className="mt-4 font-display text-3xl font-semibold text-ink-900 dark:text-cream-50">
              {k.value}
            </p>
            <p className="text-xs uppercase tracking-wider text-ink-700/60 dark:text-cream-50/50">
              {k.label}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Sales chart */}
        <div className="rounded-2xl border border-blush-100/50 bg-white/60 p-6 dark:border-ink-700 dark:bg-ink-800/50 lg:col-span-2">
          <h3 className="font-display text-xl font-medium text-ink-900 dark:text-cream-50">
            Monthly Sales
          </h3>
          <p className="text-xs text-ink-700/60 dark:text-cream-50/50">
            Units sold across all collections
          </p>
          <div className="mt-6 flex h-48 items-end gap-2">
            {sales.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(v / max) * 100}%` }}
                  transition={{ delay: i * 0.04, duration: 0.6 }}
                  className="w-full rounded-t-md bg-gradient-to-t from-gold-500 to-gold-300"
                />
                <span className="text-[0.6rem] text-ink-700/50 dark:text-cream-50/40">
                  {months[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top categories */}
        <div className="rounded-2xl border border-blush-100/50 bg-white/60 p-6 dark:border-ink-700 dark:bg-ink-800/50">
          <h3 className="font-display text-xl font-medium text-ink-900 dark:text-cream-50">
            Top Categories
          </h3>
          <div className="mt-5 space-y-4">
            {topCategories.map((c, i) => (
              <div key={c.name}>
                <div className="flex justify-between text-sm text-ink-900 dark:text-cream-50">
                  <span>{c.name}</span>
                  <span className="text-gold-500">{c.pct}%</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-blush-100 dark:bg-ink-900">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${c.pct * 2.6}%` }}
                    transition={{ delay: i * 0.08, duration: 0.7 }}
                    className="h-full rounded-full bg-gradient-to-r from-gold-300 to-gold-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
