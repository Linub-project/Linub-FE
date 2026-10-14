import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: var(--color-bg-subtle);
    flex: 1;
`

export const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 1200px;
    padding: 40px 24px;
    flex: 1;
    gap: 32px;

    @media (max-width: ${breakpoint.small}) {
        flex-direction: column;
    }
`