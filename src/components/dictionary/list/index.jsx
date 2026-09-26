import compare from "@/assets/icon/icon_compare.svg";
import magnify from "@/assets/icon/icon_magnify.svg";
import Button from "@/components/common/button/default";
import { TagChip } from "@/components/common/cardchip/CardChip";
import { DICTIONARY_CATEGORY } from "@/constants/dictionaryCategory";
import { DICTIONARY_TYPE } from "@/constants/dictionaryType";
import { DUMMY_DICTIONARY } from "@/constants/dummy";
import { useCompareQueue } from "@/contexts/compareQueueContext";
import { useToast } from "@/contexts/toastContext";
import { useState } from "react";
import * as S from "./styles";

const DictionaryList = ({ category }) => {
    const categoryInfo = DICTIONARY_CATEGORY
                            .flatMap((category) => [category, ...category.subCategory])
                            .find((item) => item.key === category);
    const [selectedType, setSelectedType] = useState("ALL");
    const [searchText, setSearchText] = useState();
    const { add } = useCompareQueue();
    const [filteredDictionary, setFilteredDictionary] = useState(DUMMY_DICTIONARY);
    const { showToast } = useToast();

    const handleDictionaryAddToQueue = (item) => {
        const message = add(item);
        if(message) showToast(message);
    }

    const handleDictionaryTypeFilter = (type) => {
        setSelectedType(type);
        if(type === "ALL") {
            setFilteredDictionary(DUMMY_DICTIONARY);
        } else {
            setFilteredDictionary(DUMMY_DICTIONARY.filter((item) => item.type === type));
        }
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

            <S.SearchArea>
                <img src={magnify} />
                <S.SearchInput 
                    className="typo-content-1"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Button
                    size={"large"}
                    text={"검색"}
                    width=""
                />
            </S.SearchArea>

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
                >{filteredDictionary.length}개 항목</span>
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
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "70%" }} />
                            <col style={{ width: "10%" }} />
                        </colgroup>
                        <tbody>
                            {
                                filteredDictionary.map((item) => {
                                    return (
                                        <S.Tr key={item.id}>
                                            <td
                                                className="typo-title-1"
                                                style={{
                                                    color: "var(--color-primary)",
                                                    whiteSpace: "break-spaces"
                                                }}
                                            >{item.title}</td>
                                            <td>
                                                <S.Content>
                                                    <span
                                                        className="typo-content-1"
                                                        style={{
                                                            color: "var(--color-text-primary)"
                                                        }}
                                                    >{item.description}</span>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            gap: "4px",
                                                            flexWrap: "wrap"
                                                        }}
                                                    >
                                                        {
                                                            item.tags.map((tag, idx) => (
                                                                <TagChip key={idx}>
                                                                    #{tag}
                                                                </TagChip>
                                                            ))
                                                        }
                                                    </div>
                                                </S.Content>
                                            </td>
                                            <td style={{textAlign: "center", padding: "8px 12px"}}>
                                                <S.Comapre
                                                    src={compare}
                                                    onClick={() => handleDictionaryAddToQueue(item)}
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
        </S.Container>
    );
}

export default DictionaryList;