import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 220px;
    height: 100vh;

    background-color: var(--white);
    border-right: 1px solid var(--color-border);

    box-sizing: border-box;
    overflow-y: auto;
`;

export const MenuArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Menu = styled.div`
    &:hover {
        background-color: var(--primary-100);
        cursor: pointer;
    }
    
    padding: 12px 16px;
    color: ${({$isSelected}) => $isSelected ? "var(--color-primary)" : "var(--color-text-default)"};
    background-color: ${({$isSelected}) => $isSelected ? "var(--color-primary-bg)" : ""};
    border-right: ${({$isSelected}) => $isSelected ? "2px solid var(--color-primary)" : ""};
    border-radius: 0;
    white-space: nowrap;
    text-align: left;
`

export const BackButton = styled.div`
    display: flex;
    padding: 12px 16px;
    align-items: center;
    justify-content: flex-start;
    color: var(--color-text-default);
    cursor: pointer;

    &:hover {
        background-color: var(--color-bg-subtle);
    }
`