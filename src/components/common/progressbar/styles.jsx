import styled from "styled-components";

export const Progress = styled.progress`
    display: block;
    width: 100%;
    height: ${({ $height }) => $height};

    appearance: none;
    border: none;
    border-radius: 999px;
    overflow: hidden;

    background-color: ${({ $backgroundColor }) => $backgroundColor};

    &::-webkit-progress-bar {
        background-color: ${({ $backgroundColor }) => $backgroundColor};
        border-radius: 999px;
    }

    &::-webkit-progress-value {
        background: ${({ $color }) => $color};
        border-radius: 999px;
        transition: width 0.3s ease;
    }

    /* Firefox */
    &::-moz-progress-bar {
        background: ${({ $color }) => $color};
        border-radius: 999px;
    }

    @media (prefers-reduced-motion: reduce) {
        &::-webkit-progress-value {
            transition: none;
        }
    }
`;
