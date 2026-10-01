import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
    0% {
        background-position: -200% 0;
    }

    100% {
        background-position: 200% 0;
    }
`;

export const SkeletonBox = styled.div`
    width: ${({ $w }) => $w || "100%"};
    height: ${({ $h }) => $h || "16px"};

    border-radius: ${({ $r }) => $r || "6px"};

    background: linear-gradient(
        90deg,
        var(--neutral-100) 25%,
        var(--neutral-50) 50%,
        var(--neutral-100) 75%
    );

    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite linear;

    flex-shrink: 0;
`;