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

export const ScopeArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    @media (max-width: ${breakpoint.xsmall}) {
        flex-direction: column;
    }
`

export const ScopeItem = styled.button`
    flex: 1;
    padding: 12px 16px;
    color: ${({$isSelected}) => $isSelected ? "var(--color-primary)" : "var(--color-text-default)"};
    background-color: ${({$isSelected}) => $isSelected ? "var(--color-primary-bg)" : "var(--white)"};
    border: 1px solid ${({$isSelected}) => $isSelected ? "var(--color-primary-border)" : "var(--color-border)"};
    cursor: pointer;

    &:disabled {
        color: var(--color-text-label);
        background-color: var(--color-bg-subtle);
        border: 1px solid var(--color-border);
        cursor: not-allowed;
    }

    @media (max-width: ${breakpoint.xsmall}) {
        width: 100%;
    }
`

export const SelectArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    width: 100%;
    background-color: var(--white);
    border: 1px solid var(--color-border);
`;

export const ExamArea = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    min-width: 0;
    @media (max-width: ${breakpoint.small}) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const ExamItem = styled.p`
    display: flex;
    align-items: center;
    width: 280px;

    background-color: ${({ $isSelected }) =>
        $isSelected
            ? "var(--color-primary-bg)"
            : "var(--white)"};

    border: 1px solid ${({ $isSelected, $isPartial }) =>
        $isSelected || $isPartial
            ? "var(--color-primary-border)"
            : "var(--color-border)"};

    label {
        display: flex;
        align-items: center;
        gap: 12px;

        width: 100%;
        padding: 12px;
        box-sizing: border-box;
        cursor: pointer;
    }

    label span {
        color: ${({ $isSelected }) =>
            $isSelected
                ? "var(--color-primary)"
                : "var(--color-text-default)"};
    }

    @media (max-width: ${breakpoint.small}) {
        width: 100%;
    }
`;

export const SubjectArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
`;

export const SubjectItem = styled.p`
    display: flex;
    align-items: center;

    label {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
    }

    label span {
        font-size: 12px;
        padding: 4px 0;
        color: ${({ $isSelected }) =>
            $isSelected
                ? "var(--color-primary)"
                : "var(--color-text-default)"};
    }
`;