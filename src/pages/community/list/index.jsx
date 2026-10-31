import Footer from "@/components/common/footer";
import CommunityList from "@/components/communityList";
import { useAuth } from "@/contexts/authContext";
import { Navigate } from "react-router-dom";
import * as S from "./styles";

const CommunityListPage = () => {
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
            <CommunityList />
            <Footer />
        </S.Container>
    );
}

export default CommunityListPage;