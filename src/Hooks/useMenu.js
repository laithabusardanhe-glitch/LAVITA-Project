import { useContext } from "react";
import { MenuContext } from "../Context/MenuContext.jsx";

export default function useMenu() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }

  return context; 
}
