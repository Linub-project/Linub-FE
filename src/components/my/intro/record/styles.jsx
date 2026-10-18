import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    grid-column: span 4;
    background-color: var(--color-bg-subtle);
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;

    @media (max-width: ${breakpoint.medium}) {
        grid-column: span 12;
    }
`;

export const WeekArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const DayItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`

export const MarkItem = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({$ok}) => $ok ? "var(--color-primary)" : "var(--color-border)"};
    border: 3px solid ${({$today}) => $today ? "var(--primary-300)" : "none"};
`
