import styled, { css, keyframes } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  ${({ $size }) =>
    $size === "large" &&
    css`
      font-size: 16px;
      font-weight: 600;
      padding: 8px 20px;
    `}

  ${({ $size }) =>
    $size === "small" &&
    css`
      font-size: 14px;
      padding: 6px 12px;
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

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.span`
  width: 14px;
  height: 14px;

  border: 2px solid var(--neutral-100);
  border-top-color: transparent;
  border-radius: 50%;

  animation: ${spin} 0.7s linear infinite;
`;