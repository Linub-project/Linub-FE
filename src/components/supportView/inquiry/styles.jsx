import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 16px 24px;
    gap: ${({$gap}) => $gap || "8px"};
`

export const MetadataArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`

export const MetadataItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4px;
`