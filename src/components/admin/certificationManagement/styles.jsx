import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--color-bg-subtle);
    width: 100%;
    gap: 24px;

    @media (max-width: ${breakpoint.medium}) {
        flex-direction: column;
    }
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--color-bg-subtle);
    flex: 1;
    gap: 24px;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    @media (max-width: ${breakpoint.small}) {
        th:nth-child(5),
        td:nth-child(5) {
            display: none;
        }
        th:nth-child(2),
        td:nth-child(2) {
            display: none;
        }
        th:nth-child(3),
        td:nth-child(3) {
            display: none;
        }
    }
`;

export const Id = styled.td`
    color: var(--color-text-default);
`
    
export const Nickname = styled.td`
`

export const Certification = styled.td`
    color: var(--color-text-default);
`

export const Status = styled.td`
    color: var(--color-text-default);
`

export const Date = styled.td`
    color: var(--color-text-default);
`

export const ManagementArea = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    border: 1px solid var(--color-border);
    width: 320px;

    @media (max-width: ${breakpoint.medium}) {
        width: 100%;
    }
`

export const LabelArea = styled.div`
    display: flex;
    justify-content: flex-start;
    font-size: 12px;

    :nth-child(1) {
        width: 100px;
    }

    @media (max-width: ${breakpoint.medium}) {
        flex-direction: column;
    }
`