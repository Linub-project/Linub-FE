import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const ModeArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 12px;

    @media (max-width: ${breakpoint.medium}) {
        grid-template-columns: 1fr;
    }
`

export const ModeItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--white);
    border: 1px solid var(--color-border);
    padding: 24px;
    min-width: 80px;
    border-radius: 6px;
`

export const StartArea = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-self: center;
    width: 100%;
    gap: 32px;
`

export const StepItem = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    min-height: 64px;

    &:not(:last-child)::after {
        content: "";
        position: absolute;
        left: 16px;
        width: 1px;
        height: calc(100% + 32px);
        background-color: var(--color-border);
    }
`

export const StepCircle = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: white;
`

export const Td = styled.td`
    white-space: normal;
`