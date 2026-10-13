import Hr from "@/components/common/layout/hr";
import * as S from "./styles";

const ExamFreeAnswer = ({
    problems,
    selectedProblem
}) => {
    const problem = problems[selectedProblem];

    const correctOptionIndex = problem.options.findIndex(
        option => option.id === problem.answer?.answerId
    );

    const correctOptionNumber = correctOptionIndex + 1;

    const correctRate = problem.solvedCnt > 0
        ? Math.round(problem.correctCnt / problem.solvedCnt * 100)
        : null;

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
                <p className="typo-content-1">
                    {problem.explanation || "등록된 해설이 없습니다."}
                </p>
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
                >정답률</span>
                <span className="typo-content-1" style={{color: "var(--color-text-primary)"}}>
                    {correctRate !== null
                        ? `${correctRate}%`
                        : "통계 없음"}
                </span>
            </div>
        </S.Container>
    );
};

export default ExamFreeAnswer;