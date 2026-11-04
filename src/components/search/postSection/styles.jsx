import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 16px;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
`;

export const DictionaryList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid var(--color-border);
`

export const DictionaryItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 8px;
    padding: 16px 24px;
    background-color: var(--color-bg);
    border-radius: 0;
    cursor: pointer;
    
    &:not(:last-child) {
        border-bottom: 1px solid var(--color-border);
    }

    &:hover {
        background-color: var(--color-bg-hover);
    }
`

export const MoreButton = styled.button`
    align-self: left;
    padding: 8px 16px;
    border: none;
    background-color: transparent;

    color: var(--color-primary);
    font-size: 14px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const LoadingArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 200px;

    color: var(--color-text-default);
    font-size: 14px;
`;