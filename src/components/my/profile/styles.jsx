import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    grid-column: span 8;
    background-color: var(--white);
    padding: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    width: 100%;

    background-image:
        linear-gradient(
            to right,
            var(--color-bg-subtle) 1px,
            transparent 1px
        ),
        linear-gradient(
            to bottom,
            var(--color-bg-subtle) 1px,
            transparent 1px
        );

    background-size: 24px 24px;

    @media (max-width: ${breakpoint.small}) {
        grid-column: span 12;
        flex-direction: column;
    }
`;

export const InformationArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`