import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 12px;
`

export const FaqList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid var(--color-border);
`;

export const FaqItem = styled.div`
    width: 100%;
    border-bottom: 1px solid var(--color-border);
`;

export const Question = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
    padding: 16px 12px;
    cursor: pointer;
    span:first-child {
        min-width: 0;
        word-break: keep-all;
    }
`;

export const Arrow = styled.span`
    flex-shrink: 0;
    font-size: 16px;
    transform: rotate(${({ $open }) => $open ? "45deg" : "0deg"});
    transition: var(--transition-default);
`;

export const AnswerWrapper = styled.div`
    display: grid;
    grid-template-rows: ${({ $open }) => $open ? "1fr" : "0fr"};
    transition: var(--transition-default);
    visibility: ${({ $open }) => $open ? "visible" : "hidden"};
`;

export const AnswerContent = styled.div`
    min-height: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    ${AnswerWrapper}[data-open="true"] & {
        padding-bottom: 18px;
    }
    p {
        color: var(--color-text-default);
        line-height: 1.6;
        word-break: keep-all;
    }
`;

export const LinkList = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 6px;
    padding-bottom: 12px;
`;
