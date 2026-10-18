import { PROFILE_AGGREGATION } from "@/constants/profileAggregation";
import * as S from "./styles";

const arr = ["총 풀이 문제", "완료한 모의시험", "전체 정답률", "누적 시험 일수"]

const Aggregation = ({user}) => {
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
                                >{item.value}</span>
                                <span
                                    className="typo-title-1"
                                    style={{color: "var(--color-text-primary)"}}
                                >{item.unit}</span>
                            </div>
                            <span
                                className="typo-content-3"
                                style={{color: "var(--color-text-label)"}}
                            >{item.compare}</span>
                        </S.AggregationItem>
                    );
                })
            }
        </S.Container>
    );
}

export default Aggregation;