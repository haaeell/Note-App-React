import React from "react";

const ThemeContext = React.createContext("dark");

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
