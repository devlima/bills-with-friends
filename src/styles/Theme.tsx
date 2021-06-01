import { ThemeProvider } from "styled-components";
import React from "react";

export const globalTheme = {
  colors: {
    white: "#fff",
    black: "#000",
    gray: "#333333",
    darkgray: "#141414",
    offwhite: "#F5F5F5",
  },
  sizes: {
    xsmall: "1rem",
    small: "1.25rem",
    normal: "1.5rem",
    large: "2rem",
  },
  weights: {
    thin: 100,
    regular: 400,
    bold: 700,
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={globalTheme}>{children}</ThemeProvider>;
};

export default Theme;
