import * as S from "./styles";

const My = ({user}) => {
    return (
        <S.Container>
            <S.SubContainer>
                <S.ProfileArea />
                <S.RecordArea />

                <S.AggregationArea />
                <S.AggregationArea />
                <S.AggregationArea />
                <S.AggregationArea />
            </S.SubContainer>
        </S.Container>
    );
}

export default My;