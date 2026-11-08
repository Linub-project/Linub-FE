import { getErrorMessage } from "@/apis/error";
import * as SS from "@/apis/support";
import Button from "@/components/common/button/default";
import Input from "@/components/common/input/default";
import Select from "@/components/common/input/select";
import { TextArea } from "@/components/common/input/textarea/styles";
import { SUPPORT_TYPE } from "@/constants/supportType";
import { useToast } from "@/contexts/toastContext";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const PRECAUTIONS = [
    "모든 문의는 비공개로 등록되며, 작성자와 관리자만 내용을 확인할 수 있습니다.",
    "회원가입 없이 문의할 수 있으며, 문의 조회 시 문의 아이디와 작성 시 설정한 비밀번호가 필요합니다.",
    "문의가 정상적으로 접수되면 입력한 이메일 주소로 접수 확인 메일이 발송됩니다.",
    "관리자 답변이 등록되면 입력한 이메일 주소로 답변 완료 알림이 발송됩니다.",
    "문의 아이디와 비밀번호를 반드시 보관해 주세요. 비밀번호는 이메일로 발송되지 않습니다.",
    "하나의 문의에는 관리자 답변이 한 번만 등록되며, 추가 문의는 새로운 문의글로 작성해야 합니다.",
    "정확한 답변을 받을 수 있도록 문의 내용을 구체적으로 작성해 주세요.",
    "주민등록번호, 계정 비밀번호 등 민감한 개인정보는 문의 내용에 포함하지 마세요.",
    "문의 내용과 처리 결과는 고객지원 서비스 운영 및 답변 제공을 위해 사용됩니다.",
];

const SupportWrite = () => {
    const navigate = useNavigate();
    const {showToast} = useToast();
    const [type, setType] = useState("AUTH");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const fileInputRef = useRef(null);

    const [buttonText, setButtonText] = useState("등록");
    const [isSend, setIsSend] = useState(false);

    const handleImageChange = (e) => {
        const selectedFile = e.target.files?.[0];

        if (!selectedFile) return;

        setImage(selectedFile);
    };

    const handleFileRemove = () => {
        setImage(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSubmit = async () => {
        if(isSend) return;
        setIsSend(true);
        setButtonText("등록 중");
        try {
            const formData = new FormData();
            formData.append("type", type);
            formData.append("title", title.trim());
            formData.append("content", content.trim());
            formData.append("email", email);
            formData.append("password", password);

            if (image) {
                formData.append("image", image);
            }

            await SS.createInquiry(formData);
            showToast("문의 남기기 완료");
            navigate(`/support`);
        } catch (error) {
            showToast(getErrorMessage(error));
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
                    >문의 작성하기</p>
                    <p
                        className="typo-content-1"
                        style={{color: "var(--color-text-label)"}}
                    >Linub 이용 중 궁금한 점이나 불편한 사항을 작성해 주세요. 문의는 비공개로 등록되며 문의번호와 비밀번호를 이용해 답변을 확인할 수 있습니다.</p>
                </div>
                <S.PrecautionList>
                    {PRECAUTIONS.map((item, idx) => (
                        <S.PrecautionItem key={idx}>
                            <S.PrecautionNumber>
                                {String(idx + 1).padStart(2, "0")}
                            </S.PrecautionNumber>

                            <span className="typo-content-2">
                                {item}
                            </span>
                        </S.PrecautionItem>
                    ))}
                </S.PrecautionList>
                <S.MainArea>
                    <S.InputArea>
                        <p
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >문의 유형</p>
                        <Select
                            value={type}
                            options={SUPPORT_TYPE}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </S.InputArea>
                    <S.InputArea>
                        <p
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >제목</p>
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </S.InputArea>
                    <S.InputArea>
                        <p
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >내용</p>
                        <TextArea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            $h="240px"
                        />
                    </S.InputArea>
                    <S.InputArea>
                        <p
                            className="typo-title-1"
                            style={{ color: "var(--color-text-default)" }}
                        >이미지 첨부</p>
                        <Input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {image && (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px"
                                }}
                            >
                                <span
                                    className="typo-content-3"
                                    style={{
                                        color: "var(--color-text-default)",
                                        overflowWrap: "anywhere"
                                    }}
                                >첨부된 파일: {image.name}</span>
                                <Button
                                    text="X"
                                    variant="quinary"
                                    size="small"
                                    style={{fontSize: "12px", padding: "2px 6px"}}
                                    onClick={handleFileRemove}
                                />
                            </div>
                        )}
                    </S.InputArea>
                </S.MainArea>
                <S.MainArea>
                    <S.InputArea>
                        <p
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >이메일</p>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        />
                    </S.InputArea>
                    <S.InputArea>
                        <p
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >비밀번호 확인</p>
                        <Input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </S.InputArea>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: "12px"
                        }}
                    >
                        <Button
                            text="취소"
                            size="small"
                            variant="tertiary"
                            onClick={() => navigate(-1)}
                        />
                        <Button
                            text={buttonText}
                            loading={isSend}
                            size="small"
                            disabled={
                                !title
                                || !content
                                || !password
                                || !confirmPassword
                                || password !== confirmPassword
                            }
                            onClick={handleSubmit}
                        />
                    </div>

                </S.MainArea>
            </S.SubContainer>
        </S.Container>
    );
}

export default SupportWrite;