import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    background-color: var(--color-bg-subtle);
`

export const SubcommandArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--white);
`

export const Top = styled.div`
    display: flex;
    width: 100%;
    padding: 12px 16px;
    align-items: flex-start;
    cursor: pointer;
    gap: 12px;
    border: 1px solid var(--color-border);
    border-radius: 6px;
    border-bottom-left-radius: ${({$isOpen}) => $isOpen ? "0" : "6px"};
    border-bottom-right-radius: ${({$isOpen}) => $isOpen ? "0" : "6px"};

    &:hover {
        background-color: var(--color-bg-subtle);
    }
`

export const Bottom = styled.div`
    padding: 16px;
    background-color: var(--color-bg-subtle);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
    border: 1px solid var(--color-border);
    border-top: none;
    border-radius: 6px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    display: ${({$isOpen}) => $isOpen ? "flex" : "none"};
`

export const Arrow = styled.img.attrs({
    alt: "icon_for_direction"
})`
    width: 16px;
    transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(90deg)" : "rotate(0deg)"};

    transition: var(--transition-default);
`;