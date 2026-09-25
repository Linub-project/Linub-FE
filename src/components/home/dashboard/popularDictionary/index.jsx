import { DUMMY_POPULAR_DICTIONARY } from "@/constants/dummy";
import { getLegendStyle } from "@/utils/legendStyler";
import * as S from "./styles";

const PopularDictionary = () => {
    return (
        <S.Container>
            <span
                className="typo-title-1"
                style={{
                    color: "var(--color-text-primary)"
                }}
            >실시간 인기 사전</span>
            <div
                style={{
                    backgroundColor: "var(--white)",
                    width: "100%",
                    border: "1px solid var(--color-border)",
                    borderRadius: "6px",
                    overflow: "hidden"
                }}
            >
                <table
                    style={{
                        borderCollapse: "collapse",
                        width: "100%"
                    }}
                >
                    <colgroup>
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "20%" }} />
                        <col style={{ width: "20%" }} />
                        <col style={{ width: "50%" }} />
                    </colgroup>
                    <tbody>
                        {
                            DUMMY_POPULAR_DICTIONARY.map((item) => {
                                const legendStyle = getLegendStyle(item.tag);

                                return (
                                    <S.Tr key={item.id}>
                                        <S.Index
                                            className="typo-content-1"
                                        >{item.index}</S.Index>
                                        <S.Keyword
                                            className="typo-title-1"
                                        >{item.keyword}</S.Keyword>
                                        <S.Tag
                                            className="typo-content-3"
                                        >
                                            <div
                                                style={{
                                                    color: `var(${legendStyle.text})`,
                                                    backgroundColor: `var(${legendStyle.bg})`,
                                                    width: "fit-content",
                                                    padding: "2px 6px",
                                                    margin: "0 auto"
                                                }}
                                            >
                                                {item.tag}
                                            </div>
                                        </S.Tag>
                                        <S.Description>{item.description}</S.Description>
                                    </S.Tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            <span
                className="typo-content-3"
                style={{
                    color: "var(--color-primary)",
                    cursor: "pointer"
                }}
            >전체 사전 보기 →</span>
        </S.Container>
    );
}

export default PopularDictionary;