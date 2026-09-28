import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    width: 100%;
    min-height: 60px;
    border-bottom: 1px solid var(--color-border);
    padding: 0 24px;
`

export const SubContainer = styled.div`
    display: "flex";
    align-items: center;
`

export const LeftArea = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    
    transition: var(--transition-media-query);
    @media (max-width: ${breakpoint.small}) {
        gap: 15px;
        width: 100%;
    };
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    cursor: pointer;
`

export const LogoText = styled.div`
    transition: var(--transition-media-query);
    @media (max-width: ${breakpoint.small}) {
        display: none;
    };
`

export const DesktopMenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    transition: var(--transition-media-query);
    @media (max-width: ${breakpoint.xsmall}) {
        display: none;
    };
`

export const MobileMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    transition: var(--transition--media-query);
    @media (min-width: ${breakpoint.xsmall}) {
        display: none;
    }
`

export const MenuText = styled.div`
    &:hover {
        background-color: var(--color-bg-subtle);
        cursor: pointer;
    }
    
    padding: 8px 12px;
    color: ${({$isSelected}) => $isSelected ? "var(--color-text-primary)" : "var(--color-text-default)"};
    background-color: ${({$isSelected}) => $isSelected ? "var(--color-bg-subtle)" : ""};
    white-space: nowrap;
    text-align: left;
`

export const SearchArea = styled.div`
    max-width: 180px;
    width: 100%;
    height: 30px;
    padding: 8 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: var(--color-bg-subtle);

    transition: var(--transition-media-query);
    @media (max-width: ${breakpoint.medium}) {
        display: none;
    };
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

export const Nickname = styled.div`
    transition: var(--transition-media-query);
    @media (max-width: ${breakpoint.small}) {
        display: none;
    };
`