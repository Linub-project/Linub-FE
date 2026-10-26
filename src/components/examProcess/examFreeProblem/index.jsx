import { getErrorCode, getErrorMessage } from "@/apis/error";
import * as P from "@/apis/problem";
import Button from "@/components/common/button/default";
import Image from "@/components/common/image";
import Hr from "@/components/common/layout/hr";
import TerminalBG from "@/components/common/terminal";
import { OPTION_ICON } from "@/constants/optionIcon";
import { useToast } from "@/contexts/toastContext";
import { useState } from "react";
import * as S from "./styles";

const ExamFreeProblem = ({
    problems,
    selectedProblem,
    setSelectedProblem,
    selectedAnswers,
    setSelectedAnswers
}) => {
    const problem = problems[selectedProblem];
    const { showToast } = useToast();
    const [buttonText, setButtonText] = useState("북마크");
    const [isSend, setIsSend] = useState(false);

    const handleAnswerSelect = (optionId) => {
        setSelectedAnswers(prev => {
            const updated = { ...prev };

            if (updated[problem.id] === optionId) {
                delete updated[problem.id];
            } else {
                updated[problem.id] = optionId;
            }

            return updated;
        });
    };

    const handleBookmarkSelect = async () => {
        if (isSend) return;

        setIsSend(true);
        setButtonText("추가 중");

        try {
            await P.addProblemBookmarkToUser(problem.id);
            setButtonText("추가 완료");
            showToast("북마크한 문제는 마이페이지에서 확인할 수 있습니다.");
        } catch (error) {
            if (getErrorCode(error) === "PROB_BOOK_001") {
                setButtonText("이미 추가됨");
                showToast(getErrorMessage(error));
            }
        } finally {
            setIsSend(false);
            setTimeout(() => {
                setButtonText("북마크");
            }, 2000);
        }
    };

    return (
        <S.Container>
            <S.TopArea>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px"
                    }}
                >
                    <span
                        className="typo-content-1"
                        style={{color: "var(--color-text-primary)"}}
                    >문제 {selectedProblem+1}</span>
                    <span
                        className="typo-content-3"
                        style={{color: "var(--color-text-default)"}}
                    >{Object.keys(selectedAnswers).length} / {problems.length} 답안 작성</span>
                </div>
                <Button
                    text={buttonText}
                    size="small"
                    variant="tertiary"
                    loading={isSend}
                    onClick={handleBookmarkSelect}
                />
            </S.TopArea>
            <Hr />
            <S.ContentArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >{problem.question}</p>
                {
                    problem.imageUrl &&
                        <Image src={problem.imageUrl} />
                }
                {
                    problem.sourceCode && 
                        <TerminalBG content={problem.sourceCode} language={problem.language}/>
                }
                <S.OptionArea>
                    {problem.options.map((option, idx) => {
                        const isSelected = selectedAnswers[problem.id] === option.id;
                        return (
                            <S.OptionItem
                                key={option.id}
                                $isSelected={isSelected}
                                onClick={() => handleAnswerSelect(option.id)}
                            >
                                <img
                                    src={
                                        isSelected
                                            ? OPTION_ICON[idx].primary
                                            : OPTION_ICON[idx].default
                                    }
                                    style={{ width: "18px" }}
                                    alt={`${idx + 1}번`}
                                />
                                <span className="typo-content-1">
                                    {option.content}
                                </span>
                            </S.OptionItem>
                        );
                    })}
                </S.OptionArea>
            </S.ContentArea>
            <Hr />
            <S.BottomArea>
                <div>
                    {selectedProblem > 0 && (
                        <Button
                            text="← 이전"
                            size="small"
                            variant="tertiary"
                            onClick={() => setSelectedProblem(prev => prev - 1)}
                        />
                    )}
                </div>

                <span className="typo-content-1"
                    style={{color: "var(--color-text-default)"}}
                >
                    {selectedProblem + 1} / {problems.length}
                </span>

                <div>
                    {selectedProblem < problems.length - 1 && (
                        <Button
                            text="다음 →"
                            size="small"
                            variant="tertiary"
                            onClick={() => setSelectedProblem(prev => prev + 1)}
                        />
                    )}
                </div>
            </S.BottomArea>
        </S.Container>
    );
}

export default ExamFreeProblem;