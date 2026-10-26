import * as U from "@/apis/user";
import { PROFILE_AGGREGATION } from "@/constants/profileAggregation";
import { useEffect, useState } from "react";
import * as S from "./styles";

const Aggregation = () => {
    const [statistic, setStatistic] = useState({
        totalSolveCnt: 0,
        increaseSolveCnt: 0,
        totalCorrectRate: 0,
        latestCorrectRate: 0,
        totalExamSession: 0,
        latestExamSessionScore: 0,
        totalStudyDay: 0,
        thisMonthStudyDay: 0
    });

    const fetchStatistics = async () => {
        try {
            const response = await U.getProfileStatistic();
            setStatistic(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchStatistics();
    }, []);

    return (
        <S.Container>
            {
                PROFILE_AGGREGATION.map((item, idx) => {
                    return (
                        <S.AggregationItem key={idx}>
                            <span
                                className="typo-title-1"
                                style={{color: "var(--color-text-default)"}}
                            >{item.title}</span>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    gap: "4px",
                                    marginBottom: "8px"
                                }}
                            >
                                <span
                                    className="typo-heading-1"
                                    style={{color: "var(--color-text-primary)", lineHeight: "-2px"}}
                                >{statistic[item.key] ?? 0}</span>
                                <span
                                    className="typo-title-1"
                                    style={{color: "var(--color-text-primary)"}}
                                >{item.unit}</span>
                            </div>
                            <span
                                className="typo-content-3"
                                style={{color: "var(--color-text-label)"}}
                            >{item.compare} {statistic[item.compareKey] ?? 0}{item.subunit ?? item.unit}</span>
                        </S.AggregationItem>
                    );
                })
            }
        </S.Container>
    );
}

export default Aggregation;