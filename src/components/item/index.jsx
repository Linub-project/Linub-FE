import * as D from "@/apis/dictionary";
import ItemPageSkeleton from "@/components/common/skeleton/itemPage";
import WrongComponent from "@/components/common/wrong";
import ItemIndex from "@/components/item/itemIndex";
import ItemSection from "@/components/item/itemSection";
import { SECTION_CONFIG } from "@/constants/sectionConfig";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";

const Item = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEmptyState, setIsEmptyState] = useState(false);

    const fetchItem = async () => {
        try {
            const response = await D.getDictionary(itemId);
            setItem(response.data);
            setLoading(false);
        } catch (error) {
            if(error.response.data.code === "DICT_002") {
                setIsEmptyState(true);
            }
        }
    }

    useEffect(() => {
        fetchItem();
    }, [itemId])

    if (isEmptyState) return <WrongComponent />

    if (loading) return <ItemPageSkeleton />

    if (!item) return <WrongComponent />

    const sections = SECTION_CONFIG[item.type].filter(({ isVisible }) => !isVisible || isVisible(item));

    return (
        <S.Container>
            <S.SubContainer>
                <ItemSection item={item} />
                <ItemIndex sections={sections} />
            </S.SubContainer>
        </S.Container>
    );
};

export default Item;