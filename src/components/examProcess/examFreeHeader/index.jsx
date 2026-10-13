import clock from "@/assets/icon/icon_clock_white.svg";
import Button from "@/components/common/button/default";
import { formatTime, TIME_FORMAT } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import * as S from "./styles";

const ExamFreeHeader = ({
    problems
}) => {
    const [answerViewToggle, setAnswerViewToggle] = useState(false);
    const [lasting, setLasting] = useState(0);

    const handleAnswerViewToggleClick = () => {
        setAnswerViewToggle(!answerViewToggle);
    }

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
                        >자유 시험</span>
                    <span
                        className="typo-content-3"
                        style={{
                            color: "var(--color-text-label)"
                        }}
                    >{problems.length}문항</span>
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
                        text={`정답 · 해설 ${answerViewToggle ? "켜짐" : "꺼짐"}`}
                        size="small"
                        variant="septenary"
                        onClick={handleAnswerViewToggleClick}
                        style={{fontSize: "12px"}}
                    />
                    <Button
                        text="종료"
                        size="small"
                        variant="quinary"
                        style={{fontSize: "12px"}}
                    />
                </S.RightArea>
            </S.SubContainer>
        </S.Container>
    );
}

export default ExamFreeHeader;