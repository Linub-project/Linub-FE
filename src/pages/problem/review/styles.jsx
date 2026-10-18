import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: var(--color-bg-subtle);
`
    
export const SSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    background-color: var(--color-bg-subtle);
    padding: 40px 24px;
    border-bottom: 1px solid var(--color-border);
    gap: 32px;
    
    @media (max-width: ${breakpoint.small}) {
        flex-direction: column;
    }
`