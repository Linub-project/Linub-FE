import { GUIDE_CATEGORY } from "@/constants/guideCategory";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const GuideSidebar = ({ category }) => {
    const navigate = useNavigate();

    const handleSubCategoryClick = (sc) => {
        navigate(`/guide/${sc.key}`);
    };

    return (
        <S.Container>
            <S.SubCategory
                className="typo-title-1"
                onClick={() => navigate("/guide")}
            >가이드 홈</S.SubCategory>

            {GUIDE_CATEGORY.map((c) => {
                const isSelected = category === c.key;

                return (
                    <S.CategoryGroup key={c.key}>
                        <S.Label
                            className="typo-title-2"
                            $isSelected={isSelected}
                        >{c.label}</S.Label>
                        <S.SubCategoryArea>
                            {c.subCategory.map((sc) => (
                                <S.SubCategory
                                    key={sc.key}
                                    className="typo-content-1"
                                    $isSelected={category === sc.key}
                                    onClick={() => handleSubCategoryClick(sc)}
                                >{sc.label}</S.SubCategory>
                            ))}
                        </S.SubCategoryArea>
                    </S.CategoryGroup>
                );
            })}
        </S.Container>
    );
};

export default GuideSidebar;