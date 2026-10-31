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
    gap: 64px;
    padding: 40px 24px;

    @media (max-width: ${breakpoint.small}) {
        flex-direction: column;
    }
`

export const ContentArea = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 32px;
    background-color: var(--color-bg);
    padding: 40px 24px;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 100%;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const TitleText = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: var(--color-text-primary);
`

export const ContentText = styled.span`
    font-size: 14px;
    color: var(--color-text-default);
    line-height: 1.8;
`

export const Icon = styled.img`
    width: 36px;
    height: 36px;
    padding: 8px;
    background-color: var(--color-primary-bg);
    border-radius: 6px;
`

export const RelationArea = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 8px;
    
    @media (max-width: ${breakpoint.medium}) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const RelationItem = styled.div`
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border: 1px solid var(--color-border);
    border-radius: 6px;
    cursor: pointer;

    &: hover {
        border: 1px solid var(--color-primary);
    }
`