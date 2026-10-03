import styled from "styled-components";

export const Select = styled.select`
    width: ${({ $width }) => $width};

    height: ${({ $size }) => {
        switch ($size) {
            case "small":
                return "32px";

            case "large":
                return "44px";

            default:
                return "38px";
        }
    }};

    padding: 0 36px 0 12px;

    box-sizing: border-box;

    border: 1px solid var(--color-border);
    border-radius: 6px;

    background-color: var(--white);

    color: var(--color-text-default);

    cursor: pointer;

    outline: none;

    transition: var(--transition-default);

    &:hover:not(:disabled) {
        border-color: var(--primary-500);
    }

    &:focus {
        border-color: var(--primary-500);
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;