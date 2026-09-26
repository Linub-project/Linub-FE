import Footer from "@/components/common/footer";
import Dictionary from "@/components/dictionary";
import * as S from "./styles";

const DictionaryPage = () => {
    return (
        <S.Container>
            <Dictionary />
            <Footer />
        </S.Container>
    );
}

export default DictionaryPage;