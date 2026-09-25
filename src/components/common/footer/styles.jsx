import { breakpoint } from "@/styles/breakpoint";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    margin: 50px 120px 50px 120px;
`

export const MainArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 24px;

    @media (max-width: ${breakpoint.medium}) {
        flex-direction: column;
        gap: 32px;
    }
`

export const IntroductionArea = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    gap: 8px;
`

export const IntroductionText = styled.p`
    color: var(--color-text-default);
`

export const MenuArea = styled.div`
    display: flex;
    gap: 45px;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: ${breakpoint.medium}) {
        width: 100%;
    }
`

export const SubmenuArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    justify-content: flex-start;
`

export const MenuText = styled.span`
    color: var(--neutral-700);
    cursor: pointer;
    
    &:hover {
        color: var(--neutral-900);
    }
`