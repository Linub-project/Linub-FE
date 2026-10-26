import Aggregation from "@/components/my/intro/aggregation";
import Profile from "@/components/my/intro/profile";
import Record from "@/components/my/intro/record";
import * as S from "./styles";

const Intro = ({user}) => {
    return (
        <S.Container>
            <S.SubContainer>
                <Profile user={user} />
                <Record />
                <Aggregation />
            </S.SubContainer>
        </S.Container>
    );
}

export default Intro;