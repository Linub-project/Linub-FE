import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    width: 100%;
`

export const PostList = styled.div`
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