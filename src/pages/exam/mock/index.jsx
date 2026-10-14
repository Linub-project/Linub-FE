import { getErrorCode, getErrorMessage } from "@/apis/error";
import * as E from "@/apis/exam";
import Button from "@/components/common/button/default";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import { SkeletonBox } from "@/components/common/skeleton/style";
import WrongComponent from "@/components/common/wrong";
import ExamMockHeader from "@/components/examProcess/examMockHeader";
import ExamMockProblem from "@/components/examProcess/examMockProblem";
import ExamMockSidebar from "@/components/examProcess/examMockSidebar";
import { useAuth } from "@/contexts/authContext";
import { useToast } from "@/contexts/toastContext";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";

const ExamMockPage = () => {
    const {
        isAuthenticated,
        isAuthReady
    } = useAuth();
    const {showToast} = useToast();
    const navigate = useNavigate();
    const { sessionId } = useParams();
    const [loading, setLoading] = useState(true);
    const [examSession, setExamSession] = useState({});
    const [problems, setProblems] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [selectedProblem, setSelectedProblem] = useState(0);
    const [lasting, setLasting] = useState(0);

    const fetchProblems = async () => {
        try {
            const [problemsResponse, sessionResponse] = await Promise.all([
                E.getExamSessionProblems(sessionId),
                E.getExamSession(sessionId)
            ]);

            const fetchedProblems = problemsResponse.data;

            setProblems(fetchedProblems);
            setExamSession(sessionResponse.data);

            const answers = fetchedProblems.reduce((acc, item) => {
                if (item.selectedOptionId != null) {
                    acc[item.id] = item.selectedOptionId;
                }

                return acc;
            }, {});

            setSelectedAnswers(answers);
            setLasting(sessionResponse.data.lastingSecond);
            
        } catch (error) {
            if (getErrorCode(error) === "EXAM_SESSION_02") {
                showToast(getErrorMessage(error));
                navigate("/exam/entry");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!isAuthReady || !isAuthenticated) return;

        fetchProblems();
    }, [sessionId, isAuthReady, isAuthenticated]);

    if (!isAuthReady) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (loading) {
        return <SkeletonBox $h="10px" />
    }

    if(!loading && !problems.length) {
        return <WrongComponent />
    }

    if(examSession.status !== "IN_PROGRESS") {
        const title = examSession.status === "STOPPED" ? "현재 중단된 시험입니다." : "이미 종료된 시험입니다.";
        const description = examSession.status === "STOPPED" ? "마이페이지에서 시험을 재개할 수 있습니다." : "새로운 시험을 시작해주세요.";
        const path = examSession.status === "STOPPED" ? "/mypage" : "/exam/entry";
        const label = examSession.status === "STOPPED" ? "마이페이지로 이동" : "시험 시작하기";

        return <div
                    style={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <EmptyStateGlobal
                        title={title}
                        description={description}
                    />
                    <div
                        style={{
                            display: "flex",
                            gap: "16px",
                            width: "100%",
                            justifyContent: "center"
                        }}
                    >
                        <Button 
                            text={label}
                            size="small"
                            onClick={() => navigate(path)}
                        />
                        <Button 
                            variant={"tertiary"}
                            text="이전 페이지로"
                            onClick={() => navigate(-1)}
                            size="small"
                        />
                    </div>
                </div>
    }

    return (
        <S.Container>
            <ExamMockHeader problems={problems} examSession={examSession} lasting={lasting} setLasting={setLasting} />
            <S.SubContainer>
                <ExamMockProblem
                    examSession={examSession}
                    problems={problems}
                    selectedProblem={selectedProblem}
                    setSelectedProblem={setSelectedProblem}
                    selectedAnswers={selectedAnswers}
                    setSelectedAnswers={setSelectedAnswers}
                />
                <ExamMockSidebar
                    problems={problems}
                    selectedProblem={selectedProblem}
                    setSelectedProblem={setSelectedProblem}
                    selectedAnswers={selectedAnswers}
                />
            </S.SubContainer>
        </S.Container>
    );
}

export default ExamMockPage;