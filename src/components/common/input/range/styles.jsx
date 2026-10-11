import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`;

export const Range = styled.input`
    width: 100%;
    margin: 0;
    accent-color: var(--primary-500);
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const LabelArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    color: var(--color-text-default);

    @media (max-width: ${breakpoint.xsmall}) {
        display: none;
    }
`;