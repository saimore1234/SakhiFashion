"use client";

import { createContext, useContext, useState, useCallback } from "react";

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState(null);

  const notify = useCallback((message) => {
    setToast({ id: Date.now(), message });
    setTimeout(() => setToast(null), 2200);
  }, []);

  const addToCart = useCallback(
    (product) => {
      setCart((prev) => [...prev, product]);
      notify(`${product.name} added to bag`);
    },
    [notify]
  );

  const toggleWishlist = useCallback(
    (product) => {
      setWishlist((prev) => {
        const exists = prev.find((p) => p.id === product.id);
        if (exists) {
          notify(`${product.name} removed from wishlist`);
          return prev.filter((p) => p.id !== product.id);
        }
        notify(`${product.name} saved to wishlist`);
        return [...prev, product];
      });
    },
    [notify]
  );

  const isWishlisted = useCallback(
    (id) => wishlist.some((p) => p.id === id),
    [wishlist]
  );

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        toggleWishlist,
        isWishlisted,
        cartCount: cart.length,
        wishlistCount: wishlist.length,
        toast,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);
