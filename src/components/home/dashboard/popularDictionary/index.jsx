import * as D from "@/apis/dictionary";
import { SkeletonBox } from "@/components/common/skeleton/style";
import NavigateText from "@/components/common/text/navigate";
import { getLegendStyle } from "@/utils/legendStyler";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const PopularDictionary = () => {
    const navigate = useNavigate();
    const [dictionaries, setDictionaries] = useState([]);
    
    const fetchPopularDictionaries = async () => {
        try {
            const size = 8;
            const sort = "viewCnt"
            const response = await D.getHomeDictionaries(size, sort);
            setDictionaries(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchPopularDictionaries();
    }, []);

    if(dictionaries.length === 0) {
        return <SkeletonBox $h="360px" />;
    }

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
                <S.Table
                    style={{
                        borderCollapse: "collapse",
                        width: "100%"
                    }}
                >
                    <tbody>
                        {
                            dictionaries.content?.map((item, idx) => {
                                const legendStyle = getLegendStyle(item.type);
                                return (
                                    <tr key={item.id}
                                        onClick={() => navigate(`/dictionary/item/${item.id}`)}
                                    >
                                        <S.Index
                                            className="typo-content-1"
                                        >{idx+1}</S.Index>
                                        <S.Keyword
                                            className="typo-title-2 terminal"
                                        >{item.topic}</S.Keyword>
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
                                                {item.type}
                                            </div>
                                        </S.Tag>
                                        <S.Description>{item.summary}</S.Description>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </S.Table>
            </div>
            <NavigateText
                text="전체 사전 보기"
                path="/dictionary"
            />
        </S.Container>
    );
}

export default PopularDictionary;