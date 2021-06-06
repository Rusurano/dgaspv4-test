import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(4);

  return <ThemeContext.Provider value={[theme, setTheme]}>{ children }</ThemeContext.Provider>
};