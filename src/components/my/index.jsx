import Aggregation from "@/components/my/aggregation";
import Profile from "@/components/my/profile";
import Record from "@/components/my/record";
import * as S from "./styles";

const My = ({user}) => {
    return (
        <S.Container>
            <S.SubContainer>
                <Profile user={user} />
                <Record user={user} />
                <Aggregation user={user} />
            </S.SubContainer>
        </S.Container>
    );
}

export default My;