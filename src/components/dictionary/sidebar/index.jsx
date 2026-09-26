import right from "@/assets/icon/icon_right.svg";
import { DICTIONARY_CATEGORY } from "@/constants/dictionaryCategory";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const DictionarySidebar = ({ category }) => {
    const navigate = useNavigate();

    const [openCategory, setOpenCategory] = useState(category);

    const handleCategoryClick = (c) => {
        navigate(`/dictionary/${c.key}`);

        if (c.subCategory.length === 0) {
            setOpenCategory(null);
            return;
        }

        setOpenCategory((prev) =>
            prev === c.key ? null : c.key
        );
    };

    const handleSubCategoryClick = (sc) => {
        navigate(`/dictionary/${sc.key}`);
    };

    return (
        <S.Container>
            <span
                className="typo-title-1"
                style={{
                    color: "var(--color-text-primary)",
                    margin: "12px"
                }}
            >
                Category
            </span>

            {DICTIONARY_CATEGORY.map((c) => {
                const hasSubCategory = c.subCategory.length > 0;

                const isOpen =
                    openCategory === c.key;

                const isSelected =
                    category === c.key;

                return (
                    <S.CategoryGroup key={c.key}>

                        <S.Category
                            className="typo-content-1"
                            $isSelected={isSelected}
                            onClick={() => handleCategoryClick(c)}
                        >
                            {c.label}

                            {hasSubCategory && (
                                <S.Arrow
                                    $isOpen={isOpen}
                                    src={right}
                                />
                            )}
                        </S.Category>

                        {hasSubCategory && isOpen && (
                            <S.SubCategoryArea>
                                {c.subCategory.map((sc) => (
                                    <S.SubCategory
                                        key={sc.key}
                                        className="typo-content-1"
                                        $isSelected={
                                            category === sc.key
                                        }
                                        onClick={() =>
                                            handleSubCategoryClick(sc)
                                        }
                                    >
                                        {sc.label}
                                    </S.SubCategory>
                                ))}
                            </S.SubCategoryArea>
                        )}

                    </S.CategoryGroup>
                );
            })}
        </S.Container>
    );
};

export default DictionarySidebar;