import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
`

export const TableArea = styled.div`
    background-color: var(--white);
    width: 100%;
    border: 1px solid var(--color-border);
    border-radius: 6px;
`

export const Category = styled.td`
    font-size: 14px;
    color: var(--color-text-default);
`

export const Value = styled.td`
    font-size: 14px;
    font-weight: 600;
    color: var(--neutral-600);
    text-align: right;
`