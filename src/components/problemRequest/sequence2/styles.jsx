import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`

export const QuestionArea = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-border);
    width: 100%;
`

export const RefArea = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 24px;
`

export const ImageArea = styled.div`
    display: flex;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 16px;

    border-top: 1px solid var(--color-border);
    background-color: var(--color-bg-subtle);
`

export const OptionListArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
`

export const OptionArea = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
`

export const ShortArea = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
`