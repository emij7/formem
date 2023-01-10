import { FC } from "react";
import { theme } from "../../../styles/global";
import { Text } from "../text/text";
import { Area, StyledInput, Value } from "./input.styles";
import { TInput } from "./input.types";

export const Input: FC<TInput> = ({
  align,
  helper,
  hideLabel = false,
  id,
  label,
  name,
  onChange,
  type = "text",
  value,
  ...props
}) => {
  return (
    <StyledInput align={align} htmlFor={id || label}>
      {!hideLabel && label}
      {helper && (
        <Text
          color={theme.color.gray.dark}
          margin="0.125rem 0 0 0"
          size="0.875rem"
        >
          {helper}
        </Text>
      )}
      {type === "textarea" ? (
        <Area id={id || label} label={label} name={name} onChange={onChange}>
          {value}
        </Area>
      ) : (
        <Value
          id={id || label}
          label={label}
          name={name}
          onChange={onChange}
          type={type}
          {...props}
        />
      )}
    </StyledInput>
  );
};
