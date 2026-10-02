import * as A from "@/apis/admin";
import { getErrorMessage } from "@/apis/error";
import Button from "@/components/common/button/default";
import Input from "@/components/common/input/default";
import { TextArea } from "@/components/common/input/textarea/styles";
import { useToast } from "@/contexts/toastContext";
import useDictionaryForm from "@/hooks/useDictionaryForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const AddFile = () => {
    const {
        values,
        handlers,
        createRequest,
        resetForm
    } = useDictionaryForm("FILE");
    const { showToast } = useToast();
    const navigate = useNavigate();
    const [tagText, setTagText] = useState("");
    const [concepts, setConcepts] = useState([]);
    const [commands, setCommands] = useState([]);
    const [files, setFiles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isSend, setIsSend] = useState(false);
    const [buttonText, setButtonText] = useState("등록");
    
    const fetchCategories = async () => {
        try {
            const response = await A.getAllCategories();
            setCategories(response.data);
        } catch (error) {

        }
    }

    const fetchAllDictionary = async () => {
        try {
            const response = await A.getAllDictionary();
            setConcepts(response.data.filter(item => item.type === "CONCEPT"));
            setCommands(response.data.filter(item => item.type === "COMMAND"));
            setFiles(response.data.filter(item => item.type === "FILE"));
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchCategories();
        fetchAllDictionary();
    }, []);

    const handleSubmit = async () => {
        setIsSend(true);
        try {
            const request = createRequest();

            await A.createDictionary(request);
            setTimeout(() => setButtonText("등록 완료"), 3000);
            resetForm();
        } catch (error) {
            showToast(getErrorMessage(error));
        } finally {
            setButtonText("등록");
            setIsSend(false);
        }
    };

    return (
        <S.Container>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <Button
                    onClick={() => navigate(-1)}
                    text="← 뒤로가기"
                    variant="tertiary"
                    size="small"
                />
                <Button
                    onClick={resetForm}
                    text="초기화"
                    variant="quinary"
                    size="small"
                />
            </div>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >topic *</p>
                <Input
                    value={values.basic.topic}
                    onChange={(e) =>
                        handlers.handleBasicChange(
                            "topic",
                            e.target.value
                        )
                    }
                    autofocus={true}
                />
            </S.InputArea>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >summary *</p>
                <Input
                    value={values.basic.summary}
                    onChange={(e) =>
                        handlers.handleBasicChange(
                            "summary",
                            e.target.value
                        )
                    }
                />
            </S.InputArea>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >content *</p>
                <TextArea
                    value={values.basic.content}
                    onChange={(e) =>
                        handlers.handleBasicChange(
                            "content",
                            e.target.value
                        )
                    }
                    $h="360px"
                />
            </S.InputArea>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >example</p>
                {values.examples.map((example, index) => (
                    <div key={index}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "8px"
                            }}
                        >
                            <p
                                className="typo-title-2"
                                style={{color: "var(--color-text-default)"}}
                            >content</p>
                            <TextArea
                                value={example.content}
                                onChange={(e) =>
                                    handlers.handleExampleChange(
                                        index,
                                        "content",
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "8px"
                            }}
                        >
                            <p
                                className="typo-title-2"
                                style={{color: "var(--color-text-default)"}}
                            >description</p>
                            <Input
                                value={example.description}
                                onChange={(e) =>
                                    handlers.handleExampleChange(
                                        index,
                                        "description",
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                        <Button
                            onClick={() =>
                                handlers.handleExampleRemove(index)
                            }
                            text="제거"
                            variant="quinary"
                            size="small"
                            width="fit-content"
                        />
                    </div>
                ))}
                <Button
                    onClick={handlers.handleExampleAdd}
                    text="예시 추가"
                    size="small"
                    width="fit-content"
                />
            </S.InputArea>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{ color: "var(--color-text-default)" }}
                >path</p>
                <Input
                    value={values.fileInfo.path}
                    onChange={(e) =>
                        handlers.handleFileChange(
                            "path",
                            e.target.value
                        )
                    }
                />
            </S.InputArea>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{ color: "var(--color-text-default)" }}
                >format</p>
                <Input
                    value={values.fileInfo.format}
                    onChange={(e) =>
                        handlers.handleFileChange(
                            "format",
                            e.target.value
                        )
                    }
                />
            </S.InputArea>

            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{ color: "var(--color-text-default)" }}
                >fileFormatDescription</p>
                {values.fileFormatDescriptions.map((description, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "8px"
                            }}
                        >
                            <p
                                className="typo-title-2"
                                style={{
                                    color: "var(--color-text-default)"
                                }}
                            >name</p>
                            <Input
                                value={description.name}
                                onChange={(e) =>
                                    handlers.handleFileFormatDescriptionChange(
                                        index,
                                        "name",
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "8px"
                            }}
                        >
                            <p
                                className="typo-title-2"
                                style={{
                                    color: "var(--color-text-default)"
                                }}
                            >description</p>
                            <Input
                                value={description.description}
                                onChange={(e) =>
                                    handlers.handleFileFormatDescriptionChange(
                                        index,
                                        "description",
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                        <Button
                            onClick={() =>
                                handlers.handleFileFormatDescriptionRemove(index)
                            }
                            text="제거"
                            variant="quinary"
                            size="small"
                            width="fit-content"
                        />
                    </div>
                ))}

                <Button
                    onClick={handlers.handleFileFormatDescriptionAdd}
                    text="파일 형식 설명 추가"
                    size="small"
                    width="fit-content"
                />
            </S.InputArea>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{ color: "var(--color-text-default)" }}
                >relation</p>
                <p
                    className="typo-title-2"
                    style={{ color: "var(--color-text-default)" }}
                >categories</p>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px"
                    }}
                >
                    {categories.map(cate => {
                        const isSelected = values.categories.includes(cate.id);
                        return (
                            <button
                                key={cate.id}
                                type="button"
                                onClick={() =>
                                    handlers.handleCategoryToggle(
                                        cate.id
                                    )
                                }
                                style={{
                                    padding: "4px 8px",
                                    border: "1px solid var(--color-border)",
                                    cursor: "pointer",
                                    backgroundColor: isSelected ? "var(--color-primary-bg)" : "var(--white)",
                                    color: isSelected ? "var(--color-primary)" : "var(--color-text-default)"
                                }}
                            >{cate.code}</button>
                        );
                    })}
                </div>
                <p
                    className="typo-title-2"
                    style={{ color: "var(--color-text-default)" }}
                >concepts</p>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px"
                    }}
                >
                    {concepts.map(concept => {
                        const isSelected =values.relatedDictionaries.CONCEPT.includes(concept.id);
                        return (
                            <button
                                key={concept.id}
                                type="button"
                                onClick={() =>
                                    handlers.handleRelatedDictionaryToggle(
                                        "CONCEPT",
                                        concept.id
                                    )
                                }
                                style={{
                                    padding: "4px 8px",
                                    border: "1px solid var(--color-border)",
                                    cursor: "pointer",
                                    backgroundColor: isSelected ? "var(--color-primary-bg)" : "var(--white)",
                                    color: isSelected ? "var(--color-primary)" : "var(--color-text-default)"
                                }}
                            >{concept.topic}</button>
                        );
                    })}
                </div>
                <p
                    className="typo-title-2"
                    style={{ color: "var(--color-text-default)" }}
                >commands</p>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px"
                    }}
                >
                    {commands.map(command => {
                        const isSelected =values.relatedDictionaries.COMMAND.includes(command.id);
                        return (
                            <button
                                key={command.id}
                                type="button"
                                onClick={() =>
                                    handlers.handleRelatedDictionaryToggle(
                                        "COMMAND",
                                        command.id
                                    )
                                }
                                style={{
                                    padding: "4px 8px",
                                    border: "1px solid var(--color-border)",
                                    cursor: "pointer",
                                    backgroundColor: isSelected ? "var(--color-primary-bg)" : "var(--white)",
                                    color: isSelected ? "var(--color-primary)" : "var(--color-text-default)"
                                }}
                            >{command.topic}</button>
                        );
                    })}
                </div>
                <p
                    className="typo-title-2"
                    style={{ color: "var(--color-text-default)" }}
                >files</p>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px"
                    }}
                >
                    {files.map(file => {
                        const isSelected =values.relatedDictionaries.FILE.includes(file.id);
                        return (
                            <button
                                key={file.id}
                                type="button"
                                onClick={() =>
                                    handlers.handleRelatedDictionaryToggle(
                                        "FILE",
                                        file.id
                                    )
                                }
                                style={{
                                    padding: "4px 8px",
                                    border: "1px solid var(--color-border)",
                                    cursor: "pointer",
                                    backgroundColor: isSelected ? "var(--color-primary-bg)" : "var(--white)",
                                    color: isSelected ? "var(--color-primary)" : "var(--color-text-default)"
                                }}
                            >{file.topic}</button>
                        );
                    })}
                </div>
            </S.InputArea>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{ color: "var(--color-text-default)" }}
                >tag</p>
                <div
                    style={{
                        display: "flex",
                        gap: "8px",
                        width: "100%"
                    }}
                >
                    <Input
                        value={tagText}
                        onChange={(e) => setTagText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handlers.handleTagAdd(tagText);
                                setTagText("");
                            }
                        }}
                    />
                    <Button
                        text="추가"
                        size="small"
                        onClick={() => {
                            handlers.handleTagAdd(tagText);
                            setTagText("");
                        }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px"
                    }}
                >
                    {values.tags.map(tag => (
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
                            <span className="typo-content-3"
                                style={{color: "var(--color-text-default)"}}
                            >
                                #{tag}
                            </span>
                            <Button
                                text="X"
                                size="small"
                                variant="senary"
                                onClick={() => handlers.handleTagRemove(tag)}
                            />
                        </div>
                    ))}
                </div>
            </S.InputArea>
            <Button
                onClick={handleSubmit}
                text={buttonText}
                width="100%"
                loading={isSend}
            />
        </S.Container>
    );
}

export default AddFile;