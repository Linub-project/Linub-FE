import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    margin: 100px 120px;
    gap: 32px;
    padding: 0 24px;
`

export const SearchArea = styled.div`
    display: flex;
    width: 100%;
    max-width: 600px;
    padding: 8px 16px;
    align-items: center;
    border: 1px solid var(--color-border);
    gap: 8px;
    box-shadow: var(--shadow-big);
`

export const SearchInput = styled.input.attrs({
    placeholder: "명령어, 개념, 파일을 검색해보세요 (예: ls, 파일 권한, /etc/hosts)"
})`
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: var(--color-text-primary);

    &::placeholder {
        color: var(--neutral-500);
    }
`;