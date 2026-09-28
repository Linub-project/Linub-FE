import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--color-bg-subtle);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
`

export const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    gap: 30px;
    padding: 40px 24px;

    @media (max-width: ${breakpoint.xsmall}) {
        flex-direction: column;
    }
`

export const LeftArea = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 48px;
`

export const RightArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 48px;

    @media (max-width: ${breakpoint.xsmall}) {
        width: 100%;
    }
`