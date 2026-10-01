import Footer from "@/components/common/footer";
import DictionaryCompare from "@/components/dictionaryCompare";
import { useSearchParams } from "react-router-dom";
import * as S from "./styles";

const DictionaryComparePage = () => {
    const [searchParams] = useSearchParams();

    const leftId = searchParams.get("left");
    const rightId = searchParams.get("right");

    return (
        <S.Container>
            <DictionaryCompare
                leftId={leftId}
                rightId={rightId}
            />

            <Footer />
        </S.Container>
    );
};

export default DictionaryComparePage;