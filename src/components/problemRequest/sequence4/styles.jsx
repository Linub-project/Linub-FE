import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`

export const SubjectArea = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 12px;
    
    @media (max-width: ${breakpoint.xsmall}) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const SubjectItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 6px;
    background-color: ${({ $selected }) => $selected ? "var(--color-primary-bg)" : "var(--white)"};
    padding: 12px 16px;
    border: 1px solid ${({ $selected }) => $selected ? "var(--color-primary)" : "var(--color-border)"};
    cursor: pointer;
`

export const TopicList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;
`

export const TopicItem = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    color: var(--color-text-default);
    word-break: keep-all;

    &::before {
        content: "•";
        color: var(--color-primary);
        flex-shrink: 0;
    }
`