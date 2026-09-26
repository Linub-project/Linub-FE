import styled from "styled-components";

export const OpenContainer = styled.div`
    position: fixed;
    bottom: 100px;
    right: 24px;
    max-width: 320px;
    width: 100%;

    background-color: var(--white);
    border: 1px solid var(--color-border);

    z-index: 100;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 6px;

    box-shadow: var(--shadow-default);
`;

export const CloseContainer = styled.div`
    position: fixed;
    bottom: 100px;
    right: 24px;

    background-color: var(--white);
    border: 1px solid var(--color-border);

    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    padding: 12px 16px;
    border-radius: 50px;

    box-shadow: var(--shadow-default);

    &: hover {
        background-color: var(--color-bg-subtle);
    }
`;

export const QueueItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    width: 100%;

    &: hover {
        background-color: var(--color-bg-subtle);
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-border);
    }
`;