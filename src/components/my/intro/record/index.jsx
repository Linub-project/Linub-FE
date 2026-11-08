import { getErrorMessage } from "@/apis/error";
import * as U from "@/apis/user";
import Button from "@/components/common/button/default";
import Input from "@/components/common/input/default";
import Hr from "@/components/common/layout/hr";
import Progressbar from "@/components/common/progressbar";
import { useToast } from "@/contexts/toastContext";
import { useEffect, useState } from "react";
import * as S from "./styles";

const Record = () => {
    const {showToast} = useToast();
    const [studyMaps, setStudyMaps] = useState([]);
    const [consecutiveDay, setConsecutiveDay] = useState(0);
    const [target, setTarget] = useState(0);
    const [curr, setCurr] = useState(0);
    const [openInput, setOpenInput] = useState(false);
    const [input, setInput] = useState(0);
    const [isSaving, setIsSaving] = useState(false);
    const isMonday = new Date().getDay() === 1;

    const fetchStatistics = async () => {
        try {
            const response = await U.getRecordStatistic();
            setStudyMaps(response.data.studyMaps);
            setConsecutiveDay(response.data.consecutiveDay);
            setTarget(response.data.targetCnt);
            setCurr(response.data.currentCnt);
            setInput(response.data.targetCnt);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchStatistics();
    }, []);

    const handleButton = async () => {
        if (!openInput) {
            setInput(target);
            setOpenInput(true);
            return;
        }

        const newTarget = Number(input);

        if (!Number.isInteger(newTarget) || newTarget < 1) {
            alert("목표치는 1 이상의 정수로 입력해주세요.");
            return;
        }

        setIsSaving(true);

        try {
            await U.updateTarget({ value: newTarget });

            setTarget(newTarget);
            setOpenInput(false);
        } catch (error) {
            showToast(getErrorMessage(error));
        } finally {
            setIsSaving(false);
        }
    };

    const handleCancel = () => {
        setInput(target);
        setOpenInput(false);
    };

    return (
        <S.Container>
            <p
                className="typo-title-2"
                style={{
                    color: "var(--color-text-default)"
                }}
            >연속 학습</p>
            <div
                style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "flex-start",
                    gap: "4px"
                }}
            >
                <span
                    className="typo-heading-1"
                    style={{color: "var(--color-primary)"}}
                >{consecutiveDay}</span>
                <span
                    className="typo-content-1"
                    style={{color: "var(--color-text-primary)"}}
                >일째</span>
            </div>
            <S.WeekArea>
                {
                    studyMaps.map((item, idx) => {
                        return (
                            <S.DayItem
                                key={idx}
                            >
                                <span
                                    className="typo-content-3"
                                    style={{color: "var(--color-text-default)"}}
                                >월</span>
                                <S.MarkItem $ok={item} $today={idx == 6} />
                            </S.DayItem>
                        );
                    })
                }
            </S.WeekArea>
            <Hr />
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        marginBottom: "8px"
                    }}
                >
                    <p
                        className="typo-title-2"
                        style={{
                            color: "var(--color-text-default)",
                            alignSelf: "flex-end"
                        }}
                    >이번주 문제 목표</p>
                    <p
                        className="typo-content-1"
                        style={{
                            color: "var(--color-text-default)"
                        }}
                    >
                        {curr} / {target} 문제
                    </p>
                </div>
                <Progressbar
                    min={0}
                    max={target}
                    value={curr}
                />
                {
                    isMonday &&
                        <div
                            style={{
                                marginTop: "8px",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px"
                            }}
                        >
                            {openInput && (
                                <Input
                                    type="number"
                                    min={1}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    style={{
                                        width: "100px",
                                        fontSize: "12px"
                                    }}
                                />
                            )}

                            <Button
                                text={openInput ? "저장" : "목표치 변경"}
                                size="small"
                                style={{ fontSize: "12px" }}
                                variant={openInput ? "primary" :"tertiary"}
                                onClick={handleButton}
                                disabled={isSaving}
                            />

                            {openInput && (
                                <Button
                                    text="취소"
                                    size="small"
                                    style={{ fontSize: "12px" }}
                                    variant="tertiary"
                                    onClick={handleCancel}
                                    disabled={isSaving}
                                />
                            )}
                        </div>
                }
            </div>
        </S.Container>
    );
}

export default Record;