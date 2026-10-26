import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    width: 100%;
`

export const RequestList = styled.div`
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

export const RequestItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    cursor: pointer;
    height: 100%;

    span:hover {
        color: var(--color-primary);
    }
`

export const RequestInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 16px
`

export const JudgeList = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    background-color: var(--color-bg-subtle);
    padding: 12px 16px;
    width: 100%;
`

export const ReasonList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 12px 16px;
    background-color: var(--color-bg-subtle);
    gap: 6px;
`

export const ReasonItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 12px 16px;
    color: ${({$isTrue}) => $isTrue ? "var(--color-primary)" : "var(--color-danger)"};
    background-color: ${({$isTrue}) => $isTrue ? "var(--color-primary-bg)" : "var(--color-danger-bg)"};
    border: ${({$isTrue}) => $isTrue ? "var(--color-primary)" : "var(--color-danger)"};
`