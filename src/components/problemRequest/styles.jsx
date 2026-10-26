import styled from "styled-components"
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex: 1;
    background-color: var(--color-bg-subtle);
`
    
export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 800px;
    width: 100%;
    gap: 40px;
    padding: 40px 24px;

    @media (max-width: ${breakpoint.small}) {
        flex-direction: column;
    }
`

export const SubHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    padding: 8px 24px;
`

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    align-items: flex-start;
`

export const LabelText = styled.p`
    font-size: 14px;
    color: var(--color-text-default);
    font-weight: 600;

    ${({ $required }) => $required && `
        &::after {
            content: " *";
            color: var(--color-danger);
        }
    `}
`

export const LabelDescription = styled.p`
    font-size: 14px;
    color: var(--color-text-label);
    font-weight: 300;
`

export const PreviewOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 24px;
    background: rgba(0, 0, 0, 0.6);
`;

export const PreviewModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 100%;
    max-width: 900px;
    max-height: 90vh;
    overflow-y: auto;

    padding: 32px;
    border-radius: 12px;
    background: var(--color-bg-default);

    @media (max-width: 600px) {
        max-width: none;
        max-height: none;
        height: 100%;
        padding: 20px;
    }
`;