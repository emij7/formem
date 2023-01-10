import styled, { css } from "styled-components";
import { AlignItems } from "../content/content.types";

export const StyledInput = styled.label<{
  align?: AlignItems;
}>`
  align-items: ${({ align }) => align || "flex-start"};
  background-color: ${({ theme }) => theme.color.primary.light};
  border-radius: ${({ theme }) => theme.size.s};
  color: ${({ theme }) => theme.color.gray.dark};
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 500;
  justify-content: flex-start;
  margin: ${({ theme }) => theme.spacing.m};
  padding: ${({ theme }) => theme.spacing.m};
  width: 90%;
`;

export const Value = styled.input<{ fill?: boolean; label?: string }>`
  background-color: ${({ theme }) => theme.color.gray.light};
  border-radius: 0.25rem;
  border: ${({ theme }) => `1px solid ${theme.color.gray.normal}`};
  font-size: 1rem;
  margin-top: ${({ label }) => (label ? "0.5rem" : "0")};
  padding: 0.5rem;
  width: 100%;
  accent-color: ${({ theme }) => theme.color.gray.dark};
  &:hover {
    border: ${({ theme }) => `1px solid ${theme.color.primary.normal}`};
  }

  &:focus {
    outline: none;
  }
`;

export const Area = styled.textarea<{ label?: string }>`
  background-color: ${({ theme }) => theme.color.gray.light};
  border-radius: 0.25rem;
  border: ${({ theme }) => `1px solid ${theme.color.gray.normal}`};
  font-size: 1rem;
  height: 6rem;
  margin-top: ${({ label }) => (label ? "0.5rem" : "0")};
  min-width: 22.5rem;
  padding: 0.5rem;
  width: inherit;

  &:hover {
    border: ${({ theme }) => `1px solid ${theme.color.primary.normal}`};
  }

  &:focus {
    outline: none;
  }
`;

export const styledSuggestions = (isFocused: boolean) => css`
  background-color: ${({ theme }) => theme.color.light};
  border-radius: 0.25rem;
  display: ${isFocused ? "flex" : "none"};
  margin-top: 0.5rem;
  padding: 1rem;
  position: relative;
  top: 0;
`;
