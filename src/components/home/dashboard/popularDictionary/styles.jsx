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

    &: hover {
        background-color: var(--color-bg-subtle);
    }
`

export const Index = styled.td`
    color: var(--neutral-600);
    text-align: center;
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