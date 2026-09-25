import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 60px;
    border-bottom: 1px solid var(--color-border);
    padding: 0 24px;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    margin-right: 50px;

    transition: var(--transition-media-query);
    @media (max-width: ${breakpoint.small}) {
        margin-right: 15px;
    };
`

export const LogoText = styled.div`
    transition: var(--transition-media-query);
    @media (max-width: ${breakpoint.small}) {
        display: none;
    };
`

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    transition: var(--transition-media-query);
    @media (max-width: ${breakpoint.small}) {
        gap: 0px;
    };
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

    @media (max-width: ${breakpoint.xsmall}) {
        width: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
    };
`

export const SearchArea = styled.div`
    width: 180px;
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