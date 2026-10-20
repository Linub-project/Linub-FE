import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    grid-column: span 8;
    background-color: var(--white);
    padding: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
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
    flex: 1;
`

export const CertificationItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--color-primary-border);
    background-color: var(--color-primary-bg);
    padding: 4px 12px;
    color: var(--color-primary);
    gap: 8px;
    border-radius: 24px;
`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 12px;

    @media (max-width: ${breakpoint.small}) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`