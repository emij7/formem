import {
  JSXElementConstructor,
  ReactChild,
  ReactElement,
  ReactFragment,
  ReactNode,
  ReactPortal,
} from "react";
import { CSSProp } from "styled-components";

export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

export type AlignItems =
  | "baseline"
  | "center"
  | "flex-end"
  | "flex-start"
  | "space-between"
  | "stretch";

export type AlignContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "stretch";

export type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

export type FlexBasis =
  | "auto"
  | "content"
  | "max-content"
  | "min-content"
  | string;

export type FlexGrow = number;

export type FlexShrink = number;

export type Flex = FlexGrow | FlexShrink | FlexBasis;

export type TContent = {
  align?: AlignItems;
  as?: any;
  background?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  children?:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | ReactNode[]
    | ReactChild[]
    | null
    | undefined;
  contain?: boolean;
  direction?: FlexDirection;
  flex?: number;
  gap?: string;
  height?: string;
  justify?: JustifyContent;
  margin?: string;
  maxWidth?: string;
  minHeight?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  padding?: string;
  styles?: CSSProp;
  width?: string;
  wrap?: boolean;
};
