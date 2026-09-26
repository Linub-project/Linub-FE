import Footer from "@/components/common/footer";
import HomeDashboard from "@/components/home/dashboard";
import HomeIntro from "@/components/home/intro";
import * as S from "./styles";

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