
import NavigateText from "@/components/common/text/navigate";
import { FAQ_LIST } from "@/constants/faqList";
import { useState } from "react";
import * as S from "./styles";

const Faq = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const [faqs] = useState(() =>
        [...FAQ_LIST]
            .sort(() => Math.random() - 0.5)
            .slice(0, 6)
    );

    const handleItemClick = (id) => {
        setSelectedItem(prev => prev === id ? null : id);
    };

    return (
        <S.Container>
            <span
                className="typo-heading-2"
                style={{
                    color: "var(--color-text-primary)",
                    marginBottom: "4px"
                }}
            >자주 묻는 질문</span>

            <S.FaqList>
                {faqs.map(faq => {
                    const isOpen = selectedItem === faq.id;

                    return (
                        <S.FaqItem key={faq.id}>
                            <S.Question
                                onClick={() => handleItemClick(faq.id)}
                            >
                                <span className="typo-title-1"
                                    style={{
                                        color: isOpen ? "var(--color-primary)" : "var(--color-text-primary)"
                                    }}
                                >{faq.question}</span>
                                <S.Arrow $open={isOpen}>+</S.Arrow>
                            </S.Question>
                            <S.AnswerWrapper $open={isOpen}>
                                <S.AnswerContent>
                                    <p className="typo-content-1"
                                        style={{paddingBottom: "12px"}}
                                    >{faq.description}</p>
                                    {faq.link?.length > 0 && (
                                        <S.LinkList>
                                            {faq.link.map((link, idx) => (
                                                <NavigateText key={idx}
                                                    text={link.label}
                                                    path={link.path}
                                                />
                                            ))}
                                        </S.LinkList>
                                    )}
                                </S.AnswerContent>
                            </S.AnswerWrapper>
                        </S.FaqItem>
                    );
                })}
            </S.FaqList>

            <NavigateText
                text="FAQ 전체 보기"
                path="/guide/FAQ"
            />
        </S.Container>
    );
};

export default Faq;
