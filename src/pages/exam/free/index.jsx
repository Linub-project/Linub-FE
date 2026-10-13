import ExamFreeHeader from "@/components/examProcess/examFreeHeader";
import problems from "@/constants/linub_notes_100.json";
import { useAuth } from "@/contexts/authContext";
import { Navigate, useLocation } from "react-router-dom";
import * as S from "./styles";

const ExamFreePage = () => {
    const {
        isAuthenticated,
        isAuthReady
    } = useAuth();
    const { state } = useLocation();

    if (!isAuthReady) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // if (!state) {
    //     return <Navigate to="/exam/entry" replace />;
    // }

    return (
        <S.Container>
            <ExamFreeHeader problems={problems.problems} />
            <S.SubContainer>
                asdf
            </S.SubContainer>
        </S.Container>
    );
}

export default ExamFreePage;