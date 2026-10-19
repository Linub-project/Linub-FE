import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    width: 100%;
`

export const BookmarkList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    border: 1px solid var(--color-border);
    
    span {
        align-self: center;
    }
`

export const BookmarkItem = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 12px 16px;
    background-color: var(--white);
    gap: 8px;

    &:hover {
        background-color: var(--color-bg-subtle);
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-border);
    }
`