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
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    width: 100%;
    gap: 24px;
    padding: 40px 24px;

    @media (max-width: ${breakpoint.medium}) {
        display: none;
    }
`

export const SupportContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    width: 100%;
    gap: 40px;
    padding: 40px 24px;

    @media (min-width: ${breakpoint.medium}) {
        display: none;
    }
`

export const CompareItem = styled.div`
    flex: 1;
`

export const ComparisonArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    padding: 24px;
    background-color: var(--color-primary-bg);
    border: 1px solid var(--primary-300);
`
