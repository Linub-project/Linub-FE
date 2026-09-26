import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    position: sticky;
    top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 220px;
    background-color: var(--color-bg-subtle);

    @media (max-width: ${breakpoint.small}) {
        display: none;
    }
`

export const Category = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 10px 12px;

    cursor: pointer;

    color: ${({ $isSelected }) =>
        $isSelected
            ? "var(--color-primary)"
            : "var(--color-text-default)"};

    background-color: ${({ $isSelected }) =>
        $isSelected
            ? "var(--color-primary-bg)"
            : "transparent"};
    
    font-weight: ${({ $isSelected }) =>
        $isSelected
            ? "600"
            : ""};

    &:hover {
        background-color: var(--primary-100);
    }

    transition: var(--transition-default);
`;