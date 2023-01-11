import { FC } from "react";
import { theme } from "../../../styles/global";
import { Text } from "../text/text";
import { Option, Select, StyledInput, Value } from "./input.styles";
import { TInput } from "./input.types";

export const Input: FC<TInput> = ({
  align,
  helper,
  hideLabel = false,
  id,
  label,
  name,
  onClick,
  onChange,
  type = "text",
  value,
  options,
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
      {type === "select" ? (
        <Select
          id={id || label}
          label={label}
          name={name}
          onChange={onChange}
          required
        >
          <Option value="">--Selecciona un país--</Option>
          {options?.map((option, index) => {
            return (
              <Option key={index} value={option.value}>
                {option.label}
              </Option>
            );
          })}
        </Select>
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
