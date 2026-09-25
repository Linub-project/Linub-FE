import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 12px;
`

export const Tr = styled.tr`
    border-bottom: 1px solid var(--color-border);
`

export const Category = styled.td`
    font-size: 14px;
    color: var(--color-text-default);
    padding: 12px 16px;
    max-width: 180px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
    
export const Value = styled.td`
    font-size: 14px;
    font-weight: 600;
    color: var(--neutral-600);
    padding: 12px 16px;
    max-width: 120px;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`