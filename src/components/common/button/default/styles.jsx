import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: 6px;
  cursor: pointer;

  ${({ $size }) =>
    $size === "large" &&
    css`
      height: 40px;
      padding: 0 16px;
    `}

  ${({ $size }) =>
    $size === "small" &&
    css`
      height: 32px;
      padding: 0 12px;
    `}

  ${({ $variant }) =>
    $variant === "primary" &&
    css`
      background-color: var(--color-primary);
      color: var(--white);

      &:hover {
        background-color: var(--color-primary-hover);
      }

      &:active {
        background-color: var(--color-primary-pressed);
      }

      &:disabled {
        background-color: var(--color-primary-disabled);
      }
    `}

  ${({ $variant }) =>
    $variant === "secondary" &&
    css`
      background-color: var(--color-secondary-bg);
      color: var(--color-secondary);
    `}

  &:disabled {
    cursor: not-allowed;
  }
`;