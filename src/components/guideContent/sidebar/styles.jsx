import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    width: 220px;
    gap: 12px;

    @media (max-width: ${breakpoint.small}) {
        width: 100%;
    }
`;

export const CategoryGroup = styled.div`
    width: 100%;
`;

export const Label = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 12px;
    color: var(--color-text-label);
`;

export const SubCategoryArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const SubCategory = styled.div`
    padding: 8px 12px;
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
        background-color: var(--color-primary-bg);
    }
`;