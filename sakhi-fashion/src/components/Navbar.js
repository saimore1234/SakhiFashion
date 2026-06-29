"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, ShoppingBag, X, Search, Instagram } from "lucide-react";
import { navLinks } from "@/data/content";
import { useShop } from "@/context/CartContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { cartCount, wishlistCount } = useShop();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Announcement marquee */}
      <div className="overflow-hidden bg-ink-900 py-2 text-cream-50 dark:bg-ink-950">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-[0.7rem] uppercase tracking-luxe">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-12">
              <span>Free shipping over ₹2999</span>
              <span className="text-gold-300">✦</span>
              <span>New bridal edit just dropped</span>
              <span className="text-gold-300">✦</span>
              <span>Members earn double points</span>
              <span className="text-gold-300">✦</span>
              <span>Crafted in India with love</span>
              <span className="text-gold-300">✦</span>
            </span>
          ))}
        </div>
      </div>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-glass"
            : "bg-transparent"
        }`}
      >
        <nav className="container-luxe flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link href="#home" className="group flex items-center gap-1">
            <span className="font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-cream-50">
              Sakhi
            </span>
            <span className="font-display text-2xl font-semibold text-gold-gradient">
              Fashion
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group relative font-sans text-[0.82rem] uppercase tracking-[0.12em] text-ink-700 transition-colors hover:text-gold-500 dark:text-cream-50/80"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              aria-label="Search"
              className="hidden h-10 w-10 place-items-center rounded-full border border-ink-900/15 text-ink-900 transition-colors hover:border-gold-400 hover:text-gold-500 dark:border-cream-50/20 dark:text-cream-50 sm:grid"
            >
              <Search size={18} />
            </button>
            <a
              href="https://instagram.com/sakhifashion"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="hidden h-10 w-10 place-items-center rounded-full border border-ink-900/15 text-ink-900 transition-colors hover:border-gold-400 hover:text-gold-500 dark:border-cream-50/20 dark:text-cream-50 sm:grid"
            >
              <Instagram size={18} />
            </a>
            <ThemeToggle />
            <IconBadge icon={Heart} count={wishlistCount} label="Wishlist" />
            <IconBadge icon={ShoppingBag} count={cartCount} label="Bag" />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/15 text-ink-900 dark:border-cream-50/20 dark:text-cream-50 lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-ink-950/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="glass-strong fixed right-0 top-0 z-[70] flex h-full w-[82%] max-w-sm flex-col p-7 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-semibold text-ink-900 dark:text-cream-50">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/15 dark:border-cream-50/20"
                >
                  <X size={20} className="text-ink-900 dark:text-cream-50" />
                </button>
              </div>
              <ul className="mt-10 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-blush-100/40 py-4 font-display text-2xl text-ink-900 transition-colors hover:text-gold-500 dark:border-ink-800 dark:text-cream-50"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="https://instagram.com/sakhifashion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full"
                >
                  <Instagram size={16} /> Follow on Instagram
                </a>
                <Link
                  href="/admin"
                  onClick={() => setOpen(false)}
                  className="btn-outline w-full"
                >
                  Admin Panel
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function IconBadge({ icon: Icon, count, label }) {
  return (
    <button
      aria-label={label}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-ink-900/15 text-ink-900 transition-colors hover:border-gold-400 hover:text-gold-500 dark:border-cream-50/20 dark:text-cream-50"
    >
      <Icon size={18} />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-gold-400 text-[0.65rem] font-semibold text-ink-900">
          {count}
        </span>
      )}
    </button>
  );
}
