import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    padding: 40px 24px;
`;

export const SubContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1px;

    width: 100%;
    border: 1px solid var(--color-border);
    background-color: var(--color-border);

    > * {
        min-width: 0;
        background-color: var(--color-bg-default);
    }

    @media (max-width: ${breakpoint.medium}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: ${breakpoint.xsmall}) {
        grid-template-columns: 1fr;
    }
`;

export const ProfileArea = styled.div`
    grid-column: span 8;
    background-color: var(--white);
    padding: 16px 24px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: ${breakpoint.medium}) {
        grid-column: span 2;
    }

    @media (max-width: ${breakpoint.xsmall}) {
        grid-column: span 1;
    }
`;

export const RecordArea = styled.div`
    grid-column: span 4;
    background-color: var(--color-bg-subtle);
    padding: 16px 24px;

    @media (max-width: ${breakpoint.medium}) {
        grid-column: span 2;
    }

    @media (max-width: ${breakpoint.xsmall}) {
        grid-column: span 1;
    }
`;

export const AggregationArea = styled.div`
    grid-column: span 3;
    background-color: var(--white);
    padding: 16px;

    @media (max-width: ${breakpoint.medium}) {
        grid-column: span 1;
    }
`;