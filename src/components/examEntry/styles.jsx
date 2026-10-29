import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--color-bg-subtle);
    border-bottom: 1px solid var(--color-border);
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    width: 100%;
    gap: 48px;
    padding: 40px 24px;

    @media (max-width: ${breakpoint.small}) {
        flex-direction: column;
    }
`

export const DisableSummary = styled.span`
    color: var(--color-text-label);
    text-align: center;
    background-color: #F2F3FF;
    width: 100%;
    padding: 25px 12px;
    cursor: not-allowed;
`

export const BottomArea = styled.div`
    display: flex;
    width: 100%;
    gap: 16px;
    justify-content: space-between;

    @media (max-width: ${breakpoint.small}) {
        flex-direction: column;
    }
`