import bookmark from "@/assets/icon/icon_bookmark.svg";
import compare from "@/assets/icon/icon_compare_neutral.svg";
import { useCompareQueue } from "@/contexts/compareQueueContext";
import { getLegendStyle } from "@/utils/legendstyler";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { formatDate, DATE_FORMAT } from "../../../../utils/dateFormatter";

const HeaderSection = ({ id, item }) => {
    const legendStyle = getLegendStyle(item.type);
    const { add } = useCompareQueue();
    const navigate = useNavigate();

    return (
        <S.Container id={id}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%"
                }}
            >
                <span
                    className="typo-content-1"
                    style={{
                        color: "var(--color-text-default)",
                        padding: "12px 16px",
                        cursor: "pointer"
                    }}
                    onClick={() => navigate(`/dictionary/${item.dictionaryCategory}`)}
                >← 목록으로</span>
                <span
                    className="typo-content-4"
                    style={{
                        color: "var(--color-text-default)"
                    }}
                >마지막 수정일: {formatDate(item.updatedAt, DATE_FORMAT.KOREAN_DATE_TIME_WITH_SECONDS)}</span>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    justifyContent: "space-between",
                    width: "100%"
                }}
            >
                <span
                    className="typo-display-2"
                    color="var(--color-text-primary)"
                >{item.topic}</span>
                <span
                    className="typo-content-1"
                    style={{
                        color: `var(${legendStyle.text})`,
                        backgroundColor: `var(${legendStyle.bg})`,
                        padding: "4px 8px"
                    }}
                >{item.type}</span>

                <div style={{flex: "1"}} />

                <S.ButtonArea>
                    <img src={bookmark} />
                    <span
                        className="typo-content-4"
                        style={{
                            color: "var(--color-text-default)",
                        }}
                    >북마크</span>
                </S.ButtonArea>
                <S.ButtonArea
                    onClick={() => add(item)}
                >
                    <img src={compare} />
                    <span
                        className="typo-content-4"
                        style={{
                            color: "var(--color-text-default)",
                        }}
                    >비교하기</span>
                </S.ButtonArea>
            </div>

            <div
                className="typo-title-3"
                style={{
                    marginTop: "12px",
                    color: "var(--color-text-default)"
                }}
            >{item.summary}</div>
        </S.Container>
    );
}

export default HeaderSection;