import NavigateText from "@/components/common/text/navigate";
import * as S from "./styles";

const STEPS = [
    {
        key: "개념 이해",
        desc: "사전"
    },
    {
        key: "명령어 학습",
        desc: "명령어 사전"
    },
    {
        key: "직접 실습",
        desc: "Linux Lab"
    },
    {
        key: "문제 풀이",
        desc: "자유 모드"
    },
    {
        key: "오답 복습",
        desc: "오답 관리"
    },
    {
        key: "모의시험",
        desc: "시험 모드"
    },
];

const Pathway = () => {

    return (
        <S.Container>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <span
                    className="typo-heading-2"
                    style={{
                        color: "var(--color-text-primary)",
                        marginBottom: "4px"
                    }}
                >추천 학습 경로</span>
                <span
                    className="typo-content-2"
                    style={{
                        color: "var(--color-text-default)"
                    }}
                >리눅스 학습이 처음이라면 다음 순서를 참고해 보세요.</span>
            </div>
            
            <S.SubContainer>
                {STEPS.map((step, idx) => {
                    return (
                        <S.StepItem
                            key={idx}
                            $completed={true}
                        >
                            <S.StepCircle $active={true}>
                                {idx+1}
                            </S.StepCircle>
                            <span
                                className="typo-title-1"
                                style={{color: "var(--color-text-primary)"}}
                            >{step.key}</span>
                            <span
                                className="typo-content-3"
                                style={{color: "var(--color-text-label)"}}
                            >{step.desc}</span>
                        </S.StepItem>
                    );
                })}
            </S.SubContainer>
            <NavigateText
                text="전체 학습 가이드 보기"
                path="/guide/LEARNING"
            />
        </S.Container>
    );
}

export default Pathway;