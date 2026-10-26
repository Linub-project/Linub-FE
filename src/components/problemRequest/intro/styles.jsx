
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;

    width: 100%;
    min-width: 0;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const SectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    h3 {
        color: var(--color-text-primary);
    }

    p {
        color: var(--color-text-label);
    }
`;

export const ProcessGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

export const ProcessItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    background-color: var(--white);

    min-width: 0;
    padding: 20px;

    border: 1px solid var(--color-border);
    border-radius: 8px;

    span {
        color: var(--color-text-primary);
    }

    p {
        color: var(--color-text-default);
        line-height: 1.7;
        word-break: keep-all;
    }
`;

export const ProcessNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;

    border-radius: 8px;
    background-color: var(--color-primary-bg);

    color: var(--color-primary);
    font-size: 13px;
    font-weight: 700;
`;

export const PrecautionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 100%;
    padding: 16px 20px;

    background-color: var(--white);
    border-left: 3px solid var(--color-primary);
    border-radius: 6px;
`;

export const PrecautionItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    color: var(--color-text-default);
    line-height: 1.7;

    span {
        min-width: 0;
        overflow-wrap: anywhere;
        word-break: keep-all;
    }
`;

export const PrecautionNumber = styled.span`
    flex-shrink: 0;
    min-width: 22px;

    color: var(--color-primary);
    font-size: 12px;
    font-weight: 700;
    line-height: 1.7;
`;