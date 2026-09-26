import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    left: 50%;
    bottom: 32px;
    transform: translateX(-50%);

    padding: 12px 20px;

    background-color: var(--neutral-800);
    border-radius: 6px;

    z-index: 1000;
    cursor: pointer;

    span {
        color: var(--white);
    }
`;