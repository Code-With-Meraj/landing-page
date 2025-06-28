"use client";
import React from "react";
import Header from "./header";
import { CartProvider } from "./context/cart-context";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
      </div>
    </CartProvider>
  );
};

export default Layout;
