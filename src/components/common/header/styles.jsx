import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    min-width: 440px;
    border-bottom: 1px solid var(--color-border);
    padding: 0 24px;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    cursor: pointer;
`

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`

export const MenuText = styled.div`
    &:hover {
        background-color: var(--color-bg-subtle);
        cursor: pointer;
    }
    
    padding: 8px 12px;
    color: ${({isSelected}) => isSelected ? "var(--color-text-primary)" : "var(--color-text-default)"};
    background-color: ${({isSelected}) => isSelected ? "var(--color-bg-subtle)" : ""};
    transition: all 0.2s ease;
`

export const GuideText = styled.div`
    color: var(--secondary-500);
    background-color: var(--secondary-100);
    padding: 8px 12px;
    cursor: pointer;
    transition: all 0.2s ease;
`

export const SearchArea = styled.div`
    width: 180px;
    height: 30px;
    padding: 8 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: var(--color-bg-subtle);
`

export const SearchInput = styled.input.attrs({
    placeholder: "검색..."
})`
    flex: 1;
    min-width: 0;

    border: none;
    outline: none;
    background: transparent;

    color: var(--neutral-900);

    &::placeholder {
        color: var(--neutral-500);
    }
`;

export const ProfileArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    cursor: pointer;
`
