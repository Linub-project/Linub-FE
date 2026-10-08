import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 12px;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    @media (max-width: ${breakpoint.small}) {
        td:nth-child(4) {
            display: none;
        }
    }

    @media (max-width: ${breakpoint.xsmall}) {
        td:nth-child(3) {
            display: none;
        }
    }
`;

export const Time = styled.td`
    width: 10%;
    color: var(--neutral-500);
    text-align: right;
`

export const Keyword = styled.td`
    width: 20%;
    color: var(--color-primary);
    text-align: center;
    white-space: preserve;
`

export const Tag = styled.td`
    width: 20%;
    color: var(--color-text-default);
    text-align: center;
`

export const Description = styled.td`
    width: 50%;
    font-size: 14px;
    color: var(--color-text-default);
`