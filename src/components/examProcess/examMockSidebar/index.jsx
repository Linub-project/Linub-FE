import * as E from "@/apis/exam";
import Button from "@/components/common/button/default";
import Hr from "@/components/common/layout/hr";
import { useExamFree } from "@/contexts/examFreeContext";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const ExamMockSidebar = ({
    problems,
    selectedProblem,
    setSelectedProblem,
    selectedAnswers
}) => {
    const navigate = useNavigate();
    const { clearProblems } = useExamFree();
    const [buttonText, setButtonText] = useState("제출");
    const [isSend, setIsSend] = useState(false);

    const handleSubmit = async () => {
        clearProblems();
        setIsSend(true);
        try {
            setButtonText("제출 중")
            const request = {
                status: "COMPLETE",
                amount: lasting-firstLasting
            };

            await E.updateExamSession(examSession.id, request);
            setButtonText("제출 완료");
            navigate(`/exam/result/${examSession.id}`, { replace: true });
        } catch (error) {

        } finally {
            isSend(false);
        }
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
                    text={buttonText}
                    size="small"
                    width="100%"
                    onClick={handleSubmit}
                    loading={isSend}
                />
            </div>
        </S.Container>
    );
}

export default ExamMockSidebar;