import Button from "@/components/common/button/default";
import Textarea from "@/components/common/input/textarea";
import { useAuth } from "@/contexts/authContext";
import { useEffect, useState } from "react";
import * as S from "./styles";
import * as D from "@/apis/dictionary";

const MemoSection = ({ id, item }) => {
    const [memoText, setMemoText] = useState("");
    const [isSend, setIsSend] = useState(false);
    const [buttonText, setButtonText] = useState("저장");
    const { user } = useAuth();

    const fetchUserMemo = async () => {
        try {
            const response = await D.getDictionaryMemo(item.id);
            setMemoText(response.data.content);
        } catch (error) {
            
        }
    };

    useEffect(() => {
        if (!user) {
            return;
        }

        fetchUserMemo();
    }, [user, item.id]);

    if (!user) {
        return null;
    }

    const handleMemoSaveButtonClick = async () => {
        setIsSend(true);
        try {
            await D.putDictionaryMemo(item.id, {content: memoText});
            setButtonText("저장 완료")
            setIsSend(false);
        } catch (error) {
            setButtonText("저장 실패");
        } finally {
            setTimeout(() => {
                setButtonText("저장");
            }, 3000)
        }
    }

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
                    text={buttonText}
                    loading={isSend}
                    onClick={() => handleMemoSaveButtonClick()}
                />
            </div>
        </S.Container>
    );
}

export default MemoSection;