import Bookmark from "@/components/my/dashboard/bookmark";
import ProblemBookmarkDetail from "@/components/my/dashboard/bookmarkDetail";
import CertificationRequest from "@/components/my/dashboard/certification";
import Comment from "@/components/my/dashboard/comment";
import Intro from "@/components/my/dashboard/intro";
import ProblemJudgeList from "@/components/my/dashboard/judge";
import ProblemJudgeDetail from "@/components/my/dashboard/judgeDetail";
import Memo from "@/components/my/dashboard/memo";
import PdfList from "@/components/my/dashboard/pdf";
import Posts from "@/components/my/dashboard/posts";
import ProblemRequest from "@/components/my/dashboard/request";
import ExamSession from "@/components/my/dashboard/session";
import MyDashboardSidebar from "@/components/my/dashboard/sidebar";
import WrongProblem from "@/components/my/dashboard/wrong";
import { MYPAGE_SIDEBAR } from "@/constants/mypageSidebar";
import { Navigate, useParams } from "react-router-dom";
import * as S from "./styles";

const Dashboard = ({user}) => {
    const { menu = "intro", id } = useParams();
    
    const selectedMenu = MYPAGE_SIDEBAR.find(m => m.path === menu)?.id;

    if(!selectedMenu) {
        return <Navigate to="/mypage" replace />
    }

    const getComponentStrategy = () => {
        if(menu === MYPAGE_SIDEBAR[0].path) {
            return <Intro />
        } else if(menu === MYPAGE_SIDEBAR[1].path) {
            return id ? <ProblemBookmarkDetail /> : <Bookmark />
        } else if(menu === MYPAGE_SIDEBAR[2].path) {
            return <WrongProblem />
        } else if(menu === MYPAGE_SIDEBAR[3].path) {
            return <ExamSession />
        } else if(menu === MYPAGE_SIDEBAR[4].path) {
            return <Memo />
        } else if(menu === MYPAGE_SIDEBAR[5].path) {
            return <ProblemRequest />
        } else if(menu === MYPAGE_SIDEBAR[6].path) {
            return id ? <ProblemJudgeDetail /> : <ProblemJudgeList />
        } else if(menu === MYPAGE_SIDEBAR[7].path) {
            return <CertificationRequest />
        } else if(menu === MYPAGE_SIDEBAR[8].path) {
            return <Posts />
        } else if(menu === MYPAGE_SIDEBAR[9].path) {
            return <Comment />
        } else if(menu === MYPAGE_SIDEBAR[10].path) {
            return <PdfList />
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

export default Dashboard;