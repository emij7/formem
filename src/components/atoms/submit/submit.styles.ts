import styled from "styled-components";

export const StyledSubmit = styled.button<{}>`
  background-color: ${({ theme }) => theme.color.gray.light};
  border-radius: 0.25rem;
  border: ${({ theme }) => `1px solid ${theme.color.gray.normal}`};
  font-size: 1rem;
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
