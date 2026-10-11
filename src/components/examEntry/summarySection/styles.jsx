import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 16px;
    background-color: var(--color-primary-bg);
    border: 1px solid var(--color-primary-border);
    gap: 12px;
`

export const TopArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`