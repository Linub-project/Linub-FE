import Footer from "@/components/common/footer";
import SupportDashboard from "@/components/support/dashboard";
import SupportIntro from "@/components/support/intro";
import * as S from "./styles";

const SupportIntroPage = () => {
    return (
        <S.Container>
            <SupportIntro />
            <SupportDashboard />
            <Footer />
        </S.Container>
    );
}

export default SupportIntroPage;