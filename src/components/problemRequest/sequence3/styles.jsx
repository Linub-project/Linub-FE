import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`

export const OptionListArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
`

export const OptionArea = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
`

export const AnswerList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;
`

export const AnswerItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    max-width: 100%;
    padding: 2px 6px;

    border: 1px solid var(--color-primary-border);
    border-radius: 6px;
    background-color: var(--color-primary-bg);

    span {
        overflow-wrap: anywhere;
        color: var(--color-primary);
    }

    button {
        border: none;
        background: transparent;
        color: var(--color-primary);
        font-size: 16px;
        cursor: pointer;
    }
`