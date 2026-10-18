import NavigateText from "@/components/common/text/navigate";
import * as S from "./styles";

const StudyFlow = () => {
    return (
        <S.Container>
            <span
                className="typo-title-1"
                style={{
                    color: "var(--color-text-primary)"
                }}
            >학습 흐름</span>
            <div
                style={{
                    border: "1px solid var(--color-border)",
                    padding: "12px 16px"
                }}
            >
                <div 
                    className="typo-content-1"
                    style={{color: "var(--color-text-default)", marginBottom: "6px"}}>
                    시험에서 틀린 문제는 사전으로 다시 학습하고, 배운 명령어는 Linux Lab에서 바로 실행할 수 있습니다. Linub에서는 학습, 확인, 실습이 서로 연결됩니다.
                </div>
                <NavigateText
                    text="학습 가이드 보기"
                    path="/guide"
                />
            </div>
        </S.Container>
    );
}

export default StudyFlow;