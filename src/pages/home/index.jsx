import Footer from "@/components/common/footer";
import * as S from "./styles";
import HomeIntro from "@/components/home/intro";
import HomeDashboard from "@/components/home/dashboard";

const HomePage = () => {
    return (
        <S.Container>
            <HomeIntro />
            <HomeDashboard />
            <Footer />
        </S.Container>
    );
}

export default HomePage;