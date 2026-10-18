import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    width: 100%;
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
    cursor: pointer;
    background-color: var(--white);
    border: 1px solid var(--color-border);
    &:hover {
        background-color: var(--color-primary-bg);
    }
    span {
        color: var(--color-text-default);
    }
`