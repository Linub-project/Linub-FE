import styled from "styled-components"

export const Chip = styled.span`
    text-align: center;
    padding: 4px 10px;
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

export const TagChip = styled.span`
    text-align: center;
    padding: 2px 6px;
    background-color: var(--color-bg-subtle);
    border: 1px solid var(--color-border);
    font-size: 12px;
    color: var(--color-text-default);
`

export const CommandChip = styled.span`

`

