"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";
import { navLinks } from "@/data/content";

const socials = [
  { icon: Instagram, href: "https://instagram.com/sakhifashion", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const help = ["Shipping & Returns", "Size Guide", "Track Order", "FAQs", "Care Guide"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer className="bg-ink-900 text-cream-50 dark:bg-ink-950">
      {/* Newsletter */}
      <div className="container-luxe px-5 pt-16 sm:px-8 lg:px-12">
        <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-br from-ink-800 to-ink-900 p-8 dark:from-ink-900 dark:to-ink-950 sm:p-12 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-3xl font-medium sm:text-4xl">
              Join the{" "}
              <span className="italic text-gold-gradient">inner circle</span>
            </h3>
            <p className="mt-3 max-w-md font-light text-cream-50/70">
              Early access to drops, members-only pricing, and styling notes —
              straight to your inbox.
            </p>
          </div>
          <form onSubmit={subscribe} className="flex w-full gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-full border border-cream-50/20 bg-cream-50/5 px-5 py-3.5 text-sm text-cream-50 outline-none transition-colors placeholder:text-cream-50/40 focus:border-gold-400"
            />
            <button
              type="submit"
              className="flex flex-shrink-0 items-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm uppercase tracking-[0.12em] text-ink-900 transition-transform hover:scale-105"
            >
              {subscribed ? "Joined ✓" : <>Subscribe <ArrowRight size={15} /></>}
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="container-luxe grid gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div>
          <Link href="#home" className="flex items-center gap-1">
            <span className="font-display text-2xl font-semibold">Sakhi</span>
            <span className="font-display text-2xl font-semibold text-gold-gradient">
              Fashion
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm font-light text-cream-50/60">
            Elegance in every thread. A premium women&apos;s boutique crafting
            confidence since 2013.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-cream-50/15 text-cream-50/80 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Explore" links={navLinks.map((l) => l.label)} hrefs={navLinks.map((l) => l.href)} />
        <FooterCol title="Customer Care" links={help} />

        <div>
          <h4 className="font-sans text-xs uppercase tracking-luxe text-gold-300">
            Admin
          </h4>
          <p className="mt-4 text-sm font-light text-cream-50/60">
            Manage banners, products and analytics from the control panel.
          </p>
          <Link
            href="/admin"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-5 py-2.5 text-xs uppercase tracking-[0.12em] text-gold-300 transition-colors hover:bg-gold-400 hover:text-ink-900"
          >
            Open Admin Panel <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-cream-50/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream-50/50 sm:flex-row sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} Sakhi Fashion. All rights reserved.</p>
          <p>Crafted with care in India 🤍</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, hrefs }) {
  return (
    <div>
      <h4 className="font-sans text-xs uppercase tracking-luxe text-gold-300">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {links.map((l, i) => (
          <li key={l}>
            <Link
              href={hrefs?.[i] || "#"}
              className="text-sm font-light text-cream-50/65 transition-colors hover:text-gold-300"
            >
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
