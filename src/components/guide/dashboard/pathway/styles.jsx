import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 12px;
`

export const SubContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    align-self: center;
    width: 100%;
    background-color: var(--color-bg);
    padding: 40px 24px;
    border: 1px solid var(--color-border);

    @media (max-width: ${breakpoint.small}) {
        grid-template-columns: 1fr;
        gap: 0;
        padding: 24px;
    }
`

export const StepItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    &:not(:last-child)::after {
        content: "";
        position: absolute;
        top: 16px;
        left: 50%;
        width: 100%;
        height: 1px;
        background-color: var(--color-border);
        z-index: 0;
    }

    @media (max-width: ${breakpoint.small}) {
        flex-direction: row;
        align-items: center;
        gap: 16px;
        min-height: 64px;

        &:not(:last-child)::after {
            top: 50%;
            left: 16px;
            width: 1px;
            height: 100%;
        }
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