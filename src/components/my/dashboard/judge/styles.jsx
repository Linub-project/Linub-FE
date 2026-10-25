import styled from "styled-components";

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
    width: 100%;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    gap: 16px;

    &:hover {
        background-color: var(--color-bg-hover);
    }
`

export const RequestInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    gap: 8px;
    padding: 12px 16px
`

export const JudgeList = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 12px 16px;
`

