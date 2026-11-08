import { getErrorMessage } from "@/apis/error";
import * as SS from "@/apis/support";
import Button from "@/components/common/button/default";
import Input from "@/components/common/input/default";
import Inquiry from "@/components/supportView/inquiry";
import { useToast } from "@/contexts/toastContext";
import { useState } from "react";
import * as S from "./styles";

const SupportView = () => {
    const {showToast} = useToast();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [buttonText, setButtonText] = useState("문의 확인하기");
    const [isSend, setIsSend] = useState(false);
    const [inquire, setInquire] = useState(null);

    const handleSearch = async () => {
        if(isSend) return;
        setIsSend(true);
        setButtonText("등록 중");
        try {
            const form = {
                password: password
            }
            const response = await SS.getInquiry(id, form);
            setInquire(response.data);
        } catch (error) {
            showToast(getErrorMessage(error));
            setPassword("");
        } finally {
            setIsSend(false);
            setButtonText("문의 확인하기");
        }
    }

    return (
        <S.Container>
            <S.SubContainer>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px"
                    }}
                >
                    <p
                        className="typo-heading-1"
                        style={{color: "var(--color-text-primary)", marginBottom: "6px"}}
                    >내 문의 조회</p>
                    <p
                        className="typo-content-1"
                        style={{color: "var(--color-text-label)"}}
                    >문의 작성 후 이메일로 발급받은 문의 아이디와 설정한 비밀번호를 입력해 주세요.</p>
                </div>
                <S.MainArea>
                    <S.InputArea>
                        <p
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >문의 아이디</p>
                        <Input
                            type="text"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="문의 아이디를 입력해 주세요."
                        />
                    </S.InputArea>
                    <S.InputArea>
                        <p
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >비밀번호</p>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => {
                                if(e.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                            placeholder="비밀번호를 입력해 주세요."
                        />
                    </S.InputArea>
                    <Button
                        text={buttonText}
                        loading={isSend}
                        loadingText="조회 중"
                        disabled={!id || !password}
                        onClick={handleSearch}
                    />
                </S.MainArea>
                {inquire && <Inquiry inquire={inquire} />}
            </S.SubContainer>
        </S.Container>
    );
}

export default SupportView;