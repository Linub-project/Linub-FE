import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 32px;
    width: 100%;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    align-items: flex-start;
    padding: 16px 24px;
    width: 100%;
    gap: 8px;
`

export const OptionArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 4px;
`

export const OptionItem = styled.button`
    display: flex;
    padding: 12px 16px;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    width: 100%;
    gap: 12px;
    background-color: var(--white);
    border: 1px solid var(--color-border);
    span {
        color: var(--color-text-default);
    }
`

export const Button = styled.button`
    flex: 1;
    cursor: pointer;
    color: ${({$color}) => $color || "var(--color-text-label)"};
    background-color: ${({$bg}) => $bg || "var(--color-bg)"};
    border: 1px solid ${({$border}) => $border || "var(--color-border)"};
    padding: 12px;
    
`

export const JudgeList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    justify-content: space-between;
    padding: 24px;
`
