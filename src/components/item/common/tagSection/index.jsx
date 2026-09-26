import * as S from "./styles";
import Hr from "@/components/common/layout/hr";
import { TopicChip } from "@/components/common/cardchip/Cardchip";

const TagSection = ({ id, item }) => {
    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
                style={{marginBottom: "6px"}}
            >태그</p>
            <Hr marginBottom="12px" />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "8px",
                    flexWrap: "wrap"
                }}
            >
                {
                    item.relatedTags.map((c) => (
                        <TopicChip
                            key={c.id}
                            $color={"var(--color-text-default)"}
                            
                        >
                            {c.name}
                        </TopicChip>
                    ))
                }
            </div>
        </S.Container>
    );
}

export default TagSection;