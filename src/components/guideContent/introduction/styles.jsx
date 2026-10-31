import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const FlowArea = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    width: 100%;
    gap: 40px;

    @media (max-width: ${breakpoint.xsmall}) {
        grid-template-columns: 1fr;
    }
`;

export const FlowItem = styled.div`
    position: relative;
    padding: 12px 6px;
    border: 1px solid var(--color-border);
    font-size: 14px;
    color: var(--color-text-default);
    text-align: center;

    &:not(:last-child)::after {
        content: "→";
        position: absolute;
        top: 50%;
        left: calc(100% + 20px);
        transform: translate(-50%, -50%);
        color: var(--color-text-default);
        font-size: 12px;
        z-index: 1;
    }

    @media (max-width: ${breakpoint.xsmall}) {
        &:not(:last-child)::after {
            content: "↓";
            top: calc(100% + 20px);
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;

export const FeatureArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 16px;
`

export const FeatureItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--white);
    border: 1px solid var(--color-border);
    padding: 24px;
    min-width: 80px;
    border-radius: 6px;
`

export const RecommendArea = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
`

export const RecommendItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 12px 0;
    font-size: 14px;
    &:not(:last-child) {
        border-bottom: 1px solid var(--neutral-50);
    }
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