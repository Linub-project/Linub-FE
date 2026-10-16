import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    grid-column: span 12;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    
    @media (max-width: ${breakpoint.medium}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoint.xsmall}) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const AggregationItem = styled.div`
    padding: 16px;
    width: 100%;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
`