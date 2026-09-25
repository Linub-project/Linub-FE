import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--color-bg-subtle);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    gap: 48px;
    padding: 40px 24px;
    background-color: var(--color-bg-subtle);
`