import Input from "@/components/common/input/default";
import Radio from "@/components/common/input/radio";
import { TextArea } from "@/components/common/input/textarea/styles";
import { useState } from "react";
import * as PS from "../styles";
import * as S from "./styles";

const Sequence3 = ({
    form,
    onChange
}) => {
    const [answerInput, setAnswerInput] = useState("");

    const handleAnswerChange = (idx) => {
        const options = form.options.map((item, i) => ({
            ...item,
            isAnswer: i === idx
        }));

        onChange("options", options);
    };

    const handleShortAnswerAdd = (e) => {
        if (e.key !== "Enter" || e.nativeEvent.isComposing) return;

        e.preventDefault();

        const value = answerInput.trim();

        if (!value) return;

        const answers = (form.shortAnswers.answer || "")
            .split("\n")
            .filter(Boolean);

        if (answers.includes(value)) return;

        onChange("shortAnswers", {
            ...form.shortAnswers,
            answer: [...answers, value].join("\n")
        });

        setAnswerInput("");
    };

    const handleShortAnswerRemove = (idx) => {
        const answers = (form.shortAnswers.answer || "")
            .split("\n")
            .filter(Boolean)
            .filter((_, i) => i !== idx);

        onChange("shortAnswers", {
            ...form.shortAnswers,
            answer: answers.join("\n")
        });
    };

    return (
        <S.Container>
            <PS.InputArea>
                <PS.LabelText $required>정답</PS.LabelText>
                {
                    form.type === "MULTIPLE" ?
                        <S.OptionListArea>
                            {form.options.map((item, idx) => (
                                <S.OptionArea key={idx}>
                                    <Radio
                                        name="isAnswer"
                                        value={idx}
                                        checked={item.isAnswer}
                                        onChange={() => handleAnswerChange(idx)}
                                    />
                                    <span
                                        className="typo-content-1"
                                        style={{
                                            color: item.isAnswer ? "var(--color-primary)" : "var(--color-text-default)"
                                        }}
                                    >{item.content || `선택지 내용을 작성해주세요.`}</span>
                                </S.OptionArea>
                            ))}
                        </S.OptionListArea>
                        :
                        <>
                            <Input
                                value={answerInput}
                                onChange={(e) => setAnswerInput(e.target.value)}
                                onKeyDown={handleShortAnswerAdd}
                                placeholder="정답을 입력하고 Enter를 눌러주세요."
                            />
                            <S.AnswerList>
                                {(form.shortAnswers.answer || "")
                                    .split("\n")
                                    .filter(Boolean)
                                    .map((answer, idx) => (
                                        <S.AnswerItem key={idx}>
                                            <span className="typo-content-3">
                                                {answer}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => handleShortAnswerRemove(idx)}
                                                aria-label={`${answer} 삭제`}
                                            >
                                                ×
                                            </button>
                                        </S.AnswerItem>
                                    ))}
                            </S.AnswerList>
                        </>
                }
            </PS.InputArea>
            <PS.InputArea>
                <PS.LabelText $required>해설</PS.LabelText>
                <TextArea
                    value={form.explanation}
                    onChange={(e) => onChange("explanation", e.target.value)}
                    placeholder="왜 이 답이 정답인지 설명해주세요.&#10;오답 선택지가 틀린 이유도 포함하면 좋습니다."
                    $h="120px"
                />
            </PS.InputArea>
        </S.Container>
    );
}

export default Sequence3;