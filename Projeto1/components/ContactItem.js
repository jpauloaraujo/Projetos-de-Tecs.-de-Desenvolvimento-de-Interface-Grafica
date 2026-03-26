import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function ContactItem() {
  const { theme } = useContext(ThemeContext);
  const currentLocation = null; // Valor inicial definido pelas instruções

  return (
    <li className={`item-${theme}`}>
      <p>Contact Details go here.</p>
      <p>Current Location: {currentLocation ? currentLocation : "Unknown"}</p>
    </li>
  );
}
