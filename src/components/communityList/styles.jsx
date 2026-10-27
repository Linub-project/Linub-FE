import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--color-bg-subtle);
    border-bottom: 1px solid var(--color-border);
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    width: 100%;
    gap: 24px;
    padding: 40px 24px;
`

export const PostList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
`

export const PostItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
    padding: 12px 16px;
    cursor: pointer;

    &:hover {
        background-color: var(--color-bg-hover);
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-border);
    }
`