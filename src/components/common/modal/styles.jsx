import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--color-bg-modal);
    position: fixed;   
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Subcontainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-center;
    min-height: 30%;
    overflow-y: auto;
    gap: 24px;
`