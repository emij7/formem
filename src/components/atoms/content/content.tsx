import { FC } from "react";
import { StyledContent } from "./content.styles";
import { TContent } from "./content.types";

export const Content: FC<TContent> = ({
  align,
  as = "div",
  background,
  backgroundColor,
  border,
  borderRadius,
  children,
  contain,
  direction,
  flex,
  gap,
  height,
  justify,
  margin,
  maxWidth,
  minHeight,
  onClick,
  padding,
  styles,
  width,
  wrap,
}) => (
  <StyledContent
    align={align}
    as={as}
    background={background}
    backgroundColor={backgroundColor}
    border={border}
    borderRadius={borderRadius}
    contain={contain}
    direction={direction}
    flex={flex}
    gap={gap}
    height={height}
    justify={justify}
    margin={margin}
    maxWidth={maxWidth}
    minHeight={minHeight}
    onClick={onClick}
    padding={padding}
    styles={styles}
    width={width}
    wrap={wrap}
  >
    {children}
  </StyledContent>
);
