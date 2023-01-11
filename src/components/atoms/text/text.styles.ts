import styled from "styled-components";
import { TText } from "./text.types";

export const StyledText = styled.p<TText>`
  color: ${({ color }) => color};
  flex: ${({ flex }) => flex};
  font-size: ${({ size }) => size};
  font-style: ${({ italic }) => italic && "italic"};
  font-weight: ${({ bold, semibold, extrabold }) =>
    extrabold ? "800" : bold ? "700" : semibold ? "600" : "400"};
  font-family: ${({ fontFamily }) => fontFamily || "inherits"};
  margin: ${({ margin }) => margin};
  max-width: ${({ maxWidth }) => maxWidth};
  text-align: ${({ align, center }) => (align || center ? "center" : "left")};
  text-decoration: ${({ lineThrough }) => lineThrough && "line-through"};
  text-transform: ${({ transform }) => transform};
  width: ${({ fill, width }) => (fill ? "100%" : width || "auto")};
`;
