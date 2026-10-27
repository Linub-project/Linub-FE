import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    width: 100%;
    padding: 12px 16px;

    border: 1px solid var(--color-border);
    border-radius: 6px;
    background-color: var(--color-bg-subtle);
`;

export const FileInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;

    span:first-child {
        color: var(--color-text-primary);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    span:last-child {
        color: var(--color-text-label);
    }
`;