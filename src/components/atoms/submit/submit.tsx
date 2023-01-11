import React, { FC } from "react";
import { StyledSubmit } from "./submit.styles";
import { TSubmit } from "./submit.types";

export const Submit: FC<TSubmit> = ({ id, label, type, onClick }) => {
  return (
    <StyledSubmit id={id || label} type={type} onClick={onClick}>
      {label}
    </StyledSubmit>
  );
};
