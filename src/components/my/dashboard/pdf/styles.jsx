import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    width: 100%;
`

export const PdfList = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    border: 1px solid var(--color-border);
    
    & > * {
        border-bottom: 1px solid var(--color-border);
    }
    
    :last-child {
        border-bottom: none;
    }
`

export const PdfItem = styled.div`
    display: flex;
    padding: 16px 24px;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    cursor: pointer;
    height: 100%;

    &:hover {
        background-color: var(--color-bg-hover);
    }
`