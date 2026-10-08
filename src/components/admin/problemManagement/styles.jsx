import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--color-bg-subtle);
    width: 100%;
    gap: 24px;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    @media (max-width: ${breakpoint.medium}) {
        th:nth-child(5),
        td:nth-child(5) {
            display: none;
        }
    }

    @media (max-width: ${breakpoint.small}) {
        th:nth-child(4),
        td:nth-child(4) {
            display: none;
        }
    }

    @media (max-width: ${breakpoint.xsmall}) {
        th:nth-child(3),
        td:nth-child(3) {
            display: none;
        }
        th:nth-child(2),
        td:nth-child(2) {
            display: none;
        }
    }
`;

export const Id = styled.td`
    width: 10%;
    color: var(--color-text-default);
`
    
export const Question = styled.td`
    width: 60%;
    text-align: left;
`

export const Type = styled.td`
    width: 20%;
    color: var(--color-text-default);
`

export const Cnt = styled.td`
    width: 10%;
    color: var(--color-text-default);
`

