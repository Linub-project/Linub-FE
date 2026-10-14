import { EXAM_MODE_DESCRIPTION } from "@/constants/examModeDescription";
import * as S from "./styles";

const ModeSection = ({ mode, setMode }) => {
    const descriptions = EXAM_MODE_DESCRIPTION.find(item => item.key === mode).description;

    return (
        <S.Container>
            <S.ModeArea>
                <S.ModeItem $isSelected={mode==="FREE"} onClick={() => setMode("FREE")}
                    className={mode === "FREE" ? "typo-title-1" : "typo-content-1"}
                >자유 모드</S.ModeItem>
                <S.ModeItem $isSelected={mode==="MOCK"} onClick={() => setMode("MOCK")}
                    className={mode === "MOCK" ? "typo-title-1" : "typo-content-1"}
                >시험 모드</S.ModeItem>
            </S.ModeArea>
            <S.DescriptionArea>
                <S.DescriptionTitle className="typo-content-2">
                    시험 시작 전!
                </S.DescriptionTitle>
                {descriptions.map((item, idx) => (
                    <S.Description key={idx}>
                        <S.DescriptionNumber>
                            {String(idx + 1).padStart(2, "0")}
                        </S.DescriptionNumber>

                        <span className="typo-content-2">
                            {item}
                        </span>
                    </S.Description>
                ))}
            </S.DescriptionArea>
        </S.Container>
    );
}

export default ModeSection;