import { createContext, useState, useEffect } from "react";

export const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [menu, setMenu] = useState([
    { id: 1, name: "Dior Sauvage", price: 110, category: "Men" },
    { id: 2, name: "Bleu de Chanel", price: 120, category: "Men" },
    { id: 3, name: "Acqua di Giò", price: 95, category: "Men" },
    { id: 4, name: "Versace Eros", price: 90, category: "Men" },
    { id: 5, name: "Viktor & Rolf Spicebomb", price: 115, category: "Men" },
    { id: 6, name: "Paco Rabanne One Million", price: 85, category: "Men" },
    { id: 7, name: "You Intensely", price: 120, category: "Men" },
    { id: 8, name: "Gucci Guilty", price: 100, category: "Men" },
    { id: 9, name: "Hugo Boss Bottled", price: 120, category: "Men" },
  ]);

  useEffect(() => {
    const allmenu = localStorage.getItem("menu");
    if (allmenu) {
      setMenu(JSON.parse(allmenu));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(menu));
  }, [menu]);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
