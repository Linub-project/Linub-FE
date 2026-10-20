import * as U from "@/apis/user";
import Hr from "@/components/common/layout/hr";
import Progressbar from "@/components/common/progressbar";
import { useEffect, useState } from "react";
import * as S from "./styles";

const Record = () => {
    const [studyMaps, setStudyMaps] = useState([]);
    const [consecutiveDay, setConsecutiveDay] = useState(0);
    const target = 100;
    const curr = 22;

    const fetchStatistics = async () => {
        try {
            const response = await U.getRecordStatistic();
            setStudyMaps(response.data.studyMaps);
            setConsecutiveDay(response.data.consecutiveDay);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchStatistics();
    }, []);

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
                    >이번주 학습 목표</p>
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
            </div>
        </S.Container>
    );
}

export default Record;