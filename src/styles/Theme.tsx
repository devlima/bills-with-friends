import { ThemeProvider } from "styled-components";
import React from "react";

export const globalTheme = {
  colors: {
    white: "rgb(255,255,255)",
    black: "rgb(0,0,0)",
    gray: "rgb(51,51,51)",
    darkgray: "rgb(20,20,20)",
    offwhite: "rgb(245,245,245)",
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
