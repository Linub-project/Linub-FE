import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: inline-flex;

    &:hover > span {
        visibility: visible;
        opacity: 1;
    }
`;

export const TooltipBox = styled.span`
    position: absolute;
    z-index: 1000;

    padding: 6px 8px;

    background-color: var(--color-terminal-bg);
    color: #fff;

    white-space: nowrap;

    visibility: hidden;
    opacity: 0;

    transition: var(--transition-default);

    ${({ $position }) => {
        switch ($position) {
            case "bottom":
                return `
                    top: calc(100% + 6px);
                    left: 50%;
                    transform: translateX(-50%);
                `;

            case "left":
                return `
                    top: 50%;
                    right: calc(100% + 6px);
                    transform: translateY(-50%);
                `;

            case "right":
                return `
                    top: 50%;
                    left: calc(100% + 6px);
                    transform: translateY(-50%);
                `;

            default:
                return `
                    bottom: calc(100% + 6px);
                    left: 50%;
                    transform: translateX(-50%);
                `;
        }
    }}
`;