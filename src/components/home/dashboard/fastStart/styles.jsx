import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 12px;
`

export const MenuArea = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    width: 100%;

    @media (max-width: ${breakpoint.medium}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoint.small}) {
        grid-template-columns: 1fr;
    }
`;

export const MenuChip = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
    background-color: var(--white);
    padding: 16px;
    min-width: 80px;
    border-radius: 6px;

    &: hover {
        background-color: var(--color-bg-subtle);
    }
`;