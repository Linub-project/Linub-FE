import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: var(--white);
    border: 1px solid var(--color-border);
`

export const TopArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 16px;

    @media (max-width: ${breakpoint.xsmall}) {
        div > div {
            flex-direction: column;
        }
    }
`

export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 24px 16px;
    gap: 16px;
`

export const BottomArea = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    width: 100%;
    padding: 12px 16px;

    @media (max-width: ${breakpoint.small}) {
        grid-template-columns: repeat(2, 2fr);
    }

    @media (max-width: ${breakpoint.xsmall}) {
        grid-template-columns: repeat(1, 4fr);
    }
`

export const BottomItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 24px;
    gap: 12px;
    background-color: var(--color-bg-subtle);
    border: 1px solid var(--color-border);
    align-items: center;
`

export const ValueText = styled.span`
    color: ${({$color}) => $color ? $color : "var(--color-text-primary)"};
`

export const LabelText = styled.span`
    color: var(--color-text-default);
`

export const OptionArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 4px;
`

export const OptionItem = styled.button`
    display: flex;
    padding: 12px 16px;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    width: 100%;
    gap: 12px;
    background-color: var(--white);
    border: 1px solid var(--color-border);
    &:hover {
        background-color: var(--color-primary-bg);
    }
    span {
        color: var(--color-text-default);
    }
`

export const HistoryArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
    padding: 12px 16px;
`

export const HistoryList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;

`

export const HistoryItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
`