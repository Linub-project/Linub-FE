import Footer from "@/components/common/footer";
import { useAuth } from "@/contexts/authContext";
import * as S from "./styles";

const ExamProcessPage = () => {
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
            <Footer />
        </S.Container>
    );
}

export default ExamProcessPage;