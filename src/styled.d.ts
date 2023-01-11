import "styled-components";
import { theme } from "./styles/globals";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      dark: theme.color.dark;
      blue: theme.color.blue;
      error: {
        light: theme.color.error.light;
        normal: theme.color.error.normal;
      };
      gray: {
        dark: theme.color.gray.dark;
        darker: theme.color.gray.darker;
        light: theme.color.gray.light;
        normal: theme.color.gray.normal;
      };
      link: theme.color.link;
      pass: {
        light: theme.color.pass.light;
        normal: theme.color.pass.normal;
      };
      primary: {
        dark: theme.color.primary.dark;
        light: theme.color.primary.light;
        lighter: theme.color.primary.lighter;
        normal: theme.color.primary.normal;
      };
      light: theme.color.light;
      warning: theme.color.warning;
    };
    spacing: {
      s: theme.spacing.s;
      m: theme.spacing.m;
      l: theme.spacing.l;
      xl: theme.spacing.xl;
    };
    size: {
      s: theme.size.s;
      m: theme.size.m;
      l: theme.size.l;
      xl: theme.size.xl;
    };
  }
}
