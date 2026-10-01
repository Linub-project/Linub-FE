import Sidebar from "@/components/admin/sidebar";
import { useAuth } from "@/contexts/authContext";
import { Outlet } from "react-router-dom";
import * as S from "./styles";

const AdminLayout = () => {
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

    if (user?.role !== "ADMIN") {
        return <Navigate to="/" replace />;
    }

    return (
        <S.Container>
            <Sidebar />
            <Outlet />
        </S.Container>
    );
}

export default AdminLayout;