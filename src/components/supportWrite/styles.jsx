import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--color-bg-subtle);
    border-bottom: 1px solid var(--color-border);
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    width: 100%;
    gap: 40px;
    padding: 40px 24px;
`

export const MainArea = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg);
    padding: 16px 24px;
    border: 1px solid var(--color-border);
    width: 100%;
    gap: 24px;
`

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
`

export const PrecautionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 100%;
    padding: 16px 20px;

    background-color: var(--white);
    border-left: 3px solid var(--color-primary);
    border-radius: 6px;
`;

export const PrecautionItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    color: var(--color-text-default);
    line-height: 1.7;

    span {
        min-width: 0;
        overflow-wrap: anywhere;
        word-break: keep-all;
    }
`;

export const PrecautionNumber = styled.span`
    flex-shrink: 0;
    min-width: 22px;

    color: var(--color-primary);
    font-size: 12px;
    font-weight: 700;
    line-height: 1.7;
`;