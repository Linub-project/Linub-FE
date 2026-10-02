import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 6px;
  padding: 10px 12px;
  border: 1px solid var(${({$border}) => $border || "--color-border"});
  box-shadow: var(--shadow-default);
  resize: vertical;
  outline: none;
  height: ${({$h}) => $h};

  &:focus {
    border: 1px solid var(--color-primary);
    box-shadow: var(--shadow-input);
  }
`;
