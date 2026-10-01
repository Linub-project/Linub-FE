import AdminCertificationManagement from "@/components/admin/certificationManagement";
import AdminDashboard from "@/components/admin/dashboard";
import AdminDictionaryManagement from "@/components/admin/dictionaryManagement";
import AddCommand from "@/components/admin/dictionaryManagement/addCommand";
import AddConcept from "@/components/admin/dictionaryManagement/addConcept";
import AddFile from "@/components/admin/dictionaryManagement/addFile";
import AdminProblemManagement from "@/components/admin/problemManagement";
import AdminStatisticManagement from "@/components/admin/statisticManagement";
import AdminUserManagement from "@/components/admin/userManagement";
import WrongComponent from "@/components/common/wrong";
import { AMDIN_SIDEBAR } from "@/constants/adminSidebar";
import { useParams } from "react-router-dom";
import * as S from "./styles";

const AdminPage = () => {
    const { category, action } = useParams();

    const currentPath = location.pathname.split("/").pop();
    
    const currentMenu = AMDIN_SIDEBAR.find(
        (menu) => menu.path === currentPath
    );

    const getComponentStrategy = () => {
        if (category === "dashboard") {
            return <AdminDashboard menu={currentMenu} />;
        }
        if (category === "user") {
            return <AdminUserManagement menu={currentMenu} />;
        }
        if (category === "dictionary") {
            if (action === "addConcept") {
                return <AddConcept menu={currentMenu} />;
            }

            if (action === "addCommand") {
                return <AddCommand menu={currentMenu} />;
            }

            if (action === "addFile") {
                return <AddFile menu={currentMenu} />;
            }

            return <AdminDictionaryManagement menu={currentMenu} />;
        }
        if (category === "problem") {
            return <AdminProblemManagement menu={currentMenu} />;
        }
        if (category === "certification") {
            return <AdminCertificationManagement menu={currentMenu} />;
        }
        if (category === "statistic") {
            return <AdminStatisticManagement menu={currentMenu} />;
        }
        return <WrongComponent />;
    };

    return (
        <S.Container>
            {getComponentStrategy()}
        </S.Container>
    );
}

export default AdminPage;