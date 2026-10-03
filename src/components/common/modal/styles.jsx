import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--color-bg-modal);
    position: fixed;   
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    index-z: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Subcontainer = styled.div`
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-center;
    max-height: 80%;
    min-height: 30%;
    max-width: 80%;
    padding: 16px 24px;
    overflow-y: auto;
    gap: 24px;
`