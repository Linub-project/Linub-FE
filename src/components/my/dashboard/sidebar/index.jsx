import { MYPAGE_SIDEBAR } from "@/constants/mypageSidebar";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const MyDashboardSidebar = ({user, selectedMenu}) => {
    const navigate = useNavigate();
    const menus = MYPAGE_SIDEBAR.filter(
        m => !m.auth || user.certificated
    );

    return (
        <S.Container>
            {
                menus.map((m, idx) => {
                    const isSelected = selectedMenu === m.id;
                    return (
                        <S.Category key={idx}
                            className="typo-content-1"
                            $isSelected={isSelected}
                            onClick={() => navigate(`/mypage/${m.path}`)}
                        >{m.label}</S.Category>
                    );
                })
            }
        </S.Container>
    );
}

export default MyDashboardSidebar;