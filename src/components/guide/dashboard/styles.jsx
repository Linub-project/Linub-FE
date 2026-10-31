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
    justify-content: space-between;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    gap: 40px;
    padding: 40px 24px;
`