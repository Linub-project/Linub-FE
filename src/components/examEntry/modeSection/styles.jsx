import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`

export const ModeArea = styled.div`
    display: flex;
    padding: 3px;
    background-color: var(--white);
`

export const ModeItem = styled.div`
    padding: 8px 20px;
    background-color: ${({$isSelected}) => $isSelected ? "var(--color-primary)" : "var(--white)"};
    color: ${({$isSelected}) => $isSelected ? "var(--white)" : "var(--color-text-default)"};
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
`

export const DescriptionArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
    padding: 16px 20px;
    background-color: var(--white);
    border-left: 3px solid var(--color-primary);
    border-radius: 6px;
`;

export const Description = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--color-text-default);
    line-height: 1.7;
`;

export const DescriptionNumber = styled.span`
    flex-shrink: 0;
    min-width: 22px;
    color: var(--color-primary);
    font-size: 12px;
    font-weight: 700;
    line-height: 1.7;
`;

export const DescriptionTitle = styled.span`
    display: block;
    color: var(--color-text-primary);
    font-weight: 700;
    border-radius: 0;
`;

export const DescriptionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 12px;
`;

export const NoticeArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--color-border);
    color: var(--color-text-default);
    line-height: 1.6;
`;

export const NoticeTitle = styled.span`
    margin-bottom: 4px;
    color: var(--color-text-primary);
    font-weight: 600;
`;