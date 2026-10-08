import styled from "styled-components";
import { breakpoint } from "@/styles/breakpoint";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 32px;
`

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
`

export const OptionListArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`

export const OptionArea = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
`

export const ShortArea = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
`

export const SubjectArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    gap: 16px;
`

export const ButtonArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    @media (max-width: ${breakpoint.small}) {
        flex-direction: column;
        :nth-child(1) {
            width: 100%;
        }
        :nth-child(2) {
            width: 100%;
        }
    }
`