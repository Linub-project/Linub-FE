import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    padding: 16px 24px;
    gap: 48px;

    @media (max-width: ${breakpoint.xsmall}) {
        gap: 24px;
    }
`