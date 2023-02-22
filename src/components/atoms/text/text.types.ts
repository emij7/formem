import { ReactNode } from "react";

export type TText = {
  align?: "left" | "center" | "right";
  bold?: boolean;
  center?: boolean;
  children: ReactNode;
  color?: string;
  extrabold?: boolean;
  fill?: boolean;
  fontFamily?: string;
  flex?: number;
  italic?: boolean;
  lineThrough?: boolean;
  margin?: string;
  maxWidth?: string;
  medium?: boolean;
  noWrap?: boolean;
  semibold?: boolean;
  size?: string;
  isTitle?: boolean;
  transform?: "none" | "uppercase" | "lowercase";
  width?: string;
};
