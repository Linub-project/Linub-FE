import FastStart from "@/components/home/dashboard/fastStart";
import PopularDictionary from "@/components/home/dashboard/popularDictionary";
import RecentCommunity from "@/components/home/dashboard/recentCommunity";
import RecentDictionary from "@/components/home/dashboard/recentDictionary";
import Statistic from "@/components/home/dashboard/statistic";
import StudyFlow from "@/components/home/dashboard/studyFlow";
import * as S from "./styles";

const HomeDashboard = () => {
    return (
        <S.Container>
            <S.SubContainer>
                <S.LeftArea>
                    <FastStart />
                    <PopularDictionary />
                    <RecentDictionary />
                    <StudyFlow />
                </S.LeftArea>
                <S.RightArea>
                    <RecentCommunity />
                    <Statistic />
                </S.RightArea>
            </S.SubContainer>
        </S.Container>
    );
}

export default HomeDashboard;