import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    user-select: none;

    color: var(--color-text-default);

    &:has(input:disabled) {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

export const Radio = styled.input`
    margin: 0;
    cursor: pointer;
    accent-color: var(--color-primary);

    &:disabled {
        cursor: not-allowed;
    }
`;