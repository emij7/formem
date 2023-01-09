import styled from "styled-components";
import { TContent } from "./content.types";

export const StyledContent = styled.div<TContent>`
  align-items: ${({ align }) => align || "flex-start"};
  background: ${({ background }) => background};
  cursor: ${({ onClick }) => onClick && "pointer"};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  display: flex;
  flex: ${({ flex }) => flex};
  flex-direction: ${({ direction }) => direction || "column"};
  flex-wrap: ${({ wrap }) => wrap && "wrap"};
  gap: ${({ gap }) => gap || "1rem"};
  height: ${({ height }) => height};
  justify-content: ${({ justify }) => justify || "flex-start"};
  margin: ${({ margin }) => margin};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  padding: ${({ padding }) => padding || 0};
  width: ${({ contain, width }) =>
    width ? width : contain ? "fit-content" : "100%"};
  ${({ styles }) => styles}
`;
