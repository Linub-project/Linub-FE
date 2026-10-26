import ProblemRequest from "@/components/problemRequest";
import { useAuth } from "@/contexts/authContext";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import * as S from "./styles";

const ProblemRequestPage = () => {
    const {
        isAuthenticated,
        isAuthReady
    } = useAuth();
    
    useEffect(() => {
        window.scrollTo(0, 0);
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = "";
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    if (!isAuthReady) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <S.Container>
            <ProblemRequest />
        </S.Container>
    );
}

export default ProblemRequestPage;