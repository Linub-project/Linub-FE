import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    width: 100%;
    border-radius: 0;
    padding-bottom: 16px;
`

export const CommentList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const CommentItem = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    gap: 16px;

    padding: 16px 24px;

    border-top: 1px solid var(--color-border);
`

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-end;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    width: 100%;
    padding: 16px 24px;
    border-radius: 0;
`