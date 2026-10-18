import Hr from "@/components/common/layout/hr";
import * as S from "./styles";

const AnswerSection = ({
    problems,
    selectedProblem
}) => {
    const problem = problems[selectedProblem];

    const correctOptionIndex = problem.problem.options.findIndex(
        option => option.id === problem.problem.answer?.answerId
    );

    const correctOptionNumber = correctOptionIndex + 1;

    return (
        <S.Container>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "12px 16px",
                    gap: "6px"
                }}
            >
                <span className="typo-title-1"
                    style={{
                        color: "var(--color-primary)"
                    }}
                >정답</span>
                <span className="typo-content-1" style={{color: "var(--color-text-primary)"}}>
                    {correctOptionIndex >= 0
                        ? `${correctOptionNumber}번`
                        : "정답 정보 없음"}
                </span>
            </div>
            <Hr bg="var(--color-primary-border)" />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "12px 16px",
                    gap: "6px"
                }}
            >
                <span className="typo-title-1"
                    style={{
                        color: "var(--color-primary)"
                    }}
                >해설</span>
                <p className="typo-content-1" style={{color: "var(--color-text-primary)"}}>
                    {problem.problem.explanation || "등록된 해설이 없습니다."}
                </p>
            </div>
        </S.Container>
    );
};

export default AnswerSection;