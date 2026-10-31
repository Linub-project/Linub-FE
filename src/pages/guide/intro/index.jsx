import Footer from "@/components/common/footer";
import GuideDashboard from "@/components/guide/dashboard";
import GuideIntro from "@/components/guide/intro";
import * as S from "./styles";

const Guide = () => {
    return (
        <S.Container>
            <GuideIntro /> 
            <GuideDashboard />
            <Footer />
        </S.Container>
    );
}

export default Guide;