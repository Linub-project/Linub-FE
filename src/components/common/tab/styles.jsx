import styled from "styled-components";

export const TabWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    width: 100%;
    border-bottom: 1px solid var(--color-border);

    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const NavigateText = styled.button`
    flex-shrink: 0;

    padding: 14px 20px;
    border: none;
    background-color: transparent;

    color: ${({ $active }) =>
        $active
            ? "var(--color-primary)"
            : "var(--color-text-default)"};

    white-space: nowrap;
    cursor: pointer;

    transition: color var(--transition-default);

    &:hover {
        color: var(--color-primary);
    }
`;

export const Underline = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;

    width: ${({ $width }) => `${$width}px`};
    height: 2px;

    background-color: var(--color-primary);
    border-radius: 2px;

    transform: translateX(${({ $offset }) => `${$offset}px`});

    transition:
        transform var(--transition-default),
        width var(--transition-default);

    pointer-events: none;
`;