import ItemIndex from "@/components/item/itemIndex";
import { DUMMY_CONCEPT } from "@/constants/dummy";
import { SECTION_CONFIG } from "@/constants/sectionConfig";
import { useParams } from "react-router-dom";
import * as S from "./styles";

const Item = () => {
    const { itemId=1 } = useParams();

    // 임시
    const item = DUMMY_CONCEPT.find(
        item => item.id === Number(itemId)
    );

    if (!item) return null;

    const sections = SECTION_CONFIG[item.dictionaryType].filter(({ isVisible }) => !isVisible || isVisible(item));

    return (
        <S.Container>
            <S.SubContainer>
                <S.SectionArea>
                    {sections.map(({ id, component: Section }) => (
                        <Section
                            key={id}
                            id={id}
                            item={item}
                        />
                    ))}
                </S.SectionArea>
                <ItemIndex sections={sections} />
            </S.SubContainer>
        </S.Container>
    );
};

export default Item;