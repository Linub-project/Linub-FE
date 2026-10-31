import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const ExpArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 12px;

    @media (max-width: ${breakpoint.xsmall}) {
        grid-template-columns: 1fr;
    }
`

export const ExpItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--white);
    border: 1px solid var(--color-border);
    padding: 24px;
    min-width: 80px;
    border-radius: 6px;
`