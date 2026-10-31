import NavigateText from "@/components/common/text/navigate";
import { START_MENU } from "@/constants/startMenu";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { GUIDE_CATEGORY } from "@/constants/guideCategory";
import { Chip, LevelChip, TagChip, TopicChip } from "@/components/common/cardchip/CardChip";

const Explore = () => {
const navigate = useNavigate();

    return (
        <S.Container>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <span
                    className="typo-heading-2"
                    style={{
                        color: "var(--color-text-primary)",
                    }}
                >Linub 가이드 살펴보기</span>
            </div>

            <S.MenuArea>
                {
                    GUIDE_CATEGORY.map((item, idx) => {
                        return (
                            <S.MenuChip
                                key={idx}
                                onClick={() => navigate(`/guide/${item.subCategory[0].key}`)}
                            >
                                <span
                                    className="typo-heading-3"
                                    style={{
                                        marginBottom: "8px"
                                    }}
                                >{item.label}</span>
                                <span
                                    className="typo-content-2"
                                    style={{
                                        color: "var(--color-text-default)",
                                        marginBottom: "12px"
                                    }}
                                >{item.description}</span>
                                <S.TagChipList>
                                    {
                                        item.subCategory.map((sub, idx2) => (
                                            <Chip key={idx2}
                                                style={{
                                                    border: "none"
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigate(`/guide/${sub.key}`);
                                                }}
                                            >{sub.label}</Chip>
                                        ))
                                    }
                                </S.TagChipList>
                            </S.MenuChip>
                        );
                    })
                }
            </S.MenuArea>
        </S.Container>
    );
}

export default Explore;