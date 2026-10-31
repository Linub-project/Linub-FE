import * as PS from "../styles";
import * as S from "./styles";

const CYCLE = [
    {
        key: "개념 학습",
        desc: "원리와 용어를 이해합니다."
    },
    {
        key: "명령어 이해",
        desc: "옵션과 인수의 역할을 확인합니다."
    },
    {
        key: "직접 실습",
        desc: "명령어를 바꾸어 실행하는 단계입니다. Linux Lab은 준비 중입니다."
    },
    {
        key: "문제풀이",
        desc: "자유 모드로 이해도를 확인합니다."
    },
    {
        key: "오답 분석",
        desc: "틀린 이유와 관련 개념을 기록합니다."
    },
    {
        key: "반복 학습",
        desc: "간격을 두고 다시 풀어봅니다."
    },
];

const Study = () => {
    return (
        <PS.ContentContainer>
            <PS.Section>
                <PS.TitleText>효과적인 학습 사이클</PS.TitleText>
                <S.StartArea>
                    {
                        CYCLE.map((item, idx) => (
                            <S.StepItem key={idx}>
                                <S.StepCircle
                                    className="terminal typo-content-3"
                                >{String(idx + 1).padStart(2, "0")}</S.StepCircle>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "12px",
                                        padding: "16px 24px",
                                        border: "1px solid var(--color-border)",
                                        flex: 1
                                    }}
                                >
                                    <p
                                        className="typo-title-1"
                                        style={{color: "var(--color-text-primary)"}}
                                    >{item.key}</p>
                                    <p
                                        className="typo-content-2"
                                        style={{color: "var(--color-text-default)"}}
                                    >{item.desc}</p>
                                </div>
                            </S.StepItem>
                        ))
                    }
                </S.StartArea>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>추천 학습 루틴</PS.TitleText>
                <table>
                    <colgroup>
                        <col width="60%" />
                        <col width="20%" />
                        <col width="20%" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th style={{textAlign: "left"}}>학습 활동</th>
                            <th style={{textAlign: "right"}}>총 30분</th>
                            <th style={{textAlign: "right"}}>총 60분</th>
                        </tr>
                        <tr>
                            <S.Td>개념 학습</S.Td>
                            <S.Td>10분</S.Td>
                            <S.Td>15분</S.Td>
                        </tr>
                        <tr>
                            <S.Td>명령어 실습</S.Td>
                            <S.Td>10분</S.Td>
                            <S.Td>20분</S.Td>
                        </tr>
                        <tr>
                            <S.Td>문제풀이</S.Td>
                            <S.Td>5분</S.Td>
                            <S.Td>15분</S.Td>
                        </tr>
                        <tr>
                            <S.Td>오답 복습</S.Td>
                            <S.Td>5분</S.Td>
                            <S.Td>10분</S.Td>
                        </tr>
                    </tbody>
                </table>
                <p
                    className="typo-content-3"
                    style={{color: "var(--color-text-label)"}}
                >학습 시간은 자신의 상황과 집중도에 맞게 조정하는 예시입니다.</p>
            </PS.Section>
        </PS.ContentContainer>
    );
}

export default Study;