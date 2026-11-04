import Footer from "@/components/common/footer";
import SearchList from "@/components/search";
import * as S from "./styles";

const SearchPage = () => {
    return (
        <S.Container>
            <SearchList />
            <Footer />
        </S.Container>
    );
}

export default SearchPage;