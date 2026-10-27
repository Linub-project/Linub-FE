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
    gap: 24px;
    padding: 40px 24px;
`

export const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-bottom: none;
    width: 100%;
    padding: 16px 24px;
    border-radius: 0;
`

export const FileArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-top: none;
    width: 100%;
    padding: 16px 24px;
    border-radius: 0;
`