import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    margin-left: 220px;
    width: calc(100% - 220px);
    min-width: 0;
    min-height: 100vh;

    padding: 40px 24px 200px 24px;

    background-color: var(--color-bg-subtle);
    @media (max-width: ${breakpoint.xsmall}) {
        width: 100%;
        margin: 0;
    }
`;