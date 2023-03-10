import { FC } from "react";
import { theme } from "../../../styles/global";
import { StyledText } from "./text.styles";
import { TText } from "./text.types";

export const Text: FC<TText> = ({
  align,
  bold,
  center,
  children,
  color = `${theme.color.dark}`,
  extrabold,
  fill,
  fontFamily,
  flex,
  italic,
  lineThrough,
  margin,
  maxWidth,
  medium,
  semibold,
  size = "1rem",
  isTitle = false,
  transform,
  width,
}) => (
  <StyledText
    align={align}
    bold={bold}
    center={center}
    color={color}
    extrabold={extrabold}
    fill={fill}
    fontFamily={fontFamily}
    flex={flex}
    italic={italic}
    lineThrough={lineThrough}
    margin={margin}
    maxWidth={maxWidth}
    medium={medium}
    semibold={semibold}
    size={size}
    isTitle={isTitle}
    transform={transform}
    width={width}
  >
    {children}
  </StyledText>
);
