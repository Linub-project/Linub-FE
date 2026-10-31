import * as PS from "../styles";
import * as S from "./styles";

const RECOMMEND = [
    {
        key: "시험 준비 목표 설정",
        desc: "시험 준비 목표 설정 단계에서 기록과 해설을 확인하며 학습 범위를 조정합니다."
    },
    {
        key: "시험 과목과 범위 확인",
        desc: "시험 과목과 범위 확인 단계에서 기록과 해설을 확인하며 학습 범위를 조정합니다."
    },
    {
        key: "과목별 개념 학습",
        desc: "과목별 개념 학습 단계에서 기록과 해설을 확인하며 학습 범위를 조정합니다."
    },
    {
        key: "관련 명령어 학습",
        desc: "관련 명령어 학습 단계에서 기록과 해설을 확인하며 학습 범위를 조정합니다."
    },
    {
        key: "자유 모드 문제풀이",
        desc: "자유 모드 문제풀이 단계에서 기록과 해설을 확인하며 학습 범위를 조정합니다."
    },
    {
        key: "오답 복습",
        desc: "오답 복습 단계에서 기록과 해설을 확인하며 학습 범위를 조정합니다."
    },
    {
        key: "시험 모드 모의시험",
        desc: "시험 모드 모의시험 단계에서 기록과 해설을 확인하며 학습 범위를 조정합니다."
    },
    {
        key: "마지막 취약 영역 복습",
        desc: "마지막 취약 영역 복습 단계에서 기록과 해설을 확인하며 학습 범위를 조정합니다."
    },
];

const Certification = () => {
    return (
        <PS.ContentContainer>
            <PS.Section>
                <PS.TitleText>Linub으로 준비하는 순서</PS.TitleText>
                <PS.ContentText>공식 시험 규정을 대신하지 않으며, Linub 기능을 활용한 학습 방법을 안내합니다.</PS.ContentText>
                <S.StartArea>
                    {
                        RECOMMEND.map((item, idx) => (
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
            <S.CallOut
                className="typo-content-2"
            >출제 과목, 문항 수, 시험 시간과 합격 기준은 주관 기관의 최신 공식 안내를 확인해 주세요.</S.CallOut>
        </PS.ContentContainer>
    );
}

export default Certification;