import * as A from "@/apis/admin";
import Button from "@/components/common/button/default";
import { SkeletonBox } from "@/components/common/skeleton/style";
import { useEffect, useState } from "react";
import * as S from "./styles";
import Checkbox from "@/components/common/input/checkbox";

const DictionaryReconciliation = ({
    item,
    onSuccess
}) => {
    const [dictionaryItems, setDictionaryItems] = useState([]);
    const [categoryItems, setCategoryItems] = useState([]);

    const [relations, setRelations] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    const [tagInput, setTagInput] = useState("");

    const [loading, setLoading] = useState(true);
    const [isSend, setIsSend] = useState(false);
    const [buttonText, setButtonText] = useState("수정");

    const concepts = dictionaryItems.filter(
        dictionary =>
            dictionary.type === "CONCEPT" &&
            dictionary.id !== item.id
    );

    const commands = dictionaryItems.filter(
        dictionary =>
            dictionary.type === "COMMAND" &&
            dictionary.id !== item.id
    );

    const files = dictionaryItems.filter(
        dictionary =>
            dictionary.type === "FILE" &&
            dictionary.id !== item.id
    );


    const fetchData = async () => {
        try {
            setLoading(true);

            const [
                relatedInfoResponse,
                categoriesResponse,
                dictionariesResponse
            ] = await Promise.all([
                A.getAllRelatedInfo(item.id),
                A.getAllCategories(),
                A.getAllDictionary()
            ]);

            const relatedInfo = relatedInfoResponse.data;

            setCategoryItems(
                categoriesResponse.data ?? []
            );

            setDictionaryItems(
                dictionariesResponse.data ?? []
            );

            setCategories(
                relatedInfo.categories?.map(
                    category => category.id
                ) ?? []
            );

            setRelations(
                relatedInfo.relations?.map(
                    relation => relation.id
                ) ?? []
            );

            setTags(
                relatedInfo.tags?.map(
                    tag => tag.name
                ) ?? []
            );

        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!item?.id) return;
        fetchData();
    }, [item?.id]);

    const handleRelationToggle = (id) => {
        setRelations(prev =>
            prev.includes(id)
                ? prev.filter(
                    relationId =>
                        relationId !== id
                )
                : [
                    ...prev,
                    id
                ]
        );
    };

    const handleCategoryToggle = (id) => {
        setCategories(prev =>
            prev.includes(id)
                ? prev.filter(
                    categoryId =>
                        categoryId !== id
                )
                : [
                    ...prev,
                    id
                ]
        );
    };

    const handleTagAdd = () => {
        const value = tagInput.trim();

        if (!value) {
            return;
        }

        if (tags.includes(value)) {
            setTagInput("");
            return;
        }

        setTags(prev => [
            ...prev,
            value
        ]);

        setTagInput("");
    };

    const handleTagRemove = (tag) => {
        setTags(prev =>
            prev.filter(
                value => value !== tag
            )
        );
    };

    const handleSubmit = async () => {
        setIsSend(true);
        try {
            const request = {
                categories,
                relations,
                tags
            };

            console.log(request);

            await A.putRelatedInfo(
                item.id,
                request
            );
            setTimeout(() => setButtonText("수정 완료"), 3000);
            onSuccess();
        } catch (error) {
        } finally {
            setIsSend(false);
            setButtonText("수정");
        }
    };


    if (loading) {
        return <SkeletonBox $h="80%" />;
    }


    return (
        <S.Container>
            <section>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)", marginBottom: "8px"}}
                >관련 개념</p>
                <S.ListArea>
                    {concepts.map(concept => (
                        <Checkbox
                            key={concept.id}
                            id={concept.id}
                            label={concept.topic}
                            checked={relations.includes(concept.id)}
                            onChange={handleRelationToggle}
                        />
                    ))}
                </S.ListArea>
            </section>

            <section>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)", marginBottom: "8px"}}
                >관련 명령어</p>
                <S.ListArea>
                    {commands.map(command => (
                        <Checkbox
                            key={command.id}
                            id={command.id}
                            label={command.topic}
                            checked={relations.includes(command.id)}
                            onChange={handleRelationToggle}
                        />
                    ))}
                </S.ListArea>
            </section>

            <section>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)", marginBottom: "8px"}}
                >관련 파일</p>
                <S.ListArea>
                    {files.map(file => (
                        <Checkbox
                            key={file.id}
                            id={file.id}
                            label={file.topic}
                            checked={relations.includes(file.id)}
                            onChange={handleRelationToggle}
                        />
                    ))}
                </S.ListArea>
            </section>

            <section>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)", marginBottom: "8px"}}
                >카테고리</p>
                <S.ListArea>
                    {categoryItems.map(category => (
                        <Checkbox
                            key={category.id}
                            id={category.id}
                            label={category.code}
                            checked={categories.includes(category.id)}
                            onChange={handleCategoryToggle}
                        />
                    ))}
                </S.ListArea>
            </section>

            <section>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)", marginBottom: "8px"}}
                >태그</p>
                <div
                    style={{
                        display: "flex",
                        gap: "8px",
                        marginBottom: "8px"
                    }}
                >
                    <input
                        type="text"
                        value={tagInput}
                        onChange={(e) =>
                            setTagInput(
                                e.target.value
                            )
                        }
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                handleTagAdd();
                            }
                        }}
                    />

                    <Button
                        text="추가"
                        size="small"
                        onClick={() => handleTagAdd}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                    }}
                >
                    {tags.map(tag => (
                        <div
                            key={tag}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                                padding: "4px 6px",
                                border: "1px solid var(--color-border)",
                                backgroundColor: "var(--color-bg-subtle)"
                            }}
                        >
                            <span
                                className="typo-content-3"
                                style={{
                                    color: "var(--color-text-default)"
                                }}
                            >
                                #{tag}
                            </span>

                            <Button
                                text="X"
                                size="small"
                                variant="senary"
                                onClick={() => handleTagRemove(tag)}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                    gap: "12px"
                }}
            >
                <Button
                    text={buttonText}
                    onClick={handleSubmit}
                    loading={isSend}
                />
                <Button
                    text="취소"
                    variant="tertiary"
                    onClick={onSuccess}
                />
            </div>
        </S.Container>
    );
};

export default DictionaryReconciliation;