import ExamFreeAnswer from "@/components/examProcess/examFreeAnswer";
import ExamFreeHeader from "@/components/examProcess/examFreeHeader";
import ExamFreeProblem from "@/components/examProcess/examFreeProblem";
import ExamFreeSidebar from "@/components/examProcess/examFreeSidebar";
import { useAuth } from "@/contexts/authContext";
import { useExamFree } from "@/contexts/examFreeContext";
import { useEffect, useState } from "react";
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

    return (
        <S.Container>
            <ExamFreeHeader
                problems={problems} 
                showAnswer={showAnswer}
                setShowAnswer={setShowAnswer}
            />
            <S.SubContainer>
                <S.SSubContainer>
                    <ExamFreeProblem
                        problems={problems}
                        selectedProblem={selectedProblem}
                        setSelectedProblem={setSelectedProblem}
                        selectedAnswers={selectedAnswers}
                        setSelectedAnswers={setSelectedAnswers}
                    />
                    {
                        showAnswer &&
                            <ExamFreeAnswer
                                problems={problems}
                                selectedProblem={selectedProblem}
                            />
                    }
                </S.SSubContainer>
                <ExamFreeSidebar
                    problems={problems}
                    selectedProblem={selectedProblem}
                    setSelectedProblem={setSelectedProblem}
                    selectedAnswers={selectedAnswers}
                />
            </S.SubContainer>
        </S.Container>
    );
}

export default ExamFreePage;