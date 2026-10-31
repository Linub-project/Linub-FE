
import NavigateText from "@/components/common/text/navigate";
import { FAQ_CATEGORY } from "@/constants/faqCategory";
import { FAQ_LIST } from "@/constants/faqList";
import { useState } from "react";
import * as PS from "../styles";
import * as S from "./styles";

const Faq = () => {
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [selectedItem, setSelectedItem] = useState(null);
    const [keyword, setKeyword] = useState("");

    const filteredFaqs = FAQ_LIST.filter(faq => {
        const matchCategory =
            selectedCategory === "ALL" ||
            faq.category === selectedCategory;

        const searchKeyword = keyword.trim().toLowerCase();

        const matchKeyword =
            faq.question.toLowerCase().includes(searchKeyword) ||
            faq.description.toLowerCase().includes(searchKeyword);

        return matchCategory && matchKeyword;
    });

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedItem(null);
    };

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value);
        setSelectedItem(null);
    };

    const handleItemClick = (id) => {
        setSelectedItem(prev => prev === id ? null : id);
    };

    return (
        <PS.ContentContainer>
            <PS.Section>
                <PS.TitleText>카테고리</PS.TitleText>
                <PS.ContentText>
                    궁금한 주제를 선택하거나 검색하여 원하는 답변을 찾아보세요.
                </PS.ContentText>

                <S.TargetArea>
                    {FAQ_CATEGORY.map(item => {
                        const isSelected = selectedCategory === item.value;

                        return (
                            <S.TargetItem
                                key={item.value}
                                className="typo-content-1"
                                $isSelected={isSelected}
                                onClick={() => handleCategoryChange(item.value)}
                            >
                                {item.label}
                            </S.TargetItem>
                        );
                    })}
                </S.TargetArea>
            </PS.Section>

            <PS.Section>
                <S.SearchArea>
                    <S.SearchInput
                        type="search"
                        value={keyword}
                        onChange={handleKeywordChange}
                        placeholder="궁금한 내용을 검색해 보세요."
                        aria-label="FAQ 검색"
                    />
                </S.SearchArea>

                <S.ResultArea>
                    <span
                        className="typo-content-3"
                        style={{ color: "var(--color-text-default)" }}
                    >
                        검색 결과 {filteredFaqs.length}개
                    </span>
                </S.ResultArea>

                {filteredFaqs.length > 0 ? (
                    <S.FaqList>
                        {filteredFaqs.map(faq => {
                            const isOpen = selectedItem === faq.id;

                            return (
                                <S.FaqItem key={faq.id}>
                                    <S.Question
                                        type="button"
                                        $open={isOpen}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${faq.id}`}
                                        onClick={() => handleItemClick(faq.id)}
                                    >
                                        <span className="typo-title-1">
                                            {faq.question}
                                        </span>

                                        <S.Arrow $open={isOpen}>
                                            +
                                        </S.Arrow>
                                    </S.Question>

                                    <S.AnswerWrapper
                                        id={`faq-answer-${faq.id}`}
                                        $open={isOpen}
                                        inert={!isOpen}
                                    >
                                        <S.AnswerContent>
                                            <S.AnswerInner>
                                                <p className="typo-content-1">
                                                    {faq.description}
                                                </p>

                                                {faq.link?.length > 0 && (
                                                    <S.LinkList>
                                                        {faq.link.map(link => (
                                                            <NavigateText
                                                                key={link.path}
                                                                text={link.label}
                                                                path={link.path}
                                                            />
                                                        ))}
                                                    </S.LinkList>
                                                )}
                                            </S.AnswerInner>
                                        </S.AnswerContent>
                                    </S.AnswerWrapper>
                                </S.FaqItem>
                            );
                        })}
                    </S.FaqList>
                ) : (
                    <S.EmptyArea>
                        <p className="typo-title-1">
                            검색 결과가 없습니다.
                        </p>
                        <p className="typo-content-2">
                            다른 검색어를 입력하거나 카테고리를 변경해 보세요.
                        </p>
                    </S.EmptyArea>
                )}
            </PS.Section>
        </PS.ContentContainer>
    );
};

export default Faq;
