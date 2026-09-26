import * as S from "./styles";
import { useParams } from "react-router-dom";
import { SECTION_CONFIG } from "@/constants/sectionConfig";
import { DUMMY_CONCEPT } from "@/constants/dummy";

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
            {sections.map(({ id, component: Section }) => (
                <Section
                    key={id}
                    id={id}
                    item={item}
                />
            ))}
        </S.Container>
    );
};

export default Item;