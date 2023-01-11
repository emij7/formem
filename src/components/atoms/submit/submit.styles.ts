import styled from "styled-components";

export const StyledSubmit = styled.button<{}>`
  background-color: ${({ theme }) => theme.color.blue};
  border-radius: 1rem;
  border: ${({ theme }) => `1px solid ${theme.color.gray.normal}`};
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem;
  width: 35%;
  accent-color: ${({ theme }) => theme.color.gray.dark};
  &:hover {
    border: ${({ theme }) => `1px solid ${theme.color.primary.normal}`};
  }

  &:focus {
    outline: none;
  }
`;
