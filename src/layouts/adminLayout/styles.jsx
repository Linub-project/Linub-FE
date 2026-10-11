import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    
    @media (max-width: ${breakpoint.xsmall}) {
        flex-direction: column;
    }
`
