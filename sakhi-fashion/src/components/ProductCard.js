"use client";

import { motion } from "framer-motion";
import { Eye, Heart, ShoppingBag, Star } from "lucide-react";
import { useShop } from "@/context/CartContext";

export default function ProductCard({ product, onQuickView }) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );
  const wished = isWishlisted(product.id);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white/60 shadow-glass backdrop-blur-sm dark:bg-ink-800/50"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.badge && (
            <span className="rounded-full bg-ink-900/90 px-3 py-1 text-[0.65rem] uppercase tracking-wider text-cream-50">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-gold-400 px-3 py-1 text-[0.65rem] font-semibold text-ink-900">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => toggleWishlist(product)}
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-ink-900 backdrop-blur transition-colors hover:bg-white dark:bg-ink-900/70 dark:text-cream-50"
        >
          <Heart
            size={16}
            className={wished ? "fill-blush-500 text-blush-500" : ""}
          />
        </button>

        {/* Quick view (slides up) */}
        <div className="absolute inset-x-3 bottom-3 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={() => onQuickView?.(product)}
            className="glass-strong flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-xs uppercase tracking-[0.15em] text-ink-900 dark:text-cream-50"
          >
            <Eye size={15} /> Quick View
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between">
          <span className="text-[0.68rem] uppercase tracking-wider text-gold-500">
            {product.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-ink-700 dark:text-cream-50/70">
            <Star size={12} className="fill-gold-400 text-gold-400" />
            {product.rating}
          </span>
        </div>

        <h3 className="mt-1.5 font-display text-lg font-medium leading-snug text-ink-900 dark:text-cream-50">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="font-sans text-base font-medium text-ink-900 dark:text-cream-50">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span className="text-sm text-ink-700/50 line-through dark:text-cream-50/40">
            ₹{product.mrp.toLocaleString("en-IN")}
          </span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 flex items-center justify-center gap-2 rounded-full border border-ink-900/15 py-2.5 text-xs uppercase tracking-[0.15em] text-ink-900 transition-all hover:bg-ink-900 hover:text-cream-50 dark:border-cream-50/20 dark:text-cream-50 dark:hover:bg-gold-400 dark:hover:text-ink-900"
        >
          <ShoppingBag size={15} /> Add to Bag
        </button>
      </div>
    </motion.article>
  );
}
