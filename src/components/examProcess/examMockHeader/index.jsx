import * as E from "@/apis/exam";
import clock from "@/assets/icon/icon_clock_white.svg";
import Button from "@/components/common/button/default";
import { useExamFree } from "@/contexts/examFreeContext";
import { formatTime, TIME_FORMAT } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const ExamMockHeader = ({
    examSession,
    lasting,
    setLasting
}) => {
    const { clearProblems } = useExamFree();
    const navigate = useNavigate();
    const [buttonText, setButtonText] = useState("제출");
    const [stopButtonText, setStopButtonText] = useState("중단");
    const [isSend, setIsSend] = useState(false);
    const firstLasting = lasting;

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
            navigate(`/mypage/exam/result/${examSession.id}`, { replace: true });
        } catch (error) {

        } finally {
            isSend(false);
        }
    };

    const handleStop = async () => {
        clearProblems();
        try {
            setStopButtonText("저장 중")
            const request = {
                status: "STOPPED",
                amount: lasting-firstLasting
            };

            await E.updateExamSession(examSession.id, request);
            setStopButtonText("저장 완료");
            navigate(`/mypage`, { replace: true });
        } catch (error) {

        } finally {
            isSend(false);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setLasting(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <S.Container>
            <S.SubContainer>
                <S.LeftArea>
                    <span
                        className="typo-content-1"
                        style={{
                            color: "var(--white)"
                        }}
                        >{examSession.exam} 모의고사</span>
                    <span
                        className="typo-content-3"
                        style={{
                            color: "var(--color-text-label)"
                        }}
                    >{examSession.problemCnt}문항 · {examSession.duration}분</span>
                </S.LeftArea>
                <S.RightArea>
                    <div
                        style={{
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                        }}
                    >
                        <img src={clock} style={{width: "16px"}}/>
                        <span
                            className="typo-content-1"
                            style={{
                                color: "var(--white)",
                                width: "60px"
                            }}
                        >{formatTime(lasting, TIME_FORMAT.SECOND_TO_HMINSEC)}</span>
                    </div>
                    <Button
                        text={stopButtonText}
                        size="small"
                        variant="quinary"
                        style={{fontSize: "12px"}}
                        onClick={handleStop}
                        loading={isSend}
                        />
                    <Button
                        text={buttonText}
                        size="small"
                        style={{fontSize: "12px"}}
                        onClick={handleSubmit}
                        loading={isSend}
                    />
                </S.RightArea>
            </S.SubContainer>
        </S.Container>
    );
}

export default ExamMockHeader;