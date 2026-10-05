import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--color-bg-subtle);
    width: 100%;
    gap: 24px;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
`

export const CardArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    width: 100%;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    flex: 1;
    min-width: 180px;
    padding: 16px;
    border: 1px solid var(--color-border);
    gap: 20px;
`

export const AttentionCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    flex: 1;
    min-width: 200px;
    padding: 16px;
    border: 1px solid var(--color-warning);
    gap: 20px;
`