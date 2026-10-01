import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 24px;
`

export const TypeArea = styled.div`
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    text-align: center;

    @media (max-width: ${breakpoint.medium}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoint.small}) {
        grid-template-columns: 1fr;
    }
`

export const TypeCard = styled.span`
    padding: 16px 48px;
    cursor: pointer;
    border: ${({ $isSelected }) => $isSelected ? "1px solid var(--color-primary)" : "1px solid var(--color-border)"};
    background-color: ${({ $isSelected }) => $isSelected ? "var(--color-primary)" : "var(--white)"};
    color: ${({ $isSelected }) => $isSelected ? "var(--white)" : "var(--color-text-default)"};
    transition: var(--transition-default);
`

export const Comapre = styled.img`
    opacity: 0;
    visibility: hidden;
    width: 32px;
    border-radius: 6px;

    transition: var(--transition-default);

    &:hover {
        background-color: var(--neutral-100);
    }
`

export const Tr = styled.tr`
    &:hover {
        ${Comapre} {
            opacity: 1;
            visibility: visible;
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    white-space: normal;
`
