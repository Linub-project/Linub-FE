import Footer from "@/components/common/footer";
import ExamEntry from "@/components/examEntry";
import { useAuth } from "@/contexts/authContext";
import * as S from "./styles";

const ExamEntryPage = () => {
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
            <ExamEntry />
            <Footer />
        </S.Container>
    );
}

export default ExamEntryPage;