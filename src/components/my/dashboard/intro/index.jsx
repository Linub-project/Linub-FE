import * as E from "@/apis/exam";
import * as P from "@/apis/problem";
import * as PR from "@/apis/problemRequest";
import * as U from "@/apis/user";
import SessionStatusChip from "@/components/common/cardchip";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import NavigateText from "@/components/common/text/navigate";
import ScoreText from "@/components/common/text/score";
import Tooltip from "@/components/common/tooltip";
import { INTRO_AGGREGATION } from "@/constants/introAggregation";
import { useProblemReview } from "@/contexts/problemReviewContext";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { calculate } from "@/utils/scoreCalculator";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

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
    const [recommendProblems, setRecommendProblems] = useState([]);
    const { setProblems } = useProblemReview();
    const [loading, setLoading] = useState(false);
    const [requests, setRequests] = useState([]);

    const fetchStatistics = async () => {
        try {
            const response = await U.getMyStatistic();
            setStatistic(response.data);
        } catch (error) {

        }
    }

    const fetchLatestExamSession = async () => {
        try {
            const pageable = {
                page: 0,
                size: 3,
                sort: "startAt",
                direction: "DESC"
            }
            const response = await E.getExamSessions(pageable);
            setExamSessions(response.data.content);
        } catch (error) {

        }
    }

    const fetchRecommendProblem = async () => {
        try {
            const response = await P.getRecommendProblemWrongList(3);
            setRecommendProblems(response.data);
        } catch (error) {

        }
    }

    const fetchProblemRequests = async () => {
        try {
            const pageable = {
                page: 0,
                size: 3,
                sort: "createdAt",
                direction: "DESC"
            };
            const response = await PR.getMyProblemRequest(pageable);
            setRequests(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchStatistics();
        fetchLatestExamSession();
        fetchRecommendProblem();
        fetchProblemRequests();
    }, []);

    const handleWrongProblemSelect = async (id) => {
        if(loading) return;
        try {
            setLoading(true);
            const response = await P.getProblemWrongListReview([id]);
            setProblems(response.data);
            navigate("/problem/review", {replace: true});
        } catch (error) {
            
        }
    }

    const handleResumeExam = async (item) => {
        if(item.status === "COMPLETED" || item.status === "ABORTED") return;
        try {
            const request = {
                status: "IN_PROGRESS"
            };
            await E.updateExamSession(item.id, request);
            navigate(`/exam/mock/${item.id}`, {replace: true})
        } catch (error) {

        }
    }

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
                                <Tooltip text={item.status === "IN_PROGRESS" || item.status === "STOPPED" ? "클릭하여 시험 재개" : ""} key={idx}>
                                    <S.LatestExamItem
                                        className="typo-content-1"
                                        style={{
                                            cursor: item.status === "STOPPED" || item.status === "IN_PROGRESS" ? "pointer" : "default"
                                        }}
                                        onClick={() => handleResumeExam(item)}
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
                                            >시작: {formatDate(item.startAt, DATE_FORMAT.KOREAN_DATE_TIME)}</span>
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
                        minHeight="180px"
                    />
                }
                <NavigateText
                    text="전체 기록 보기"
                    path="/mypage/exam-history"
                />
            </S.ContentArea>
            <S.ContentArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >오늘 다시 풀어볼 문제</p>
                {
                    recommendProblems ? 
                        <S.RecommendProblemList>
                            {
                                recommendProblems.map((item, idx) => (
                                    <S.RecommendProblemItem key={idx}
                                        onClick={() => handleWrongProblemSelect(item.id)}
                                        style={{
                                            cursor: loading ? "not-allowed" : "pointer"
                                        }}
                                    >
                                        <div
                                            className="typo-content-3"
                                            style={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: "8px",
                                                justifyContent: "flex-start"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    color: "var(--color-text-default)",
                                                    backgroundColor: "var(--color-bg-subtle)",
                                                    padding: "2px 6px"
                                                }}
                                            >{item.type === "MULTIPLE" ? "객관식" : "주관식"}</span>
                                            <span
                                                style={{
                                                    color: "var(--color-danger)",
                                                    backgroundColor: "var(--color-danger-bg)",
                                                    padding: "2px 6px"
                                                }}
                                            >{item.wrongCnt}회 틀림</span>
                                        </div>
                                        <span
                                            className="typo-title-1"
                                            style={{color: "var(--color-text-primary)"}}
                                        >Q. {item.question}</span>
                                    </S.RecommendProblemItem>
                                ))
                            }
                        </S.RecommendProblemList>
                        :
                        <EmptyStateGlobal
                            title="추천할 틀린 문제가 없습니다."
                            description="새로운 시험을 시작해 많은 문제들을 풀어보세요."
                            bg="var(--white)"
                            border="1px solid var(--color-border)"
                            minHeight="180px"
                        />
                }
                <NavigateText
                    text="틀린 문제 전체"
                    path="/mypage/wrong-problems"
                />
            </S.ContentArea>
            <S.ContentArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >심사 중인 내 문제</p>
                {
                    requests.length > 0 ?
                        <S.ProblemRequestList>
                            {
                                requests.map((item) => (
                                    <S.ProblemRequestItem key={item.id}>
                                        // 컴포넌트 및 디자인 나중에 구현
                                    </S.ProblemRequestItem>
                                ))
                            }
                        </S.ProblemRequestList>
                        :
                        <EmptyStateGlobal
                            title="심사 중인 문제가 없습니다."
                            description="내가 만든 리눅스 문제를 다른 사람들과 공유해보세요."
                            bg="var(--white)"
                            border="1px solid var(--color-border)"
                            minHeight="180px"
                        />
                }
                <NavigateText
                    text="내가 요청한 문제 전체"
                    path="/mypage/problem-requests"
                />
            </S.ContentArea>
        </S.Container>
    );
}

export default Intro;