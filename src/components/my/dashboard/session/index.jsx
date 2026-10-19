import * as E from "@/apis/exam";
import SessionStatusChip from "@/components/common/cardchip";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import Pagination from "@/components/common/pagination";
import ScoreText from "@/components/common/text/score";
import Tooltip from "@/components/common/tooltip";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { calculate } from "@/utils/scoreCalculator";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as S from "./styles";

const ExamSession = () => {
    const [sessions, setSessions] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Math.max(Number(searchParams.get("page") ?? 1) - 1, 0);
    const pageable = {
        page,
        size: 20,
        sort: 'startAt',
        direction: "desc"
    };

    const fetchExamSession = async () => {
        try {
            const response = await E.getExamSessions(pageable);
            setSessions(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchExamSession();
    }, [page]);

    if(!sessions) {
        return <div></div>;
    }

    const handlePageChange = (page) => {
        const params = new URLSearchParams(searchParams);

        if (page === 0) {
            params.delete("page");
        } else {
            params.set("page", String(page + 1));
        }

        setSearchParams(params);
    };

    return (
        <S.Container>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "28px"
                }}
            >
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >시험 기록</p>
            </div>
            {
                sessions?.content?.length > 0 ?
                    <S.ExamSessionList>
                        {
                            sessions.content.map((item) => {
                                return <Tooltip text={item.status === "IN_PROGRESS" || item.status === "STOPPED" ? "클릭하여 시험 재개" : ""} key={item.id}>
                                    <S.ExamSessionItem
                                        className="typo-content-1"
                                        style={{
                                            cursor: item.status === "STOPPED" || item.status === "IN_PROGRESS" ? "pointer" : "default"
                                        }}
                                        onClick={() => {
                                            if(item.status === "COMPLETED" || item.status === "ABORTED") return;
                                            navigate(`/exam/mock/${item.id}`, {replace: true})
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "flex-start",
                                                gap: "8px",
                                                flex: 1
                                            }}
                                        >
                                            <div>
                                                <SessionStatusChip status={item.status} />
                                            </div>
                                            <span
                                                className="typo-title-1"
                                                style={{color: "var(--color-text-primary)"}}
                                            >{item.exam}</span>
                                            <div
                                                className="typo-content-3"
                                                style={{
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    gap: "8px"
                                                }}
                                            >
                                                <span
                                                    style={{color: "var(--color-text-label)"}}
                                                >{formatDate(item.startAt, DATE_FORMAT.KOREAN_DATE_TIME)}</span>
                                                <span
                                                    style={{color: "var(--color-text-label)"}}
                                                >·</span>
                                                <span
                                                    style={{color: "var(--color-text-label)"}}
                                                >{Math.round(item.lastingSecond/60)}분 소요</span>
                                                <span
                                                    style={{color: "var(--color-text-label)"}}
                                                >·</span>
                                                <span
                                                    style={{color: "var(--color-text-label)"}}
                                                >{item.correctAnswerCnt+item.wrongAnswerCnt}문항 </span>
                                                <span
                                                    style={{color: "var(--color-text-label)"}}
                                                >·</span>
                                                <span
                                                    style={{color: "var(--color-text-label)"}}
                                                >정답 {item.correctAnswerCnt}문제</span>
                                            </div>
                                        </div>
                                        <ScoreText status={item.status} score={calculate(item.correctAnswerCnt+item.wrongAnswerCnt, item.correctAnswerCnt)} />
                                    </S.ExamSessionItem>
                                </Tooltip>
                            })
                        }
                    </S.ExamSessionList>
                    :
                    <EmptyStateGlobal
                        title="시험 기록이 존재하지 않습니다."
                        description="새로운 시험을 시작해보세요."
                        minHeight="240px"
                    />
            }
            <Pagination
                page={sessions}
                onChange={handlePageChange}
            />
        </S.Container>
    );
}

export default ExamSession;