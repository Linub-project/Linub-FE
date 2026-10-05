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
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                gap: "2px"
                            }}
                        >
                            <span
                                className="typo-heading-2"
                                style={{color: "var(--color-text-primary)"}}
                            >{stat.totalUser}</span>
                            <span
                                className="typo-content-3"
                            >명</span>
                        </div>
                    </S.Card>
                    <S.Card>
                        <span
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >활성 사용자</span>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                gap: "2px"
                            }}
                        >
                            <span
                                className="typo-heading-2"
                                style={{color: "var(--color-text-primary)"}}
                            >{stat.activeUser}</span>
                            <span
                                className="typo-content-3"
                            >명</span>
                        </div>
                    </S.Card>
                    <S.Card>
                        <span
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >휴면 사용자</span>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                gap: "2px"
                            }}
                        >
                            <span
                                className="typo-heading-2"
                                style={{color: "var(--color-text-primary)"}}
                            >{stat.inactiveUser}</span>
                            <span
                                className="typo-content-3"
                            >명</span>
                        </div>
                    </S.Card>
                    <S.Card>
                        <span
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >탈퇴 사용자</span>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                gap: "2px"
                            }}
                        >
                            <span
                                className="typo-heading-2"
                                style={{color: "var(--color-text-primary)"}}
                            >{stat.withdrawnUser}</span>
                            <span
                                className="typo-content-3"
                            >명</span>
                        </div>
                    </S.Card>
                    <S.Card>
                        <span
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >활동 금지 사용자</span>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                gap: "2px"
                            }}
                        >
                            <span
                                className="typo-heading-2"
                                style={{color: "var(--color-text-primary)"}}
                            >{stat.banUser}</span>
                            <span
                                className="typo-content-3"
                            >명</span>
                        </div>
                    </S.Card>
                    <S.Card>
                        <span
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >자격 인증 사용자</span>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                gap: "2px"
                            }}
                        >
                            <span
                                className="typo-heading-2"
                                style={{color: "var(--color-text-primary)"}}
                            >{stat.certifiedUser}</span>
                            <span
                                className="typo-content-3"
                            >명</span>
                        </div>
                    </S.Card>
                </S.CardArea>
            </S.Section>
            <S.Section>
                <span
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >처리 대기</span>
                <S.CardArea>
                    <S.AttentionCard>
                        <span
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >대기 중인 문제 요청</span>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                gap: "2px"
                            }}
                        >
                            <span
                                className="typo-heading-2"
                                style={{color: "var(--color-warning)"}}
                            >000</span>
                            <span
                                className="typo-content-3"
                            >명</span>
                        </div>
                    </S.AttentionCard>
                    <S.AttentionCard>
                        <span
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >대기 중인 자격 인증 요청</span>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                gap: "2px"
                            }}
                        >
                            <span
                                className="typo-heading-2"
                                style={{color: "var(--color-warning)"}}
                            >000</span>
                            <span
                                className="typo-content-3"
                            >명</span>
                        </div>
                    </S.AttentionCard>
                </S.CardArea>
            </S.Section>
        </S.Container>
    );
}

export default AdminDashboard;