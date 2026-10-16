import Footer from "@/components/common/footer";
import My from "@/components/my";
import MyDashboard from "@/components/myDashboard";
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
            <My user={user} />
            <MyDashboard user={user} />
            <Footer />
        </S.Container>
    );
}

export default MyPage;