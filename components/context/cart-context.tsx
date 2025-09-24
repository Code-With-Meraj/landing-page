"use client";
import { createContext, useContext, useState } from "react";
import type { CartItem } from "@/type";

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
} | null>(null); 

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
