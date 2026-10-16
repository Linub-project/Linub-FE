import { INTRO_AGGREGATION } from "@/constants/introAggregation";
import * as S from "./styles";

const Intro = () => {
    return (
        <S.Container>
            <S.AggregationArea>
                {
                    INTRO_AGGREGATION.map((item, idx) => (
                        <S.AggregationItem
                            key={idx}
                        >
                            <span
                                className="typo-heading-1"
                                style={{color: "var(--color-text-primary)"}}
                            >{item.value}</span>
                            <span
                                className="typo-content-1"
                                style={{color: "var(--color-text-label)"}}
                            >{item.title}</span>
                        </S.AggregationItem>
                    ))
                }
            </S.AggregationArea>
            <S.ContentArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >최근 시험</p>
                <S.LatestExamList>
                    {
                        Array.from({length: 3}).map((item, idx) => (
                            <S.LatestExamItem key={idx}
                                className="typo-content-1"
                            >
                                리눅스마스터 2급 1차
                            </S.LatestExamItem>
                        ))
                    }
                </S.LatestExamList>
            </S.ContentArea>
            <S.ContentArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >오늘 다시 풀어볼 문제</p>
            </S.ContentArea>
            <S.ContentArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >심사 진행 중인 내 문제</p>
            </S.ContentArea>
            <S.ContentArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >문제 심사</p>
            </S.ContentArea>
        </S.Container>
    );
}

export default Intro;