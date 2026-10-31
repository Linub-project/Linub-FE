import Explore from "@/components/guide/dashboard/explore";
import Faq from "@/components/guide/dashboard/faq";
import Pathway from "@/components/guide/dashboard/pathway";
import Start from "@/components/guide/dashboard/start";
import * as S from "./styles";

const GuideDashboard = () => {
    return (
        <S.Container>
            <S.SubContainer>
                <Start />
                <Explore />
                <Pathway />
                <Faq />
            </S.SubContainer>
        </S.Container>
    );
}

export default GuideDashboard;