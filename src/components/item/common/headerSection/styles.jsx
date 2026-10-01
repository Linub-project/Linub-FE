import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    background-color: var(--color-bg-subtle);
`

export const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border: 1px solid var(--color-border);
    cursor: pointer;

    span {
        @media (max-width: ${breakpoint.xsmall}) {
            display: none;
        }
    }
`