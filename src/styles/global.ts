import { createGlobalStyle } from "styled-components";

export const theme = {
  color: {
    dark: "#202020",
    blue: "#42A5F5",
    error: {
      light: "#FFEBEE",
      normal: "#EF5350",
    },
    gray: {
      dark: "#757575",
      darker: "#616161",
      light: "#FAFAFA",
      normal: "#E0E0E0",
    },
    link: "#2962FF",
    pass: {
      light: "#E8F5E9",
      normal: "#66BB6A",
    },
    primary: {
      dark: "#439A97",
      normal: "#62B6B7",
      light: "#97DECE",
      lighter: "#d5f2ec",
    },
    warning: "#FFA726",
    light: "#FFFFFF",
  },
  spacing: {
    s: "0.5rem",
    m: "1rem",
    l: "2rem",
    xl: "5rem",
  },
  size: {
    s: "1rem",
    m: "2rem",
    l: "5rem",
    xl: "10rem",
  },
};

export type TSize = keyof typeof theme.size;

export const GlobalStyles = createGlobalStyle`
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overscroll-behavior: none;
    background-color: ${({ theme }) => theme.color.primary.lighter};
  }

  *,
  *:before,
  *:after {
	  box-sizing: border-box;
    font-family: monospace;
    margin: 0;
    padding: 0;
  }

  a {
    display: block;
    text-decoration: none;
    text-align: center;
  }

  a,
  button {
    cursor: pointer;
  }

  pre,
  ul,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  button {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

`;
