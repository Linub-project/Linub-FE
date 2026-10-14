import ExamFreeAnswer from "@/components/examProcess/examFreeAnswer";
import ExamFreeHeader from "@/components/examProcess/examFreeHeader";
import ExamFreeProblem from "@/components/examProcess/examFreeProblem";
import ExamFreeSidebar from "@/components/examProcess/examFreeSidebar";
import { useAuth } from "@/contexts/authContext";
import { useExamFree } from "@/contexts/examFreeContext";
import { shuffleArray } from "@/utils/shuffle";
import { useEffect, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
import * as S from "./styles";

const ExamFreePage = () => {
    const {
        isAuthenticated,
        isAuthReady
    } = useAuth();
    const { problems } = useExamFree();
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [selectedProblem, setSelectedProblem] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = "";
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);
    
    if (!isAuthReady) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (problems.length === 0) {
        return <Navigate to="/exam/entry" replace />;
    }

    const shuffledProblems = useMemo(() => {
        return problems.map(problem => ({
            ...problem,
            options: shuffleArray(problem.options)
        }));
    }, [problems]);

    return (
        <S.Container>
            <ExamFreeHeader
                problems={shuffledProblems}
                showAnswer={showAnswer}
                setShowAnswer={setShowAnswer}
            />
            <S.SubContainer>
                <S.SSubContainer>
                    <ExamFreeProblem
                        problems={shuffledProblems}
                        selectedProblem={selectedProblem}
                        setSelectedProblem={setSelectedProblem}
                        selectedAnswers={selectedAnswers}
                        setSelectedAnswers={setSelectedAnswers}
                    />
                    {
                        showAnswer &&
                            <ExamFreeAnswer
                                problems={shuffledProblems}
                                selectedProblem={selectedProblem}
                            />
                    }
                </S.SSubContainer>
                <ExamFreeSidebar
                    problems={shuffledProblems}
                    selectedProblem={selectedProblem}
                    setSelectedProblem={setSelectedProblem}
                    selectedAnswers={selectedAnswers}
                />
            </S.SubContainer>
        </S.Container>
    );
}

export default ExamFreePage;