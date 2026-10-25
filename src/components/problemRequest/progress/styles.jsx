import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    align-self: center;
    width: 100%;
    max-width: 600px;
`

export const StepItem = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    &:not(:last-child)::after {
        content: "";

        position: absolute;
        top: 10px;
        left: 50%;

        width: 100%;
        height: 2px;

        background-color: ${({ $completed }) =>
            $completed
                ? "var(--color-primary)"
                : "var(--color-border)"};

        z-index: 0;
    }
`

export const StepCircle = styled.div`
    position: relative;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: ${({ $active }) =>
        $active
            ? "var(--color-primary)"
            : "var(--color-text-disabled)"};
    color: white;
    font-size: 12px;
    font-weight: 600;
`

export const StepLabel = styled.span`
    color: ${({ $active }) =>
        $active
            ? "var(--color-primary)"
            : "var(--color-text-label)"};

    font-size: 12px;
    white-space: nowrap;
    text-align: center;
`