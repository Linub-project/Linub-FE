import styled from "styled-components"

export const TagChip = styled.span`
    text-align: center;
    padding: 4px 10px;
    color: var(--neutral-600);
    background-color: var(--color-bg-subtle);
    border: 1px solid var(--color-border);
    font-size: 12px;
    color: var(--color-text-default);
    white-space: nowrap;
    cursor: pointer;

    &: hover {
        background-color: var(--neutral-100);
    }
`

export const CommandChip = styled.span`

`