import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    background-color: var(--color-bg-subtle);
`

export const ContentArea = styled.section`
    width: 100%;
    color: var(--color-text-default);

    ul {
        padding-left: 0;
        margin-left: 0;
        list-style: none;
    }

    ul > li {
        position: relative;
        padding-left: 14px;
    }

    ul > li::before {
        content: "•";
        position: absolute;
        left: 0;
        top: 0;
    }
`;