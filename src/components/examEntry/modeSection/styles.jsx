import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`

export const ModeArea = styled.div`
    display: flex;
    padding: 3px;
    background-color: var(--white);
`

export const ModeItem = styled.div`
    padding: 8px 20px;
    background-color: ${({$isSelected}) => $isSelected ? "var(--color-primary)" : "var(--white)"};
    color: ${({$isSelected}) => $isSelected ? "var(--white)" : "var(--color-text-default)"};
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`