import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const PreviewModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 12px;
    background: var(--color-bg-subtle);
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: var(--white);
    border: 1px solid var(--color-border);
    margin-bottom: 40px;

    @media (max-width: ${breakpoint.xsmall}) {
        display: none;
    }
`

export const ExplanationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: var(--color-primary-bg);
    border: 1px solid var(--color-primary-border);
`

export const TopArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 16px;
`

export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 24px 16px;
    gap: 16px;
`

export const BottomArea = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 12px 16px;
`

export const OptionArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 4px;
`

export const OptionItem = styled.button`
    display: flex;
    padding: 12px 16px;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    width: 100%;
    gap: 12px;
    cursor: pointer;
    background-color: var(--white);
    border: 1px solid var(--color-border);
    &:hover {
        background-color: var(--color-primary-bg);
    }
    span {
        color: var(--color-text-label);
    }
`