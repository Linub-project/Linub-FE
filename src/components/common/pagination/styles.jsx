import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 6px;

    width: 100%;
`;

export const PageButton = styled.button`
    min-width: 32px;
    height: 32px;

    padding: 0 8px;

    border: 1px solid
        ${({ $active }) =>
            $active
                ? "var(--color-primary)"
                : "var(--color-border)"};

    background-color:
        ${({ $active }) =>
            $active
                ? "var(--color-primary)"
                : "var(--white)"};

    color:
        ${({ $active }) =>
            $active
                ? "var(--white)"
                : "var(--color-text-default)"};

    cursor: pointer;

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;