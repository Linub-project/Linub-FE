import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`

export const ChecklistArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--white);
    border: 1px solid var(--color-border);
`

export const ChecklistList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    padding: 12px 16px;
    align-items: center;
`

export const ChecklistItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 24px;
`

export const NoticeArea = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: var(--color-warning-bg);
    border-radius: 0 8px 8px 0;
    width: 100%;

    span {
        color: var(--yellow-900);
    }

    p {
        color: var(--yellow-900);
        word-break: keep-all;
    }
`;

export const LabelTitle = styled.span`
    font-size: 12px;
    color: var(--color-text-default);
    white-space: nowrap;
`

export const LabelValue = styled.span`
    font-size: 12px;
    color: ${({$color}) => $color ? `var(${$color})` : "var(--color-text-default)"};
    text-align: right;
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`