import * as C from "@/apis/community";
import Button from "@/components/common/button/default";
import Input from "@/components/common/input/default";
import Select from "@/components/common/input/select";
import { TextArea } from "@/components/common/input/textarea/styles";
import { COMMUNITY_ANNOUNCEMENT_TYPE } from "@/constants/communityAnnouncementType";
import { COMMUNITY_WRITE_BOARD } from "@/constants/communityWriteBoard";
import { useToast } from "@/contexts/toastContext";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { getErrorMessage } from "@/apis/error";

const PostWrite = ({user}) => {
    const navigate = useNavigate();
    const {showToast} = useToast();
    const [selectedBoard, setSelectedBoard] = useState("FREE");
    const [selectedAnnouncementType, setSelectedAnnouncementType] = useState("SERVICE");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const BOARD_SELECTION = COMMUNITY_WRITE_BOARD.filter(b => !b.role || user.role === b.role);

    const [buttonText, setButtonText] = useState("등록");
    const [isSend, setIsSend] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];

        if (!selectedFile) return;

        setFile(selectedFile);
    };

    const handleFileRemove = () => {
        setFile(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSubmit = async () => {
        setIsSend(true);
        setButtonText("등록 중");
        try {
            const formData = new FormData();
            formData.append("board", selectedBoard);
            if(selectedBoard === "ANNOUNCEMENT") formData.append("type", selectedAnnouncementType);
            formData.append("title", title.trim());
            formData.append("content", content);

            if (file) {
                formData.append("file", file);
            }

            const response = await C.createPost(formData);
            navigate(`/community/post/${response.data}`);
        } catch (error) {
            showToast(getErrorMessage(error));
        }
    }

    return (
        <S.Container>
            <S.SubContainer>
                <p
                    className="typo-heading-1"
                    style={{color: "var(--color-text-primary)", marginBottom: "6px"}}
                >게시글 작성</p>
                <S.MainArea>
                    <S.InputArea>
                        <p
                            className="typo-title-1"
                            style={{color: "var(--color-text-default)"}}
                        >게시판</p>
                        <Select
                            value={selectedBoard}
                            options={BOARD_SELECTION}
                            onChange={(e) => setSelectedBoard(e.target.value)}
                        />
                        {
                            selectedBoard === "ANNOUNCEMENT" &&
                                <Select
                                    value={selectedAnnouncementType}
                                    options={COMMUNITY_ANNOUNCEMENT_TYPE}
                                    onChange={(e) => setSelectedAnnouncementType(e.target.value)}
                                />
                        }
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
                        >파일/이미지 첨부</p>
                        <Input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*,.pdf,.txt,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip"
                            onChange={handleFileChange}
                        />
                        {file && (
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
                                >첨부된 파일: {file.name}</span>
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
                            onClick={() => navigate("/community")}
                        />
                        <Button
                            text={buttonText}
                            loading={isSend}
                            size="small"
                            onClick={handleSubmit}
                        />
                    </div>
                </S.MainArea>
            </S.SubContainer>
        </S.Container>
    );
}

export default PostWrite;