import { useEffect, useState } from "react";
import * as S from "./styles";
import * as A from "@/apis/admin";

const AdminDashboard = ({menu}) => {
    const [stat, setStat] = useState({});

    const fetchDashboardStatistics = async () => {
        try {
            const response = await A.getDashboardStatistics();
            setStat(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchDashboardStatistics();
    }, []);

    return (
        <S.Container>
            <span
                className="typo-heading-3"
                style={{color: "var(--color-text-primary)"}}
            >{menu?.label}</span>
            <S.Section>
                <span
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >요약</span>
                <S.CardArea>
                    <S.Card>
                        <span
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >전체 사용자</span>
                        <span
                            className="typo-heading-2"
                            style={{color: "var(--color-text-primary)"}}
                        >{stat.totalUser}</span>
                    </S.Card>
                </S.CardArea>
            </S.Section>
            <S.Section>
                <span
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >처리 대기</span>
                <S.CardArea>

                </S.CardArea>
            </S.Section>
        </S.Container>
    );
}

export default AdminDashboard;