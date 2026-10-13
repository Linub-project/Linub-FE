import * as A from "@/apis/admin";
import { getErrorMessage } from "@/apis/error";
import Button from "@/components/common/button/default";
import Input from "@/components/common/input/default";
import { useToast } from "@/contexts/toastContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const AddProblemWithFile = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const [file, setFile] = useState(null);
    const [isSend, setIsSend] = useState(false);
    const [buttonText, setButtonText] = useState("등록");

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) {
            return;
        }

        setFile(file);
    };

    const createProblemForm = () => {
        const formData = new FormData();
        if (file) {
            formData.append("file", file);
        }

        return formData;
    };

    const handleSubmit = async () => {
        if (isSend) return;

        setIsSend(true);
        setButtonText("등록 중");

        try {
            const formData = createProblemForm();

            await A.createProblemWithFile(formData);

            showToast("문제가 전부 등록되었습니다.");
            setButtonText("등록 완료");
            setFile(null);
        } catch (error) {
            showToast(getErrorMessage(error));
            setButtonText("등록");
        } finally {
            setIsSend(false);
        }
    };

    return (
        <S.Container>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <Button
                    onClick={() => navigate(-1)}
                    text="← 뒤로가기"
                    variant="tertiary"
                    size="small"
                />
            </div>
            <S.InputArea>
                <p
                    className="typo-title-1"
                    style={{ color: "var(--color-text-default)" }}
                >file</p>
                <Input
                    type="file"
                    accept="json"
                    onChange={handleFileChange}
                />
            </S.InputArea>
            <Button
                onClick={handleSubmit}
                text={buttonText}
                width="100%"
                loading={isSend}
                disabled={!file}
            />
        </S.Container>
    );
}

export default AddProblemWithFile;