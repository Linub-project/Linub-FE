import Footer from "@/components/common/footer";
import Intro from "@/components/my/intro";
import Dashboard from "@/components/my/dashboard";
import { useAuth } from "@/contexts/authContext";
import { Navigate } from "react-router-dom";
import * as S from "./styles";

const MyPage = () => {
    const {
        user,
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
            <Intro user={user} />
            <Dashboard user={user} />
            <Footer />
        </S.Container>
    );
}

export default MyPage;