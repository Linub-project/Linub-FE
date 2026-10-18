import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    border-radius: 0;
`

export const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    padding: 6px 24px;
    height: 100%;
`

export const LeftArea = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;

    @media (max-width: ${breakpoint.xsmall}) {
        flex-direction: column;
        gap: 6px;
    }
`

export const RightArea = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;

    transition: var(--transition-media-query);
    @media (max-width: ${breakpoint.xsmall}) {
        gap: 6px;
    }
`