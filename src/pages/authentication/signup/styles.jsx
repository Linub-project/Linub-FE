import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    align-items: center;
    width: 380px;
`;

export const HeaderArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
`

export const InputArea = styled.div`
    width: 100%;
    background-color: var(--white);
    border: 1px solid var(--color-border);
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const LabelArea = styled.div`
    height: 24px;
    width: 100%;
    align-text: left;
`
