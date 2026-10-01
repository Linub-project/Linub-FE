import { TopicChip } from "@/components/common/cardchip/CardChip";
import Hr from "@/components/common/layout/hr";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const RelatedFileSection = ({ id, item }) => {
    const navigate = useNavigate();

    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
                style={{marginBottom: "6px"}}
            >관련 파일</p>
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
                    item.relations.filter(a => a.type === "FILE").map((c) => (
                        <TopicChip
                            key={c.id}
                            $color={"var(--color-warning)"}
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

export default RelatedFileSection;