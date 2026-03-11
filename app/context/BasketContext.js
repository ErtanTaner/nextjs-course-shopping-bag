"use client";

import { createContext, useState, useContext, useEffect } from "react";

const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("basket");
    if (storedItems) setItems(JSON.parse(storedItems));
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

  const addToBag = (product, quantity) =>
    setItems((prev) => {
      if (prev.find((pi) => pi.id === product.id)) return prev;
      return [...prev, { ...product, quantity }];
    });

  const removeFromBag = (id) =>
    setItems((prev) => prev.filter((ei) => ei.id != id));

  const updateQuantity = (id, quantity) =>
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );

  const emptyBasket = () => setItems([]);

  return (
    <BasketContext.Provider
      value={{ items, addToBag, removeFromBag, updateQuantity, emptyBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  return useContext(BasketContext);
}
