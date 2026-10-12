import * as A from "@/apis/admin";
import { getErrorMessage } from "@/apis/error";
import * as E from "@/apis/exam";
import Button from "@/components/common/button/default";
import Checkbox from "@/components/common/input/checkbox";
import Input from "@/components/common/input/default";
import Radio from "@/components/common/input/radio";
import Select from "@/components/common/input/select";
import { TextArea } from "@/components/common/input/textarea/styles";
import { PROBLEM_LANGUAGE } from "@/constants/problemLanguage";
import { SHORT_ANSWER_TYPE } from "@/constants/shortAnswerType";
import { useToast } from "@/contexts/toastContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const AddProblem = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const [subjects, setSubjects] = useState([]);
    const [problemType, setProblemType] = useState("MULTIPLE");
    const [question, setQuestion] = useState("");
    const [image, setImage] = useState(null);
    const [sourceCode, setSourceCode] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState(PROBLEM_LANGUAGE[0].value);
    const [options, setOptions] = useState([
        {content: "", isAnswer: false},
        {content: "", isAnswer: false},
        {content: "", isAnswer: false},
        {content: "", isAnswer: false}
    ]);
    const [shorts, setShorts] = useState([
        {answer: "", ignoreCase: true, type: SHORT_ANSWER_TYPE[0].value}
    ]);
    const [explanation, setExplanation] = useState("");
    const [selectedSubject, setSelectedSubject] = useState([]);
    const [tags, setTags] = useState([]);
    const [tagText, setTagText] = useState("");

    const [isSend, setIsSend] = useState(false);
    const [buttonText, setButtonText] = useState("등록");

    const fetchExamSubject = async () => {
        try {
            const response = await E.getAllExamSubjects();
            setSubjects(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchExamSubject();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) {
            setImage(null);
            return;
        }

        if (!file.type.startsWith("image/")) {
            showToast("이미지 파일만 업로드할 수 있습니다.");
            e.target.value = "";
            setImage(null);
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            showToast("이미지는 최대 5MB까지 업로드할 수 있습니다.");
            e.target.value = "";
            setImage(null);
            return;
        }

        setImage(file);
    };

    const handleOptionContentChange = (index, value) => {
        setOptions(prev =>
            prev.map((option, idx) => idx === index ? {...option, content: value} : option)
        );
    };

    const handleAnswerChange = (index) => {
        setOptions(prev =>
            prev.map((option, idx) => ({
                ...option,
                isAnswer: idx === index
            }))
        );
    };

    const handleShortTypeChange = (index, value) => {
        setShorts(prev => prev.map((item, idx) => idx === index ? { ...item, type: value } : item ));
    };

    const handleShortAnswerChange = (index, value) => {
        setShorts(prev => prev.map((item, idx) => idx === index ? { ...item, answer: value } : item ));
    };

    const handleShortIgnoreCaseChange = (index, value) => {
        setShorts(prev => prev.map((item, idx) => idx === index ? {...item, ignoreCase: value} : item));
    }

    const handleAddShortAnswer = () => {
        setShorts(prev => [...prev, {answer: "", ignoreCase: true, type: SHORT_ANSWER_TYPE[0].value}])
    }

    const handleRemoveShortAnswer = (index) => {
        if(shorts.length === 1) return;
        setShorts(prev => prev.filter((_, i) => i !== index))
    }

    const handleSubjectToggle = (id) => {
        setSelectedSubject(prev => prev.includes(id) ? prev.filter(subjectId => subjectId !== id) : [...prev, id]);
    };

    const handleTagAdd = () => {
        const value = tagText.trim();
        if (!value) return;

        setTags(prev => prev.includes(value) ? prev : [...prev, value]);
        setTagText("");
    };

    const handleTagRemove = (tag) => {
        setTags(prev => prev.filter(value => value !== tag));
    };

    const handleResetForm = () => {
        setSelectedSubject([]);
        setQuestion("");
        setProblemType("MULTIPLE");
        setImage(null);
        setSourceCode("");
        setSelectedLanguage(PROBLEM_LANGUAGE[0].value);
        setShorts({answer: "", ignoreCase: true, type: SHORT_ANSWER_TYPE[0].value});
        setExplanation("");
        setTags([]);
        setTagText("");
    }

    const createProblemForm = () => {
        const formData = new FormData();

        // 기본 정보
        formData.append("type", problemType);
        formData.append("question", question);
        formData.append("explanation", explanation);
        formData.append("sourceCode", sourceCode);
        formData.append("language", selectedLanguage);

        // 이미지
        if (image) {
            formData.append("file", image);
        }

        // 시험 과목
        selectedSubject.forEach((id, index) => {
            formData.append(`examSubjectIds[${index}]`, String(id));
        });

        // 태그
        tags.forEach((tag, index) => {
            formData.append(`tags[${index}]`, tag);
        });

        // 객관식
        if (problemType === "MULTIPLE") {
            options.forEach((option, index) => {
                formData.append(
                    `options[${index}].content`,
                    option.content
                );

                formData.append(
                    `options[${index}].isAnswer`,
                    String(option.isAnswer)
                );
            });
        }

        // 주관식
        if (problemType === "SHORT") {
            shorts.forEach((short, index) => {
                formData.append(
                    `shorts[${index}].answer`,
                    short.answer
                );

                formData.append(
                    `shorts[${index}].ignoreCase`,
                    String(short.ignoreCase)
                );

                formData.append(
                    `shorts[${index}].type`,
                    short.type
                );
            });
        }

        return formData;
    };

    const handleSubmit = async () => {
        if (isSend) return;

        setIsSend(true);
        setButtonText("등록 중");

        try {
            const formData = createProblemForm();

            await A.createProblem(formData);

            showToast("문제가 등록되었습니다.");
            setButtonText("등록 완료");
            handleResetForm();
        } catch (error) {
            showToast(getErrorMessage(error));
            setButtonText("등록");
        } finally {
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
            </div>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >type</p>
                <div
                    style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "center"
                    }}
                >
                    <Radio
                        name="type"
                        value="MULTIPLE"
                        label="객관식"
                        checked={problemType === "MULTIPLE"}
                        onChange={setProblemType}
                    />
                    <Radio
                        name="type"
                        value="SHORT"
                        label="주관식"
                        checked={problemType === "SHORT"}
                        onChange={setProblemType}
                    />
                </div>
            </S.InputArea>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >question</p>
                <Input
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    autofocus={true}
                />
            </S.InputArea>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{ color: "var(--color-text-default)" }}
                >image</p>
                <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </S.InputArea>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >source code</p>
                <TextArea
                    value={sourceCode}
                    onChange={(e) => setSourceCode(e.target.value)}
                />
            </S.InputArea>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >language</p>
                <Select
                    value={selectedLanguage}
                    options={PROBLEM_LANGUAGE}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                />
            </S.InputArea>
            {
                problemType === "MULTIPLE" &&
                    <S.InputArea>
                        <p
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >options</p>
                        <S.OptionListArea>
                            {options.map((item, idx) => (
                                <S.OptionArea key={idx}>
                                    <span
                                        className="typo-content-1"
                                        style={{color: "var(--color-text-default)"}}
                                    >{idx + 1}</span>
                                    <Radio
                                        name="isAnswer"
                                        value={idx}
                                        checked={item.isAnswer}
                                        onChange={handleAnswerChange}
                                        
                                    />
                                    <Input
                                        value={item.content}
                                        onChange={(e) =>handleOptionContentChange(idx, e.target.value)}
                                    />
                                </S.OptionArea>
                            ))}
                        </S.OptionListArea>
                    </S.InputArea>
            }{
                problemType === "SHORT" &&
                    <S.InputArea>
                        <p
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >shorts</p>
                        {
                            shorts.map((item, idx) => (
                                <S.ShortArea key={idx}>
                                    <Select
                                        style={{ flex: "1", width: "fit-content" }}
                                        value={item.type}
                                        options={SHORT_ANSWER_TYPE}
                                        onChange={(e) => handleShortTypeChange(idx, e.target.value)}
                                    />
                                    <Checkbox
                                        label="대소문자 무시"
                                        checked={item.ignoreCase}
                                        onChange={(checked) => handleShortIgnoreCaseChange(idx, checked)}
                                    />
                                    <Input
                                        value={item.answer}
                                        onChange={(e) => handleShortAnswerChange(idx, e.target.value)}
                                    />
                                    <Button
                                        onClick={() => handleRemoveShortAnswer(idx)}
                                        text="제거"
                                        size="small"
                                        variant="quinary"
                                        width="fit-content"
                                    />
                                </S.ShortArea>
                            ))
                        }
                        <Button
                            onClick={handleAddShortAnswer}
                            text="단답 추가"
                            size="small"
                            width="fit-content"
                        />
                    </S.InputArea>
            }
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >explanation</p>
                <TextArea
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                />
            </S.InputArea>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >exam subject</p>
                <S.SubjectArea>
                    {subjects.map((item) => (
                        <Checkbox
                            key={item.id}
                            id={item.id}
                            label={`${item.code} - ${item.subject}`}
                            checked={selectedSubject.includes(item.id)}
                            onChange={handleSubjectToggle}
                        />
                    ))}
                </S.SubjectArea>
            </S.InputArea>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{
                        color: "var(--color-text-default)"
                    }}
                >
                    tag
                </p>

                <div
                    style={{
                        display: "flex",
                        gap: "8px",
                        width: "100%"
                    }}
                >
                    <Input
                        value={tagText}
                        onChange={(e) =>
                            setTagText(e.target.value)
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
                        onClick={handleTagAdd}
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px"
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
                                onClick={() =>
                                    handleTagRemove(tag)
                                }
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
                disabled={
                    question.length === 0 ||
                    selectedSubject.length === 0
                }
            />
        </S.Container>
    );
}

export default AddProblem;