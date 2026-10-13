import { getErrorCode, getErrorMessage } from "@/apis/error";
import * as E from "@/apis/exam";
import { SkeletonBox } from "@/components/common/skeleton/style";
import WrongComponent from "@/components/common/wrong";
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

    const fetchProblems = async () => {
        try {
            const [problemsResponse, sessionResponse] = await Promise.all([
                E.getExamSessionProblems(sessionId),
                E.getExamSession(sessionId)
            ]);

            setProblems(problemsResponse.data);
            setExamSession(sessionResponse.data);
            setLoading(false);
        } catch (error) {
            if(getErrorCode(error) === "EXAM_SESSION_02") {
                showToast(getErrorMessage(error));
                navigate("/exam/entry");
            }
            setLoading(false);
        }
    }

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

    return (
        <S.Container>
            <S.SubContainer>
                <S.SSubContainer>
                    
                </S.SSubContainer>
            </S.SubContainer>
        </S.Container>
    );
}

export default ExamMockPage;