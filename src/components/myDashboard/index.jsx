import Bookmark from "@/components/myDashboard/bookmark";
import Intro from "@/components/myDashboard/intro";
import MyDashboardSidebar from "@/components/myDashboard/sidebar";
import { MYPAGE_SIDEBAR } from "@/constants/mypageSidebar";
import { Navigate, useParams } from "react-router-dom";
import * as S from "./styles";

const MyDashboard = ({user}) => {
    const { menu = "intro" } = useParams();
    
    const selectedMenu = MYPAGE_SIDEBAR.find(m => m.path === menu)?.id;

    if(!selectedMenu) {
        return <Navigate to="/mypage" replace />
    }

    const getComponentStrategy = () => {
        if(menu === MYPAGE_SIDEBAR[0].path) {
            return <Intro />
        } else if(menu === MYPAGE_SIDEBAR[1].path) {
            return <Bookmark />
        } else if(menu === MYPAGE_SIDEBAR[2].path) {
            return <Bookmark />
        } else if(menu === MYPAGE_SIDEBAR[3].path) {
            return <Bookmark />
        } else if(menu === MYPAGE_SIDEBAR[4].path) {
            return <Bookmark />
        } else if(menu === MYPAGE_SIDEBAR[5].path) {
            return <Bookmark />
        } else if(menu === MYPAGE_SIDEBAR[6].path) {
            return <Bookmark />
        } else if(menu === MYPAGE_SIDEBAR[7].path) {
            return <Bookmark />
        } else if(menu === MYPAGE_SIDEBAR[8].path) {
            return <Bookmark />
        } else if(menu === MYPAGE_SIDEBAR[9].path) {
            return <Bookmark />
        }
    }

    return (
        <S.Container>
            <S.SubContainer>
                <MyDashboardSidebar user={user} selectedMenu={selectedMenu} />
                {getComponentStrategy()}
            </S.SubContainer>
        </S.Container>
    );
}

export default MyDashboard;