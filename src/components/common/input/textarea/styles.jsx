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
  min-height: 36px;

  &:focus {
    border: 1px solid ${({$focusBorder}) => $focusBorder || "var(--color-primary)"};
    box-shadow: ${({$shadow}) => $shadow || "var(--shadow-input)"};
  }

  &::placeholder {
    color: ${({$pc}) => $pc ? $pc : ""};
  }
`;
