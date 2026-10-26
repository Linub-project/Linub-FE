import { getErrorCode, getErrorMessage } from "@/apis/error";
import * as P from "@/apis/problem";
import Button from "@/components/common/button/default";
import { TagChip } from "@/components/common/cardchip/CardChip";
import Image from "@/components/common/image";
import Hr from "@/components/common/layout/hr";
import TerminalBG from "@/components/common/terminal";
import { OPTION_ICON } from "@/constants/optionIcon";
import { useToast } from "@/contexts/toastContext";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { useState } from "react";
import * as S from "./styles";

const ProblemSection = ({
    problems,
    selectedProblem
}) => {
    const problem = problems[selectedProblem];
    const { showToast } = useToast();
    const [buttonText, setButtonText] = useState("북마크");
    const [isSend, setIsSend] = useState(false);

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

    const correctRate = problem.problem.solvedCnt > 0
        ? Math.round(problem.problem.correctCnt / problem.problem.solvedCnt * 100)
        : null;

    const histories = problem.histories;
    const answerId = problem.problem.answer?.answerId;

    const mySolvedCnt = histories.length;

    const myCorrectCnt = histories.filter(
        history => history.selectOptionId != null &&
                history.selectOptionId === answerId
    ).length;

    const myWrongCnt = mySolvedCnt - myCorrectCnt;

    const myCorrectRate = mySolvedCnt > 0
        ? Math.round(myCorrectCnt / mySolvedCnt * 100)
        : null;

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
                    >문제 {problem.id}</span>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "8px",
                        }}
                    >
                        <span
                            className="typo-content-3"
                            style={{
                                color: "var(--color-danger)",
                                backgroundColor: "var(--color-danger-bg)",
                                padding: "2px 6px",
                            }}
                        >{problem.wrongCnt}회 틀림</span>
                        {
                            problem.tags.map((item) => (
                                <TagChip key={item.id}>
                                    {item.name}
                                </TagChip>
                            ))
                        }
                    </div>
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
                >{problem.problem.question}</p>
                {
                    problem.problem.imageUrl &&
                        <Image src={problem.problem.imageUrl} />
                }
                {
                    problem.problem.sourceCode && 
                        <TerminalBG content={problem.problem.sourceCode} language={problem.problem.language}/>
                }
                <S.OptionArea>
                    {problem.problem.options.map((option, idx) => {
                        return (
                            <S.OptionItem key={option.id}>
                                <img
                                    src={OPTION_ICON[idx].default}
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
                <S.BottomItem>
                    <S.ValueText
                        className="typo-heading-2"
                    >{correctRate ? `${correctRate}%` : "통계 없음"}</S.ValueText>
                    <S.LabelText
                        className="typo-content-1"
                    >문제 정답률</S.LabelText>
                </S.BottomItem>
                <S.BottomItem>
                    <S.ValueText
                        className="typo-heading-2"
                    >{myCorrectRate !== null ? `${myCorrectRate}%` : "통계 없음"}</S.ValueText>
                    <S.LabelText
                        className="typo-content-1"
                    >내 정답률</S.LabelText>
                </S.BottomItem>
                <S.BottomItem>
                    <S.ValueText
                        className="typo-heading-2"
                        $color="var(--color-primary)"
                    >{myCorrectCnt}회</S.ValueText>
                    <S.LabelText
                        className="typo-content-1"
                    >내가 맞은 횟수</S.LabelText>
                </S.BottomItem>
                <S.BottomItem>
                    <S.ValueText
                        className="typo-heading-2"
                        $color="var(--color-danger)"
                    >{myWrongCnt}회</S.ValueText>
                    <S.LabelText
                        className="typo-content-1"
                    >내가 틀린 횟수</S.LabelText>
                </S.BottomItem>
            </S.BottomArea>
            <S.HistoryArea>
                <p
                    className="typo-title-2"
                    style={{color: "var(--color-text-primary)"}}
                >문제 풀이 기록</p>
                <S.HistoryList>
                    {
                        histories.map((item) => {
                            const selectedOptionIndex = problem.options.findIndex(
                                option => option.id === item.selectOptionId
                            );
                            return <S.HistoryItem key={item.id}>
                                <span
                                    className="typo-content-1"
                                    style={{
                                        color: "var(--color-text-label)"
                                    }}
                                >{formatDate(item.createdAt, DATE_FORMAT.KOREAN_DATE_TIME)}</span>
                                <span
                                    className="typo-title-1"
                                    style={{
                                        color: answerId === item.selectOptionId ? "var(--color-primary)" : "var(--color-danger)"
                                    }}
                                >{item.selectOptionId == null ? "선택하지 않음"
                                    : selectedOptionIndex >= 0
                                        ? `${selectedOptionIndex + 1}번 선택`
                                        : "선택한 보기 정보 없음"}
                                </span>
                            </S.HistoryItem>
                        })
                    }
                </S.HistoryList>
            </S.HistoryArea>
        </S.Container>
    );
}

export default ProblemSection;