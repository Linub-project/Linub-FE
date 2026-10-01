import { useEffect, useState } from "react";
import ItemSection from "../item/itemSection";
import * as D from "@/apis/dictionary";
import * as S from "./styles";
import Hr from "../common/layout/hr";
import EmptyStateGlobal from "../common/emptyState/global";

const DictionaryCompare = ({ leftId, rightId }) => {
    const [leftItem, setLeftItem] = useState(null);
    const [rightItem, setRightItem] = useState(null);
    const [compareDescription, setCompareDescription] = useState("아직 등록된 설명이 없습니다.");

    const fetchItems = async () => {
        if (!leftId || !rightId) {
            return;
        }

        try {
            const [leftResponse, rightResponse, compareDescriptionResponse] =
                await Promise.all([
                    D.getDictionary(leftId),
                    D.getDictionary(rightId),
                    D.getDictionaryComparison(leftId, rightId)
                ]);

            setLeftItem(leftResponse.data);
            setRightItem(rightResponse.data);
            if(compareDescriptionResponse.data) setCompareDescription(compareDescriptionResponse.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, [leftId, rightId]);

    if (!leftId || !rightId) {
        return null;
    }

    if (!leftItem || !rightItem) {
        return null;
    }

    return (
        <S.Container>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <S.SupportContainer>
                    <EmptyStateGlobal 
                        title="화면 너비가 충분하지 않습니다."
                        description="사전 비교 기능은 화면 너비가 940px 이상인 환경에서 이용할 수 있습니다."
                    />
                </S.SupportContainer>
                <S.SubContainer>
                    <S.CompareItem>
                        <ItemSection
                            item={leftItem}
                            idPrefix={`compare-${leftItem.id}`}
                        />
                    </S.CompareItem>

                    <S.CompareItem>
                        <ItemSection
                            item={rightItem}
                            idPrefix={`compare-${rightItem.id}`}
                        />
                    </S.CompareItem>
                </S.SubContainer>

                <Hr />
                
                <S.SubContainer>
                    <S.ComparisonArea>
                        <p
                            className="typo-title-1"
                            style={{
                                color: "var(--color-primary)"
                            }}
                        >비교 설명</p>
                        <span
                            className="typo-content-1"
                            style={{
                                color: "var(--color-text-default)"
                            }}
                        >{compareDescription}</span>
                    </S.ComparisonArea>
                </S.SubContainer>
            </div>
        </S.Container>
    );
};

export default DictionaryCompare;