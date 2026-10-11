import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`

export const RangeArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 16px;
    width: 100%;
    background-color: var(--white);
    border: 1px solid var(--color-border);

    @media (max-width: ${breakpoint.xsmall}) {
        flex-direction: column;
    }
`

export const LeftArea = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 6px;

    @media (max-width: ${breakpoint.xsmall}) {
        width: 100%;
    }
`

export const RightArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
`