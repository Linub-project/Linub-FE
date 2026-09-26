import * as S from "./styles";

const Statistic = () => {
    return (
        <S.Container>
            <span
                className="typo-title-1"
                style={{
                    color: "var(--color-text-primary)"
                }}
            >플랫폼 학습 통계</span>
            <S.TableArea>
                <table>
                    <colgroup>
                        <col style={{ width: "60%" }} />
                        <col style={{ width: "40%" }} />
                    </colgroup>
                    <tbody>
                        <tr style={{cursor: "default"}}>
                            <S.Category>등록된 개념</S.Category>
                            <S.Value>123</S.Value>
                        </tr>
                        <tr style={{cursor: "default"}}>
                            <S.Category>등록된 명령어</S.Category>
                            <S.Value>234</S.Value>
                        </tr>
                        <tr style={{cursor: "default"}}>
                            <S.Category>등록된 파일 설명</S.Category>
                            <S.Value>345</S.Value>
                        </tr>
                        <tr style={{cursor: "default"}}>
                            <S.Category>등록된 문제</S.Category>
                            <S.Value>456</S.Value>
                        </tr>
                        <tr style={{cursor: "default"}}>
                            <S.Category>응시 가능한 모의고사</S.Category>
                            <S.Value>4</S.Value>
                        </tr>
                    </tbody>
                </table>
            </S.TableArea>
        </S.Container>
    );
}

export default Statistic;