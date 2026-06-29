"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { testimonials } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Loved by Thousands"
          title="What Our"
          accent="Sakhis Say"
          lead="Real words from the women who wear Sakhi to their most cherished moments."
        />

        <Reveal delay={0.1}>
          <div className="mt-14">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              loop
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                768: { slidesPerView: 2 },
                1100: { slidesPerView: 3 },
              }}
              className="!pb-14"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id} className="h-auto pb-2">
                  <div className="flex h-full flex-col rounded-2xl bg-white/70 p-7 shadow-glass backdrop-blur-sm dark:bg-ink-800/50">
                    <Quote
                      size={32}
                      className="text-gold-300/60"
                      strokeWidth={1.5}
                    />
                    <div className="mt-3 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className={
                            i < t.rating
                              ? "fill-gold-400 text-gold-400"
                              : "text-ink-700/20"
                          }
                        />
                      ))}
                    </div>
                    <p className="mt-4 flex-1 font-display text-lg font-medium italic leading-relaxed text-ink-900 dark:text-cream-50">
                      “{t.text}”
                    </p>
                    <div className="mt-6 flex items-center gap-3 border-t border-blush-100/50 pt-5 dark:border-ink-700">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        loading="lazy"
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-gold-300"
                      />
                      <div>
                        <p className="font-sans text-sm font-medium text-ink-900 dark:text-cream-50">
                          {t.name}
                        </p>
                        <p className="text-xs text-ink-700/70 dark:text-cream-50/60">
                          {t.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
