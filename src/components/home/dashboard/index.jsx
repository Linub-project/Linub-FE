import FastStart from "@/components/home/dashboard/fastStart";
import Statistic from "@/components/home/dashboard/statistic";
import PopularDictionary from "@/components/home/dashboard/popularDictionary";
import RecentDictionary from "@/components/home/dashboard/recentDictionary";
import * as S from "./styles";

const HomeDashboard = () => {
    return (
        <S.Container>
            <S.SubContainer>
                <S.LeftArea>
                    <FastStart />
                    <PopularDictionary />
                    <RecentDictionary />
                </S.LeftArea>
                <S.RightArea>
                    <Statistic />
                </S.RightArea>
            </S.SubContainer>
        </S.Container>
    );
}

export default HomeDashboard;