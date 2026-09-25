import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 12px;
`

export const Tr = styled.tr`
    border-bottom: 1px solid var(--color-border);
    cursor: pointer;

    td {
        padding: 12px 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &: hover {
        background-color: var(--color-bg-subtle);
    }
`

export const Time = styled.td`
    color: var(--neutral-500);
    text-align: right;
`

export const Keyword = styled.td`
    color: var(--color-primary);
    font-family: "JetBrains Mono";
    text-align: center;
`

export const Tag = styled.td`
    color: var(--color-text-default);
    text-align: center;
`

export const Description = styled.td`
    font-size: 14px;
    color: var(--color-text-default);

    @media (max-width: ${breakpoint.medium}) {
        display: none;
    }
`