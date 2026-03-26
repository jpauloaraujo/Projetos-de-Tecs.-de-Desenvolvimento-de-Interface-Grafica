import React, { useState } from 'react';

// Cria o contexto
export const ThemeContext = React.createContext();

// Cria o componente wrapper ThemeArea
export const ThemeArea = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};