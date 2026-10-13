import { useAuth } from "@/contexts/authContext";
import { Navigate } from "react-router-dom";
import * as S from "./styles";

const ExamMockPage = () => {
    const {
        isAuthenticated,
        isAuthReady
    } = useAuth();

    if (!isAuthReady) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <S.Container>
            
        </S.Container>
    );
}

export default ExamMockPage;