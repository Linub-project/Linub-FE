import Input from "@/components/common/input/default";
import Radio from "@/components/common/input/radio";
import * as PS from "../styles";
import * as S from "./styles";

const Sequence1 = ({
    form,
    onChange
}) => {
    return (
        <S.Container>
            <PS.InputArea>
                <PS.LabelText $required>제목</PS.LabelText>
                <Input
                    value={form.title}
                    onChange={(e) => onChange("title", e.target.value)}
                    placeholder="문제를 요약하는 간단한 제목을 입력하세요"
                />
            </PS.InputArea>
            <PS.InputArea>
                <PS.LabelText $required>문제 유형</PS.LabelText>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: "16px"
                    }}
                >
                    <Radio
                        name="problemType"
                        value="MULTIPLE"
                        label="객관식"
                        checked={form.type === "MULTIPLE"}
                        onChange={(e) => onChange("type", e)}
                    />
                    <Radio
                        name="problemType"
                        value="SHORT"
                        label="주관식"
                        checked={form.type === "SHORT"}
                        onChange={(e) => onChange("type", e)}
                    />
                </div>
            </PS.InputArea>
        </S.Container>
    );
}

export default Sequence1;