import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 32px;
    width: 100%;
`

export const AggregationArea = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: 8px;
    
    @media (max-width: ${breakpoint.medium}) {
        grid-template-columns: repeat(3, 2fr);
    }
    
    @media (max-width: ${breakpoint.small}) {
        grid-template-columns: repeat(2, 3fr);
    }
    
    @media (max-width: ${breakpoint.xsmall}) {
        grid-template-columns: repeat(1, 6fr);
    }
`

export const AggregationItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 24px;
    align-items: center;
    background-color: var(--white);
    border: 1px solid var(--color-border);
    gap: 4px;
`

export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: space-between;
    width: 100%;
`

export const LatestExamList = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    border: 1px solid var(--color-border);
    
    & > * {
        border-bottom: 1px solid var(--color-border);
    }
    
    :last-child {
        border-bottom: none;
    }
`

export const LatestExamItem = styled.div`
    display: flex;
    padding: 16px 24px;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${breakpoint.xsmall}) {
        flex-direction: column;
        gap: 12px;
    }

    &:hover {
        background-color: var(--color-bg-hover);
    }
`

export const RecommendProblemList = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    border: 1px solid var(--color-border);
    
    & > * {
        border-bottom: 1px solid var(--color-border);
    }
    
    :last-child {
        border-bottom: none;
    }
`

export const RecommendProblemItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 24px;
    width: 100%;
    gap: 8px;
    cursor: pointer;

    &:hover {
        background-color: var(--color-bg-hover);
    }
`