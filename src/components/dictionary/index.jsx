import DictionaryList from "@/components/dictionary/list";
import DictionarySidebar from "@/components/dictionary/sidebar";
import { useParams } from "react-router-dom";
import * as S from "./styles";

const Dictionary = () => {
    const { category = "ARCHIVE" } = useParams();

    return (
        <S.Container>
            <S.SubContainer>
                <DictionarySidebar category={category} />
                <DictionaryList category={category} />
            </S.SubContainer>
        </S.Container>
    );
}

export default Dictionary;