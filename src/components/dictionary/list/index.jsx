import * as D from "@/apis/dictionary";
import { getErrorMessage } from "@/apis/error";
import compare from "@/assets/icon/icon_compare.svg";
import { TagChip } from "@/components/common/cardchip/CardChip";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import WrongComponent from "@/components/common/wrong";
import { DICTIONARY_CATEGORY } from "@/constants/dictionaryCategory";
import { DICTIONARY_TYPE } from "@/constants/dictionaryType";
import { useCompareQueue } from "@/contexts/compareQueueContext";
import { useToast } from "@/contexts/toastContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const DictionaryList = ({ category }) => {
    const navigate = useNavigate();
    const categoryInfo = DICTIONARY_CATEGORY
                            .flatMap((category) => [category, ...category.subCategory])
                            .find((item) => item.key === category);
    const [selectedType, setSelectedType] = useState("ALL");
    const [searchText, setSearchText] = useState();
    const { add } = useCompareQueue();
    const [dictionaries, setDictionaries] = useState(null);
    const { showToast } = useToast();
    const [pageable, setPageable] = useState({
        page: 0,
        size: 100,
        sort: "dictionary.topic",
        direction: "asc"
    });

    if(!categoryInfo) return <WrongComponent />

    const fetchDictionaries = async () => {
        try {
            const condition = {
                code: category,
                keyword: searchText,
                tagId: null,
                ...(selectedType !== "ALL" && {
                    type: selectedType
                })
            };

            const response = await D.getDictionaries(pageable, condition);
            setDictionaries(response.data);
        } catch (error) {
            showToast(getErrorMessage(error));
        }
    }

    useEffect(() => {
        fetchDictionaries();
    }, [category, selectedType, pageable]);

    const handleDictionaryAddToQueue = (item) => {
        add(item);
    }

    const handleDictionaryTypeFilter = (type) => {
        setSelectedType(type);
    }

    return (
        <S.Container>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "flex-start",
                    gap: "8px"
                }}
            >
                <span
                    className="typo-heading-1"
                    style={{
                        color: "var(--color-text-primary)"
                    }}
                >{categoryInfo.label}</span>
                <span
                    className="typo-content-2"
                    style={{
                        color: "var(--color-text-default)"
                    }}
                >{categoryInfo.description}</span>
            </div>

            <S.TypeArea>
                {
                    DICTIONARY_TYPE.map((item) => {
                        const isSelected = item.key === selectedType;

                        return (
                            <S.TypeCard
                                key={item.id}
                                className="typo-heading-3"
                                $isSelected={isSelected}
                                onClick={() => handleDictionaryTypeFilter(item.key)}
                            >
                                {item.label}
                            </S.TypeCard>
                        );
                    })
                }
            </S.TypeArea>

            {
                dictionaries?.numberOfElements < 1 ?
                <EmptyStateGlobal />
                :
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        gap: "12px"
                    }}
                >
                    <span
                        className="typo-content-1"
                        style={{
                            color: "var(--color-text-default)"
                        }}
                    >{dictionaries?.numberOfElements}개 항목</span>
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
                                <col style={{ width: "120px" }} />
                                <col />
                                <col style={{ width: "100px" }} />
                            </colgroup>
                            <tbody>
                                {
                                    dictionaries?.content?.map((item) => {
                                        return (
                                            <S.Tr key={item.id}
                                                onClick={() => navigate(`/dictionary/item/${item.id}`)}
                                            >
                                                <td
                                                    className="typo-title-1"
                                                    style={{
                                                        color: "var(--color-primary)",
                                                        whiteSpace: "normal"
                                                    }}
                                                >{item.topic}</td>
                                                <td>
                                                    <S.Content>
                                                        <span
                                                            className="typo-content-1"
                                                            style={{
                                                                color: "var(--color-text-primary)"
                                                            }}
                                                        >{item.summary}</span>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                gap: "4px",
                                                                flexWrap: "wrap"
                                                            }}
                                                        >
                                                            {
                                                                item.tags.map((tag) => (
                                                                    <TagChip key={tag.id}>
                                                                        #{tag.name}
                                                                    </TagChip>
                                                                ))
                                                            }
                                                        </div>
                                                    </S.Content>
                                                </td>
                                                <td style={{textAlign: "center", padding: "8px 12px"}}>
                                                    <S.Comapre
                                                        src={compare}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDictionaryAddToQueue(item);
                                                        }}
                                                    />
                                                </td>
                                            </S.Tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </S.Container>
    );
}

export default DictionaryList;