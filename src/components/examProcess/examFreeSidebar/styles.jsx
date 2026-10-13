import styled, { css } from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    background-color: var(--white);
    border: 1px solid var(--color-border);
`

export const ProblemArea = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 12px 16px;
    gap: 8px;
`

export const ProblemItem = styled.button`
    width: 36px;
    height: 36px;
    border: none;
    cursor: pointer;
    font-size: 12px;

    ${({ $variant }) =>
        $variant === "unsolved" &&
        css`
        background-color: var(--color-bg-subtle);
        color: var(--color-text-primary);
    `}
    ${({ $variant }) =>
        $variant === "solved" &&
        css`
        background-color: var(--color-primary-bg);
        color: var(--color-primary);

        &:hover {
            background-color: var(--color-primary-hover);
        }
    `}
    ${({ $variant }) =>
        $variant === "selected" &&
        css`
        background-color: var(--color-primary);
        color: var(--white);

        &:hover {
            background-color: var(--color-primary-hover);
        }
    `}
`

export const LabelArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 8px;
    padding: 12px 16px;
`

export const LabelItem = styled.div`
    display: flex;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
`