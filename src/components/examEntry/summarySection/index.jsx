import * as E from "@/apis/exam";
import Button from "@/components/common/button/default";
import { useExamFree } from "@/contexts/examFreeContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const SummarySection = ({
    mode,
    scope,
    selectedSubjectIds,
    exam,
    count,
    duration
}) => {
    const navigate = useNavigate();
    const [buttonText, setButtonText] = useState("시험 시작");
    const [isSend, setIsSend] = useState(false);
    const { setProblems } = useExamFree();

    if(mode === "FREE" && (!scope || selectedSubjectIds.length === 0)) {
        return;
    } else if(mode === "MOCK" && !exam.id) {
        return;
    }

    const handleSubmit = async () => {
        setIsSend(true);
        try {
            if(mode === "FREE") {
                const request = {
                    scope: scope,
                    type: "MULTIPLE",
                    ids: selectedSubjectIds,
                    count: count
                }
                const response = await E.freeExam(request);
                setButtonText("준비 완료");
                setProblems(response.data);
                navigate("/exam/free");
            } else if(mode === "MOCK") {
                const response = await E.mockExam(exam.id);
                setButtonText("준비 완료");
                navigate(`/exam/mock/${response.data}`);
            }
        } catch (error) {

        }
    }

    return (
        <S.Container>
            <S.TopArea>
                <div className="typo-content-3"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%"
                    }}
                >
                    <span
                        className="typo-title-1"
                        style={{color: "var(--color-primary)"}}
                    >{mode === "FREE" ? "자유 시험" : exam.title}</span>
                    <span
                        style={{color: "var(--color-primary)"}}
                    >{count}문제 · {mode === "FREE" ? "무제한" : `${duration}분 제한`}</span>
                </div>
                <Button
                    text={buttonText}
                    loading={isSend}
                    loadingText="시험 준비 중.."
                    onClick={handleSubmit}
                />
            </S.TopArea>
            {mode === "MOCK" &&
                <div
                    className="typo-content-1"
                    style={{
                        width: "100%",
                        textAlign: "center"
                    }}
                >
                    <p style={{color: "var(--color-danger)"}}>본 시험은 실제 Linux Master 기출문제와 동일한 시험이 아니며, 학습 및 실력 점검을 목적으로 제공됩니다.</p>
                    <p style={{color: "var(--color-danger)"}}>본 시험 결과는 실제 자격시험 결과와 무관하며, 실제 시험 합격을 보장하지 않습니다.</p>
                </div>
            }
        </S.Container>
    );
}

export default SummarySection;