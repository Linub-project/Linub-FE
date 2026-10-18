import Footer from "@/components/common/footer";
import AnswerSection from "@/components/problemReview/answerSection";
import HeaderSection from "@/components/problemReview/headerSection";
import NavigateSection from "@/components/problemReview/navigateSection";
import ProblemSection from "@/components/problemReview/problemSection";
import { useAuth } from "@/contexts/authContext";
import { useProblemReview } from "@/contexts/problemReviewContext";
import { shuffleArray } from "@/utils/shuffle";
import { useEffect, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
import * as S from "./styles";

const ProblemReviewPage = () => {
    const {
        isAuthenticated,
        isAuthReady
    } = useAuth();
    const { problems } = useProblemReview();
    const [selectedProblem, setSelectedProblem] = useState(0);

    const shuffledProblems = useMemo(() => {
        return problems.map(problem => ({
            ...problem,
            options: shuffleArray(problem.problem.options)
        }));
    }, [problems]);

    useEffect(() => {
        window.scrollTo(0, 0);
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

    if(problems.length === 0) {
        return <Navigate to="/mypage" replace />;
    }

    return (
        <S.Container>
            <HeaderSection
                problems={shuffledProblems}
                selectedProblem={selectedProblem}
            />
            <S.SubContainer>
                <S.SSubContainer>
                    <NavigateSection
                        problems={problems}
                        selectedProblem={selectedProblem}
                        setSelectedProblem={setSelectedProblem}
                    />
                    <ProblemSection
                        problems={shuffledProblems}
                        selectedProblem={selectedProblem}
                    />
                    <AnswerSection
                        problems={shuffledProblems}
                        selectedProblem={selectedProblem}
                    />
                </S.SSubContainer>
            </S.SubContainer>
            <Footer />
        </S.Container>
    );
}

export default ProblemReviewPage;