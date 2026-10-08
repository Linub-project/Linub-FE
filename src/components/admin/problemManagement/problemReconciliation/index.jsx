import * as A from "@/apis/admin";
import { getErrorMessage } from "@/apis/error";
import * as E from "@/apis/exam";
import Button from "@/components/common/button/default";
import Checkbox from "@/components/common/input/checkbox";
import Input from "@/components/common/input/default";
import Radio from "@/components/common/input/radio";
import Select from "@/components/common/input/select";
import { TextArea } from "@/components/common/input/textarea/styles";
import { SkeletonBox } from "@/components/common/skeleton/style";
import { SHORT_ANSWER_TYPE } from "@/constants/shortAnswerType";
import { useToast } from "@/contexts/toastContext";
import { useEffect, useState } from "react";
import * as S from "./styles";
import Image from "@/components/common/image";

const createShort = () => ({
    id: null,
    answer: "",
    ignoreCase: true,
    type: SHORT_ANSWER_TYPE[0].value
});

const ProblemReconciliation = ({ problemId, onClose }) => {
    const { showToast } = useToast();
    const [buttonText, setButtonText] = useState("수정");
    const [subjects, setSubjects] = useState([]);
    const [form, setForm] = useState({
        question: "",
        explanation: "",
        type: "MULTIPLE",
        imageUrl: null,
        sourceCode: "",
        options: [],
        shorts: [],
        examSubjectIds: []
    });

    const [meta, setMeta] = useState({
        solvedCnt: 0,
        correctCnt: 0,
    });

    const [imageFile, setImageFile] = useState(null);
    const [removeImage, setRemoveImage] = useState(false);

    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (problemId == null) return;

        let cancelled = false;

        const fetchProblem = async () => {
            setLoading(true);

            try {
                const [problemResponse, subjectResponse] =
                    await Promise.all([
                        A.getProblemDetail(problemId),
                        E.getAllExamSubjects()
                    ]);

                if (cancelled) return;

                const data = problemResponse.data;

                setSubjects(subjectResponse.data ?? []);

                setForm({
                    question: data.question ?? "",
                    explanation: data.explanation ?? "",
                    type: data.type ?? "MULTIPLE",

                    imageUrl: data.imageUrl ?? null,
                    sourceCode: data.sourceCode ?? "",

                    options: (data.options ?? []).map(option => ({
                        id: option.id,
                        content: option.content ?? "",
                        isAnswer:
                            option.id === data.answer?.answerId
                    })),

                    shorts: (data.answer?.shorts ?? []).map(short => ({
                        id: short.id,
                        answer: short.answer ?? "",
                        ignoreCase: short.ignoreCase ?? true,
                        type:
                            short.type ??
                            SHORT_ANSWER_TYPE[0].value
                    })),

                    examSubjectIds:
                        (data.subjects ?? []).map(subject => subject.id)
                });

                setMeta({
                    solvedCnt: data.solvedCnt ?? 0,
                    correctCnt: data.correctCnt ?? 0,
                });

            } catch (error) {
                if (!cancelled) {
                    showToast(getErrorMessage(error));
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        fetchProblem();

        return () => {
            cancelled = true;
        };
    }, [problemId]);

    // 일반 필드 변경
    const handleFieldChange = (field, value) => {
        setForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // 객관식 선택지 내용 변경
    const handleOptionContentChange = (index, value) => {
        setForm(prev => ({
            ...prev,
            options: prev.options.map((option, idx) =>
                idx === index
                    ? { ...option, content: value }
                    : option
            )
        }));
    };

    // 객관식 정답 변경
    const handleAnswerChange = (index) => {
        setForm(prev => ({
            ...prev,
            options: prev.options.map((option, idx) => ({
                ...option,
                isAnswer: idx === index
            }))
        }));
    };

    // 주관식 필드 변경
    const handleShortChange = (index, field, value) => {
        setForm(prev => ({
            ...prev,
            shorts: prev.shorts.map((short, idx) =>
                idx === index
                    ? { ...short, [field]: value }
                    : short
            )
        }));
    };

    const handleAddShort = () => {
        setForm(prev => ({
            ...prev,
            shorts: [...prev.shorts, createShort()]
        }));
    };

    const handleRemoveShort = (index) => {
        setForm(prev => {
            if (prev.shorts.length <= 1) return prev;

            return {
                ...prev,
                shorts: prev.shorts.filter((_, idx) => idx !== index)
            };
        });
    };

    // 시험 과목 다중 선택
    const handleSubjectToggle = (id) => {
        setForm(prev => ({
            ...prev,
            examSubjectIds: prev.examSubjectIds.includes(id)
                ? prev.examSubjectIds.filter(value => value !== id)
                : [...prev.examSubjectIds, id]
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            showToast("이미지 파일만 업로드할 수 있습니다.");
            e.target.value = "";
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            showToast("이미지는 최대 5MB까지 업로드할 수 있습니다.");
            e.target.value = "";
            return;
        }

        setImageFile(file);

        e.target.value = "";
    };

    const handleImageRemove = () => {
        setImageFile(null);
        setRemoveImage(true);
    };

    const handleSubmit = async () => {
        if (isSaving) return;

        setIsSaving(true);
        setButtonText("수정 중");

        try {
            const formData = new FormData();

            formData.append("type", form.type);
            formData.append("question", form.question);
            formData.append("explanation", form.explanation);
            formData.append("sourceCode", form.sourceCode);
            formData.append(
                "removeImage",
                String(removeImage && !imageFile)
            );

            form.examSubjectIds.forEach((id, index) => {
                formData.append(`examSubjectIds[${index}]`, String(id));
            });

            if (form.type === "MULTIPLE") {
                form.options.forEach((option, index) => {
                    formData.append(`options[${index}].id`, String(option.id));
                    formData.append(`options[${index}].content`, option.content);
                    formData.append(`options[${index}].isAnswer`, String(option.isAnswer));
                });
            }

            if (form.type === "SHORT") {
                form.shorts.forEach((short, index) => {
                    if (short.id != null) {
                        formData.append(`shorts[${index}].id`, String(short.id));
                    }

                    formData.append(`shorts[${index}].answer`, short.answer);
                    formData.append(`shorts[${index}].ignoreCase`, String(short.ignoreCase));
                    formData.append(`shorts[${index}].type`, short.type);
                });
            }

            if (imageFile) {
                formData.append("file", imageFile);
            }

            await A.updateProblem(problemId, formData);

            showToast("수정 완료");
            onClose?.();

        } catch (error) {
            showToast(getErrorMessage(error));
        } finally {
            setIsSaving(false);
            setButtonText("수정");
        }
    };

    if (loading) {
        return <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "16px"
        }}>
            {
                Array.from({length: 6}).map((_, idx) => (
                    <SkeletonBox key={idx} $h="80px" />
                ))
            }
        </div>;
    }

    return (
        <S.Container>
            <S.InputArea>
                <p className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >type</p>
                <div style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center"
                }}>
                    <Radio
                        name="editProblemType"
                        value="MULTIPLE"
                        label="객관식"
                        checked={form.type === "MULTIPLE"}
                    />

                    <Radio
                        name="editProblemType"
                        value="SHORT"
                        label="주관식"
                        checked={form.type === "SHORT"}
                    />
                </div>
            </S.InputArea>

            <S.InputArea>
                <p className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >question</p>

                <Input
                    value={form.question}
                    onChange={e =>
                        handleFieldChange("question", e.target.value)
                    }
                />
            </S.InputArea>

            {form.type === "MULTIPLE" && (
                <S.InputArea>
                    <p className="typo-title-1"
                        style={{color: "var(--color-text-default)"}}
                    >options</p>

                    <S.OptionListArea>
                        {form.options.map((option, idx) => (
                            <S.OptionArea key={option.id ?? `new-${idx}`}>
                                <span className="typo-content-1">
                                    {idx + 1}
                                </span>

                                <Radio
                                    name="editIsAnswer"
                                    value={idx}
                                    checked={option.isAnswer}
                                    onChange={() => handleAnswerChange(idx)}
                                />

                                <Input
                                    value={option.content}
                                    onChange={e =>
                                        handleOptionContentChange(
                                            idx,
                                            e.target.value
                                        )
                                    }
                                />
                            </S.OptionArea>
                        ))}
                    </S.OptionListArea>
                </S.InputArea>
            )}

            {form.type === "SHORT" && (
                <S.InputArea>
                    <p className="typo-title-1"
                        style={{color: "var(--color-text-default)"}}
                    >shorts</p>

                    {form.shorts.map((short, idx) => (
                        <S.ShortArea key={short.id ?? `new-${idx}`}>
                            <Select
                                style={{
                                    flex: 1,
                                    width: "fit-content"
                                }}
                                value={short.type}
                                options={SHORT_ANSWER_TYPE}
                                onChange={e =>
                                    handleShortChange(
                                        idx,
                                        "type",
                                        e.target.value
                                    )
                                }
                            />

                            <Checkbox
                                id={`edit-short-${idx}`}
                                label="대소문자 무시"
                                checked={short.ignoreCase}
                                onChange={() =>
                                    handleShortChange(
                                        idx,
                                        "ignoreCase",
                                        !short.ignoreCase
                                    )
                                }
                            />

                            <Input
                                value={short.answer}
                                onChange={e =>
                                    handleShortChange(
                                        idx,
                                        "answer",
                                        e.target.value
                                    )
                                }
                            />

                            <Button
                                text="제거"
                                size="small"
                                variant="quinary"
                                width="fit-content"
                                disabled={form.shorts.length <= 1}
                                onClick={() => handleRemoveShort(idx)}
                            />
                        </S.ShortArea>
                    ))}

                    <Button
                        text="단답 추가"
                        size="small"
                        width="fit-content"
                        onClick={handleAddShort}
                    />
                </S.InputArea>
            )}

            <S.InputArea>
                <p className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >explanation</p>

                <TextArea
                    value={form.explanation}
                    onChange={e =>
                        handleFieldChange("explanation", e.target.value)
                    }
                />
            </S.InputArea>

            <S.InputArea>
                <p className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >exam subject</p>

                <S.SubjectArea>
                    {subjects.map(subject => (
                        <Checkbox
                            key={subject.id}
                            id={subject.id}
                            label={`${subject.code} - ${subject.subject}`}
                            checked={form.examSubjectIds.includes(subject.id)}
                            onChange={() => handleSubjectToggle(subject.id)}
                        />
                    ))}
                </S.SubjectArea>
            </S.InputArea>

            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{ color: "var(--color-text-default)" }}
                >
                    image
                </p>

                {form.imageUrl && !removeImage ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "12px"
                        }}
                    >
                        <Image src={form.imageUrl} />

                        <Button
                            text="이미지 삭제"
                            size="small"
                            variant="quinary"
                            width="fit-content"
                            onClick={handleImageRemove}
                        />
                    </div>
                ) : (
                    <>
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />

                        {imageFile && (
                            <span className="typo-content-1">
                                선택한 이미지: {imageFile.name}
                            </span>
                        )}
                    </>
                )}
            </S.InputArea>

            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{ color: "var(--color-text-default)" }}
                >
                    source code
                </p>

                <TextArea
                    value={form.sourceCode}
                    onChange={e =>
                        handleFieldChange("sourceCode", e.target.value)
                    }
                    placeholder="소스코드를 입력하세요."
                    style={{
                        width: "100%",
                        minHeight: "160px",
                        fontFamily: "JetBrains Mono, monospace"
                    }}
                />
            </S.InputArea>

            <S.InputArea>
                <p className="typo-title-1"
                    style={{color: "var(--color-text-default)"}}
                >statistics</p>
                <span className="typo-content-1">
                    풀이 수: {meta.solvedCnt}
                </span>
                <span className="typo-content-1">
                    정답 수: {meta.correctCnt}
                </span>
                <span className="typo-content-1">
                    정답률: {meta.solvedCnt > 0 ? `${(meta.correctCnt / meta.solvedCnt * 100).toFixed(1)}%` : "없음"}
                </span>
            </S.InputArea>

            <S.ButtonArea>
                <Button
                    text={buttonText}
                    width="90%"
                    loading={isSaving}
                    onClick={handleSubmit}
                />
                <Button
                    text="취소"
                    width="10%"
                    variant="tertiary"
                    onClick={onClose}
                />
            </S.ButtonArea>
        </S.Container>
    );
};

export default ProblemReconciliation;