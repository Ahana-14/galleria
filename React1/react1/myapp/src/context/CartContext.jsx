import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(product, quantity = 1) {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p));
      }
      return [...prev, { ...product, quantity }];
    });
  }

  function removeItem(productId) {
    setItems((prev) => prev.filter((p) => p.id !== productId));
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) return removeItem(productId);
    setItems((prev) => prev.map((p) => (p.id === productId ? { ...p, quantity } : p)));
  }

  function clearCart() {
    setItems([]);
  }

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, p) => sum + p.price * p.quantity, 0);
    return { subtotal };
  }, [items]);

  const value = { items, addItem, removeItem, updateQuantity, clearCart, totals };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}


