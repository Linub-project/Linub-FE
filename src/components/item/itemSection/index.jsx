import { SECTION_CONFIG } from "@/constants/sectionConfig";
import * as S from "./styles";

const ItemSection = ({ item, idPrefix = "" }) => {
    const sections = SECTION_CONFIG[item.type].filter(({ isVisible }) => !isVisible || isVisible(item));

    return (
        <S.SectionArea>
            {sections.map(({ id, component: Section }) => (
                <Section
                    key={id}
                    id={idPrefix ? `${idPrefix}-${id}` : id}
                    item={item}
                />
            ))}
        </S.SectionArea>
    );
};

export default ItemSection;