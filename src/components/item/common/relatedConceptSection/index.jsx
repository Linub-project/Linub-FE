import { TopicChip } from "@/components/common/cardchip/Cardchip";
import Hr from "@/components/common/layout/hr";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const RelatedConceptSection = ({ id, item }) => {
    const navigate = useNavigate();

    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
                style={{marginBottom: "6px"}}
            >관련 개념</p>
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
                    item.relatedConcepts.map((c) => (
                        <TopicChip
                            key={c.id}
                            $color={"var(--color-secondary)"}
                            onClick={() => navigate(`/dictionary/item/${c.id}`)}
                        >
                            {c.topic}
                        </TopicChip>
                    ))
                }
            </div>
        </S.Container>
    );
}

export default RelatedConceptSection;