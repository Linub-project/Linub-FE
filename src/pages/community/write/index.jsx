import Footer from "@/components/common/footer";
import PostWrite from "@/components/postWrite";
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
            <PostWrite user={user} />
            <Footer />
        </S.Container>
    );
}

export default CommunityWritePage;