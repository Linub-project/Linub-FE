import Button from "@/components/common/button/default";
import Textarea from "@/components/common/input/textarea";
import { useState } from "react";
import * as S from "./styles";

const MemoSection = ({ id, item }) => {
    const [memoText, setMemoText] = useState("");

    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
            >개인 메모</p>

            <Textarea
                placeholder="이 항목에 대한 메모를 남겨보세요.."
                value={memoText}
                onChange={(e) => setMemoText(e.target.value)}
                minHeight="150px"
            />

            <div
                style={{width: "100%", display: "flex", justifyContent: "flex-end"}}
            >
                <Button 
                    size="small"
                    text="저장"
                />
            </div>
        </S.Container>
    );
}

export default MemoSection;