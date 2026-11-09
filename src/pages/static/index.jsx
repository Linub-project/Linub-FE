import Footer from "@/components/common/footer";
import Static from "@/components/static";
import * as S from "./styles";

const StaticPage = () => {
    return (
        <S.Container>
            <Static />
            <Footer />
        </S.Container>
    );
}

export default StaticPage;