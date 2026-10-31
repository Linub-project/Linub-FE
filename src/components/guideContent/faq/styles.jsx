
import styled from "styled-components";

export const TargetArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;
`;

export const TargetItem = styled.button`
    padding: 6px 12px;
    border: 1px solid ${({ $isSelected }) =>
        $isSelected ? "var(--color-primary)" : "var(--color-border)"};
    border-radius: 6px;

    background-color: ${({ $isSelected }) =>
        $isSelected ? "var(--color-primary-bg)" : "var(--color-bg)"};

    color: ${({ $isSelected }) =>
        $isSelected ? "var(--color-primary)" : "var(--color-text-default)"};
    cursor: pointer;
    transition: var(--transition-default);
    &:hover {
        border-color: var(--color-primary);
    }
`;

export const SearchArea = styled.div`
    width: 100%;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 12px 16px;

    border: 1px solid var(--color-border);
    border-radius: 6px;
    outline: none;

    background-color: var(--color-bg);
    color: var(--color-text-primary);
    font-size: 14px;

    transition: var(--transition-default);

    &::placeholder {
        color: var(--color-text-label);
    }

    &:focus {
        border-color: var(--color-primary);
    }
`;

export const ResultArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 8px;
    margin-bottom: 4px;
`;

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

export const Question = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    width: 100%;
    padding: 18px 16px;

    border: none;
    background: transparent;

    color: ${({ $open }) =>
        $open ? "var(--color-primary)" : "var(--color-text-primary)"};

    text-align: left;
    cursor: pointer;

    span:first-child {
        min-width: 0;
        word-break: keep-all;
        color: inherit;
    }

    &:hover {
        color: var(--color-primary);
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
    transition: grid-template-rows 0.25s ease;
`;

export const AnswerContent = styled.div`
    min-height: 0;
    overflow: hidden;
`;

export const AnswerInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 16px 18px;

    p {
        color: var(--color-text-default);
        line-height: 1.6;
        word-break: keep-all;
    }
`;

export const LinkList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    padding-top: 4px;
`;

export const EmptyArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: 100%;
    min-height: 200px;
    padding: 24px;

    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);

    text-align: center;

    p:first-child {
        color: var(--color-text-primary);
    }

    p:last-child {
        color: var(--color-text-default);
    }
`;
