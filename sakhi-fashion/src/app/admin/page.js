"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Film,
  Package,
  Tags,
  MessageSquareQuote,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Dashboard from "@/components/admin/Dashboard";
import VideoUpload from "@/components/admin/VideoUpload";
import Manager from "@/components/admin/Manager";
import { products, collections, testimonials } from "@/data/content";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "banner", label: "Banner Video", icon: Film },
  { id: "products", label: "Products", icon: Package },
  { id: "categories", label: "Categories", icon: Tags },
  { id: "testimonials", label: "Testimonials", icon: MessageSquareQuote },
];

export default function AdminPage() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-ink-950">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="border-b border-blush-100/50 p-5 dark:border-ink-800 lg:min-h-screen lg:w-64 lg:border-b-0 lg:border-r">
          <Link href="/" className="flex items-center gap-1">
            <span className="font-display text-xl font-semibold text-ink-900 dark:text-cream-50">
              Sakhi
            </span>
            <span className="font-display text-xl font-semibold text-gold-gradient">
              Admin
            </span>
          </Link>

          <nav className="mt-8 flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex flex-shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors ${
                  active === t.id
                    ? "bg-ink-900 text-cream-50 dark:bg-gold-400 dark:text-ink-900"
                    : "text-ink-700 hover:bg-blush-50 dark:text-cream-50/70 dark:hover:bg-ink-800"
                }`}
              >
                <t.icon size={17} />
                {t.label}
              </button>
            ))}
          </nav>

          <Link
            href="/"
            className="mt-8 hidden items-center gap-2 text-xs uppercase tracking-wider text-ink-700/60 transition-colors hover:text-gold-500 dark:text-cream-50/50 lg:flex"
          >
            <ArrowLeft size={14} /> Back to site
          </Link>
        </aside>

        {/* Main */}
        <main className="flex-1 p-5 sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow flex items-center gap-2">
                <Sparkles size={12} /> Control Panel
              </p>
              <h1 className="mt-1 font-display text-3xl font-medium capitalize text-ink-900 dark:text-cream-50">
                {tabs.find((t) => t.id === active)?.label}
              </h1>
            </div>
            <ThemeToggle />
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            {active === "dashboard" && <Dashboard />}
            {active === "banner" && <VideoUpload />}
            {active === "products" && (
              <Manager
                title="Manage Products"
                addLabel="Add Product"
                columns={[
                  { key: "name", label: "Name" },
                  { key: "category", label: "Category" },
                  { key: "price", label: "Price (₹)" },
                  { key: "badge", label: "Badge" },
                ]}
                rows={products.map((p) => ({
                  id: p.id,
                  name: p.name,
                  category: p.category,
                  price: p.price,
                  badge: p.badge,
                }))}
              />
            )}
            {active === "categories" && (
              <Manager
                title="Manage Categories"
                addLabel="Add Category"
                columns={[
                  { key: "name", label: "Name" },
                  { key: "tagline", label: "Tagline" },
                  { key: "count", label: "Style Count" },
                ]}
                rows={collections.map((c) => ({
                  id: c.id,
                  name: c.name,
                  tagline: c.tagline,
                  count: c.count,
                }))}
              />
            )}
            {active === "testimonials" && (
              <Manager
                title="Manage Testimonials"
                addLabel="Add Testimonial"
                columns={[
                  { key: "name", label: "Customer" },
                  { key: "city", label: "City" },
                  { key: "rating", label: "Rating" },
                  { key: "text", label: "Review" },
                ]}
                rows={testimonials.map((t) => ({
                  id: t.id,
                  name: t.name,
                  city: t.city,
                  rating: t.rating,
                  text: t.text,
                }))}
              />
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
