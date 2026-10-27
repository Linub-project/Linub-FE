import Footer from "@/components/common/footer";
import CommunityWrite from "@/components/communityWrite";
import { useAuth } from "@/contexts/authContext";
import { Navigate } from "react-router-dom";
import * as S from "./styles";

const CommunityWritePage = () => {
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
            <CommunityWrite user={user} />
            <Footer />
        </S.Container>
    );
}

export default CommunityWritePage;