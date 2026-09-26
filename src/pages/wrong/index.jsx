import Footer from "@/components/common/footer";
import WrongComponent from "@/components/common/wrong";
import * as S from "./styles";

const WrongPage = () => {
    return (
        <S.Container>
            <WrongComponent />
            <Footer />
        </S.Container>
    );
}

export default WrongPage;