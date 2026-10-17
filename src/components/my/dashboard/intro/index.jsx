import * as E from "@/apis/exam";
import * as U from "@/apis/user";
import SessionStatusChip from "@/components/common/cardchip";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import ScoreText from "@/components/common/text/score";
import { INTRO_AGGREGATION } from "@/constants/introAggregation";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { calculate } from "@/utils/scoreCalculator";
import { useEffect, useState } from "react";
import { replace, useNavigate } from "react-router-dom";
import * as S from "./styles";
import Tooltip from "@/components/common/tooltip";

const Intro = () => {
    const navigate = useNavigate();
    const [statistic, setStatistic] = useState({
        solveCnt: 0,
        wrongCnt: 0,
        memoCnt: 0,
        requireCnt: 0,
        problemCnt: 0,
        commentCnt: 0
    });
    const [examSessions, setExamSessions] = useState([]);

    const fetchStatistics = async () => {
        try {
            const response = await U.getMyStatistic();
            setStatistic(response.data);
        } catch (error) {

        }
    }

    const fetchLatestExamSession = async () => {
        try {
            const response = await E.getExamSessions();
            setExamSessions(response.data.content);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchStatistics();
        fetchLatestExamSession();
    }, []);

    return (
        <S.Container>
            <S.AggregationArea>
                {INTRO_AGGREGATION.map(item => (
                    <S.AggregationItem key={item.id}>
                        <span
                            className="typo-heading-1"
                            style={{color: item.color ? item.color : "var(--color-text-primary)"}}
                        >
                            {statistic[item.key] ?? 0}
                        </span>

                        <span
                            className="typo-content-1"
                            style={{color: "var(--color-text-label)"}}
                        >
                            {item.title}
                        </span>
                    </S.AggregationItem>
                ))}
            </S.AggregationArea>
            <S.ContentArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >최근 시험</p>
                {
                    examSessions.length > 0 ? 
                    <S.LatestExamList>
                        {
                            examSessions.map((item, idx) => (
                                <Tooltip text={item.status === "IN_PROGRESS" || "STOPPED" ? "클릭하여 시험 재개" : ""} key={idx}>
                                    <S.LatestExamItem
                                        className="typo-content-1"
                                        style={{
                                            cursor: item.status === "STOPPED" || item.status === "IN_PROGRESS" ? "pointer" : "default"
                                        }}
                                        onClick={() => navigate(`/exam/mock/${item.id}`, {replace: true})}
                                    >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "flex-start",
                                                    gap: "8px"
                                                }}
                                            >
                                                <div>
                                                    <SessionStatusChip status={item.status} />
                                                </div>
                                                <span
                                                    className="typo-title-1"
                                                    style={{color: "var(--color-text-primary)"}}
                                                >{item.exam}</span>
                                                <span
                                                    className="typo-content-1"
                                                    style={{color: "var(--color-text-default)"}}
                                                >{formatDate(item.startAt, DATE_FORMAT.SMART_DATE)}</span>
                                            </div>
                                        <ScoreText status={item.status} score={calculate(item.correctAnswerCnt+item.wrongAnswerCnt, item.correctAnswerCnt)} />
                                    </S.LatestExamItem>
                                </Tooltip>
                            ))
                        }
                    </S.LatestExamList>
                    :
                    <EmptyStateGlobal
                        title="최근 시험 기록이 존재하지 않습니다."
                        description="새로운 시험을 시작해보세요."
                        bg="var(--white)"
                        border="1px solid var(--color-border)"
                    />
                }
                <p
                    className="typo-content-3"
                    style={{color: "var(--color-primary)"}}
                >전체 기록 보기</p>
            </S.ContentArea>
            <S.ContentArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >오늘 다시 풀어볼 문제</p>
            </S.ContentArea>
            <S.ContentArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >심사 진행 중인 내 문제</p>
            </S.ContentArea>
            <S.ContentArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >문제 심사</p>
            </S.ContentArea>
        </S.Container>
    );
}

export default Intro;