import Hr from "@/components/common/layout/hr";
import * as S from "./styles";

const Record = ({user}) => {
    const target = 100;
    const curr = 22;
    const rate = curr/target*100;

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
                >{3}</span>
                <span
                    className="typo-content-1"
                    style={{color: "var(--color-text-primary)"}}
                >일째</span>
            </div>
            <S.WeekArea>
                {
                    Array.from({length: 7}).map((item, idx) => {
                        return (
                            <S.DayItem
                                key={idx}
                            >
                                <span
                                    className="typo-content-3"
                                    style={{color: "var(--color-text-default)"}}
                                >월</span>
                                <S.MarkItem $ok={idx != 3} $today={idx == 6} />
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
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        width: "100%",
                        height: "6px",
                        backgroundColor: "var(--color-border)"
                    }}
                >
                    <div
                        style={{
                            height: "100%",
                            width: `${rate}%`,
                            backgroundColor: "var(--color-primary)"
                        }}
                    />
                </div>
            </div>
        </S.Container>
    );
}

export default Record;