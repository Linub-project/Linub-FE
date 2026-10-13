import Button from "@/components/common/button/default";
import Hr from "@/components/common/layout/hr";
import { useExamFree } from "@/contexts/examFreeContext";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const ExamFreeSidebar = ({
    problems,
    selectedProblem,
    setSelectedProblem,
    selectedAnswers
}) => {
    const navigate = useNavigate();
    const { clearProblems } = useExamFree();

    const handleExit = () => {
        clearProblems();
        navigate("/exam/entry", { replace: true });
    };

    return (
        <S.Container>
            <div
                style={{
                    padding: "12px 16px",
                    width: "100%"
                }}
            >
                <span
                    className="typo-content-1"
                >이동</span>
            </div>
            <Hr />
            <S.ProblemArea>
                {problems.map((item, idx) => {
                    const isCurrent = idx === selectedProblem;
                    const isSolved = selectedAnswers[item.id] != null;

                    const variant = isCurrent
                        ? "selected"
                        : isSolved
                            ? "solved"
                            : "unsolved";

                    return (
                        <S.ProblemItem
                            key={item.id}
                            $variant={variant}
                            onClick={() => setSelectedProblem(idx)}
                        >
                            {idx + 1}
                        </S.ProblemItem>
                    );
                })}
            </S.ProblemArea>
            <Hr />
            <S.LabelArea>
                <S.LabelItem>
                    <div
                        style={{
                            width: "16px",
                            height: "16px",
                            backgroundColor: "var(--color-primary)"
                        }}
                    />
                    <span
                        className="typo-content-3"
                    >현재 위치</span>
                </S.LabelItem>
                <S.LabelItem>
                    <div
                        style={{
                            width: "16px",
                            height: "16px",
                            backgroundColor: "var(--color-primary-border)"
                        }}
                    />
                    <span
                        className="typo-content-3"
                    >푼 문제</span>
                </S.LabelItem>
                <S.LabelItem>
                    <div
                        style={{
                            width: "16px",
                            height: "16px",
                            backgroundColor: "var(--color-bg-subtle)"
                        }}
                    />
                    <span
                        className="typo-content-3"
                    >풀지 않은 문제</span>
                </S.LabelItem>
            </S.LabelArea>
            <Hr />
            <div
                style={{
                    padding: "12px 16px",
                    width: "100%"
                }}
            >
                <Button
                    text="종료"
                    size="small"
                    width="100%"
                    onClick={handleExit}
                />
            </div>
        </S.Container>
    );
}

export default ExamFreeSidebar;