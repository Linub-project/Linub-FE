import image_disable from "@/assets/icon/icon_image_disable.svg";
import image_enable from "@/assets/icon/icon_image_enable.svg";
import sourcecode_disable from "@/assets/icon/icon_sourcecode_disable.svg";
import sourcecode_enable from "@/assets/icon/icon_sourcecode_enable.svg";
import Input from "@/components/common/input/default";
import Select from "@/components/common/input/select";
import { TextArea } from "@/components/common/input/textarea/styles";
import { PROBLEM_LANGUAGE } from "@/constants/problemLanguage";
import { useToast } from "@/contexts/toastContext";
import { useRef, useState } from "react";
import * as PS from "../styles";
import * as S from "./styles";
import Button from "@/components/common/button/default";

const Sequence2 = ({
    form,
    onChange
}) => {
    const { showToast } = useToast();
    const imageInputRef = useRef(null);
    const [openSourceCode, setOpenSourceCode] = useState(!!form.sourceCode);
    const [useImage, setUseImage] = useState(!!form.image);

    const handleOptionChange = (idx, value) => {
        const options = form.options.map((item, i) =>
            i === idx
                ? { ...item, content: value }
                : item
        );

        onChange("options", options);
    };

    const handleImageToggle = () => {
        imageInputRef.current?.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) {
            onChange("image", null);
            return;
        }

        if (!file.type.startsWith("image/")) {
            showToast("이미지 파일만 업로드할 수 있습니다.");
            e.target.value = "";
            onChange("image", null);
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            showToast("이미지는 최대 5MB까지 업로드할 수 있습니다.");
            e.target.value = "";
            onChange("image", null);
            return;
        }

        onChange("image", file);
        e.target.value = "";
    };

    return (
        <S.Container>
            <PS.InputArea>
                <PS.LabelText $required>본문</PS.LabelText>
                <S.QuestionArea>
                    <S.RefArea>
                        <span
                            className="typo-content-3"
                            style={{
                                color: form.image ? "var(--color-primary)" : "var(--color-text-default)",
                                display: "flex",
                                gap: "6px",
                                cursor: "pointer"
                            }}
                            onClick={handleImageToggle}
                        ><img
                            src={form.image ? image_enable : image_disable}
                            width="14px"
                        />이미지 추가</span>
                        <span
                            className="typo-content-3"
                            style={{
                                color: openSourceCode ? "var(--color-primary)" : "var(--color-text-default)",
                                display: "flex",
                                gap: "6px",
                                cursor: "pointer"
                            }}
                            onClick={() => {
                                if(openSourceCode) {
                                    onChange("sourceCode", "");
                                }
                                setOpenSourceCode(prev => !prev);
                            }}
                        >
                        <img
                            src={openSourceCode ? sourcecode_enable : sourcecode_disable}
                            width="14px"
                        />소스코드 추가</span>
                    </S.RefArea>
                    <TextArea
                        value={form.question}
                        onChange={(e) => onChange("question", e.target.value)}
                        placeholder="명확하고 오해 없는 표현으로 문제 내용을 입력해주세요."
                        style={{
                            border: "none",
                            borderRadius: "0",
                            boxShadow: "none"
                        }}
                        $h="120px"
                    />
                    {
                        openSourceCode &&
                        <TextArea
                            value={form.sourceCode}
                            onChange={(e) => onChange("sourceCode", e.target.value)}
                            placeholder="소스 코드를 입력해주세요. 실행 및 검증을 완료한 코드를 작성해주세요."
                            style={{
                                border: "none",
                                borderRadius: "0",
                                boxShadow: "none",
                                borderTop: "1px solid var(--color-border)",
                                backgroundColor: "var(--color-terminal-bg)",
                                color: "var(--color-border)"
                            }}
                            className="terminal typo-content-3"
                            $h="120px"
                            $pc="var(--color-text-label)"
                        />
                    }{form.image && (
                        <S.ImageArea>
                            <span
                                className="typo-content-3"
                                style={{
                                    color: "var(--color-primary)",
                                    overflowWrap: "anywhere"
                                }}
                            >
                                첨부된 이미지: {form.image.name}
                            </span>
                            <Button
                                text="X"
                                size="small"
                                variant="tertiary"
                                style={{fontSize: "8px", padding: "6px"}}
                                onClick={() => {
                                    onChange("image", null);
                                    setUseImage(false);
                                }}
                            >×</Button>
                        </S.ImageArea>
                    )}
                    <input
                        ref={imageInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                    />
                </S.QuestionArea>
            </PS.InputArea>
            {
                openSourceCode &&
                    <PS.InputArea>
                        <PS.LabelText $required>소스코드 언어</PS.LabelText>
                        <Select
                            value={form.language}
                            options={PROBLEM_LANGUAGE}
                            onChange={(e) => onChange("language", e.target.value)}
                        />
                    </PS.InputArea>
            }
            {
                form.type === "MULTIPLE" && <PS.InputArea>
                    <PS.LabelText $required>선택지</PS.LabelText>
                    <PS.LabelDescription>선택지는 항상 랜덤으로 출력됩니다.</PS.LabelDescription>
                    <S.OptionListArea>
                        {form.options.map((item, idx) => (
                            <S.OptionArea key={idx}>
                                <span
                                    className="typo-content-1"
                                    style={{ color: "var(--color-text-default)" }}
                                >
                                    {idx + 1}
                                </span>
                                <Input
                                    value={item.content}
                                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                                    
                                />
                            </S.OptionArea>
                        ))}
                    </S.OptionListArea>
                </PS.InputArea>
            }
        </S.Container>
    );
}

export default Sequence2;