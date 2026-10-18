import { breakpoint } from "@/styles/breakpoint";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    padding: 40px 24px;
`;

export const SubContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1px;

    width: 100%;
    border: 1px solid var(--color-border);
    background-color: var(--color-border);

    @media (max-width: ${breakpoint.medium}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;
