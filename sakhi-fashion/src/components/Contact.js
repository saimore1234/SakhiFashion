"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const details = [
  {
    icon: MapPin,
    label: "Visit the boutique",
    value: "14 Linking Road, Bandra West, Mumbai 400050",
  },
  { icon: Phone, label: "Call us", value: "+91 98200 12345" },
  { icon: Mail, label: "Email", value: "hello@sakhifashion.com" },
  { icon: Clock, label: "Open", value: "Mon–Sat · 10:00 AM – 8:30 PM" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section bg-cream-100/60 dark:bg-ink-950/40">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="We'd Love to Hear From You"
          title="Get in"
          accent="Touch"
          lead="Questions about sizing, styling or a custom order? Our team replies within a day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={submit}
              className="rounded-3xl bg-white/70 p-7 shadow-glass backdrop-blur-sm dark:bg-ink-800/50 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Your name"
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Ananya Sharma"
                />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@email.com"
                />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-xs uppercase tracking-luxe text-ink-700/70 dark:text-cream-50/60">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  rows={5}
                  placeholder="Tell us how we can help…"
                  className="w-full rounded-2xl border border-blush-100/60 bg-cream-50/60 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-gold-400 dark:border-ink-700 dark:bg-ink-900/60 dark:text-cream-50"
                />
              </div>
              <button type="submit" className="btn-primary mt-6 dark:bg-gold-400">
                {sent ? "Message Sent ✓" : "Send Message"}
                {!sent && <Send size={15} />}
              </button>
            </form>
          </Reveal>

          {/* Details + map */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-3xl bg-white/70 p-7 shadow-glass backdrop-blur-sm dark:bg-ink-800/50">
                <ul className="space-y-5">
                  {details.map((d) => (
                    <li key={d.label} className="flex gap-4">
                      <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gold-100 text-gold-600 dark:bg-ink-900">
                        <d.icon size={18} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-ink-700/60 dark:text-cream-50/50">
                          {d.label}
                        </p>
                        <p className="text-sm text-ink-900 dark:text-cream-50">
                          {d.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="relative flex-1 overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(198,161,91,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(198,161,91,0.12),transparent_60%)]" />
                <div className="grid h-full min-h-[180px] place-items-center bg-cream-200/50 dark:bg-ink-900/60">
                  <div className="text-center">
                    <MapPin size={28} className="mx-auto text-gold-500" />
                    <p className="mt-2 font-display text-lg text-ink-900 dark:text-cream-50">
                      Find us in Bandra
                    </p>
                    <p className="text-xs text-ink-700/60 dark:text-cream-50/50">
                      Embed your Google Maps iframe here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-luxe text-ink-700/70 dark:text-cream-50/60">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-2xl border border-blush-100/60 bg-cream-50/60 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-gold-400 dark:border-ink-700 dark:bg-ink-900/60 dark:text-cream-50"
      />
    </div>
  );
}
