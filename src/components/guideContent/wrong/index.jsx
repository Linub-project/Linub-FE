import * as PS from "../styles";
import * as S from "./styles";

const STEP = [
    {
        key: "문제풀이",
        desc: "시험 또는 자유 모드에서 문제를 풉니다."
    },
    {
        key: "채점 결과 확인",
        desc: "점수보다 틀린 문제와 선택한 답을 확인합니다."
    },
    {
        key: "틀린 문제 확인",
        desc: "반복해서 틀린 문제는 오답 횟수도 함께 살펴봅니다."
    },
    {
        key: "오답 메모 작성",
        desc: "틀린 이유와 기억할 내용을 기록합니다."
    },
    {
        key: "관련 개념 검색",
        desc: "사전에서 문제와 연결된 개념과 명령어를 확인합니다."
    },
    {
        key: "일정 시간 후 다시 풀기",
        desc: "간격을 두고 같은 문제에 다시 도전합니다."
    },
    {
        key: "PDF로 집중 복습",
        desc: "필요하면 오답 문제집을 만들어 오프라인에서 복습합니다."
    },
];

const Wrong = () => {
    return (
        <PS.ContentContainer>
            <PS.Section>
                <PS.TitleText>오답 학습 7단계</PS.TitleText>
                <S.StartArea>
                    {
                        STEP.map((item, idx) => (
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
        </PS.ContentContainer>
    );
}

export default Wrong;