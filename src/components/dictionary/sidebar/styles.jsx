import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    width: 220px;

    @media (max-width: ${breakpoint.xsmall}) {
        width: 100%;
    }
`;

export const CategoryGroup = styled.div`
    width: 100%;
`;

export const Category = styled.div`
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

export const Arrow = styled.img.attrs({
    alt: "icon_for_direction"
})`
    width: 16px;
    transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(90deg)" : "rotate(0deg)"};

    transition: var(--transition-default);
`;

export const SubCategoryArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const SubCategory = styled.div`
    padding: 8px 12px 8px 28px;

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
`;