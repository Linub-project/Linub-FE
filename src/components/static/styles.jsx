import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--color-bg-subtle);
    border-bottom: 1px solid var(--color-border);
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    width: 100%;
    gap: 24px;
    padding: 40px 24px;
`

export const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: var(--color-text-primary);
    line-height: 1.5;

    @media (max-width: ${breakpoint.xsmall}) {
        font-size: 18px;
    }
`;

export const SubTitle = styled.p`
    margin-top: 18px;
    font-size: 18px;
    font-weight: 600;
    color: var(--color-text-primary);
    line-height: 1.5;

    @media (max-width: ${breakpoint.xsmall}) {
        font-size: 14px;
    }
`;

export const Content = styled.p`
    margin-top: 8px;
    font-size: 14px;
    color: var(--color-text-default);
    line-height: 1.6;

    @media (max-width: ${breakpoint.xsmall}) {
        font-size: 12px;
    }
`;

export const Table = styled.table`
    margin: 16px 0;
`

export const Th = styled.th`
    white-space: normal;
    border-bottom: 1px solid var(--color-border);

    @media (max-width: ${breakpoint.xsmall}) {
        font-size: 12px;
        padding: 6px;
    }
`

export const Tr = styled.tr`
    cursor: default;
    &:hover {
        background-color: var(--color-bg);
    }
`

export const Td = styled.td`
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    overflow-wrap: anywhere;
    text-align: ${({$align}) => $align || "center"};
    line-height: 1.6;
    color: var(--color-text-primary);

    @media (max-width: ${breakpoint.xsmall}) {
        font-size: 12px;
        padding: 6px;
    }
`

export const Ul = styled.ul`
    margin: 8px 0;
    padding: 0;
    list-style: none;
`;

export const Ol = styled.ol`
    margin: 8px 0;
    padding-left: 20px;
    list-style-position: outside;

    @media (max-width: ${breakpoint.xsmall}) {
        padding-left: 16px;
    }
`;

export const Uli = styled.li`
    position: relative;
    padding-left: 20px;
    color: var(--color-text-default);
    font-size: 14px;
    line-height: 1.6;
    list-style-type: none;

    &::before {
        content: "·";
        position: absolute;
        left: 4px;
    }

    @media (max-width: ${breakpoint.xsmall}) {
        padding-left: 16px;
        font-size: 12px;

        &::before {
            left: 4px;
        }
    }
`;

export const Oli = styled.li`
    padding-left: 4px;
    color: var(--color-text-default);
    font-size: 14px;
    line-height: 1.6;

    &::marker {
        color: var(--color-text-default);
        font-size: 14px;
    }

    @media (max-width: ${breakpoint.xsmall}) {
        font-size: 12px;

        &::marker {
            font-size: 12px;
        }
    }
`;

export const Link = styled.a`
    text-decoration: underline;
`