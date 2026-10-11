import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`

export const ExamArea = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    width: 100%;

    @media (max-width: ${breakpoint.medium}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoint.small}) {
        grid-template-columns: 1fr;
    }
`

export const ExamItem = styled.button`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1;
    height: 100%;
    padding: 20px;
    border: 1px solid ${({$isSelected}) => $isSelected ? "var(--color-primary-border)" : "var(--color-border)"};
    background-color: ${({$isSelected}) => $isSelected ? "var(--color-primary-bg)" : "var(--white)"};
    cursor: pointer;

    &:hover {

    }

    &:disabled {
        background-color: var(--color-bg-subtle);
        color: var(--color-text-lable);
    }
`