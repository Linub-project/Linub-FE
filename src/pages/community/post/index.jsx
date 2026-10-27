import Footer from "@/components/common/footer";
import CommunityPost from "@/components/communityPost";
import { useAuth } from "@/contexts/authContext";
import { Navigate } from "react-router-dom";
import * as S from "./styles";

const CommunityPostPage = () => {
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
            <CommunityPost />
            <Footer />
        </S.Container>
    );
}

export default CommunityPostPage;