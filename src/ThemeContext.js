import React, { createContext, useState } from 'react';

// Créer le contexte
export const ThemeContext = createContext();

// Créer le provider pour englober l'application
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Par défaut 'light'

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
