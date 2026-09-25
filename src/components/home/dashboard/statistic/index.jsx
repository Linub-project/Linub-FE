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
            <div
                style={{
                    backgroundColor: "var(--white)",
                    maxWidth: "300px",
                    width: "100%",
                    border: "1px solid var(--color-border)",
                    borderRadius: "6px",
                    overflow: "hidden"
                }}
            >
                <table
                    style={{
                        borderCollapse: "collapse",
                        width: "100%"
                    }}
                >
                    <colgroup>
                        <col style={{ width: "60%" }} />
                        <col style={{ width: "40%" }} />
                    </colgroup>
                    <tbody>
                        <S.Tr>
                            <S.Category>등록된 개념</S.Category>
                            <S.Value>123</S.Value>
                        </S.Tr>
                        <S.Tr>
                            <S.Category>등록된 명령어</S.Category>
                            <S.Value>234</S.Value>
                        </S.Tr>
                        <S.Tr>
                            <S.Category>등록된 파일 설명</S.Category>
                            <S.Value>345</S.Value>
                        </S.Tr>
                        <S.Tr>
                            <S.Category>등록된 문제</S.Category>
                            <S.Value>456</S.Value>
                        </S.Tr>
                        <S.Tr style={{borderBottom: "none"}}>
                            <S.Category>응시 가능한 모의고사</S.Category>
                            <S.Value>4</S.Value>
                        </S.Tr>
                    </tbody>
                </table>
            </div>
        </S.Container>
    );
}

export default Statistic;