import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    padding: 6px 12px;
    border: 1px solid var(--color-primary);
    border-radius: 6px;
    background-color: var(--color-primary-bg);

    & > button {
        flex-shrink: 0;
    }
`;

export const FileInformation = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    flex: 1;
    min-width: 0;

    span {
        color: var(--color-text-primary);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;