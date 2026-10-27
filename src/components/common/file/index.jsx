import { getErrorMessage } from "@/apis/error";
import * as F from "@/apis/file";
import clip from "@/assets/icon/icon_clip.svg";
import Button from "@/components/common/button/default";
import { useToast } from "@/contexts/toastContext";
import { useState } from "react";
import * as S from "./styles";

const Attachment = ({ file, id }) => {
    const { showToast } = useToast();
    const [downloading, setDownloading] = useState(false);

    if (!file) return null;

    const fileName = file.split("/").pop();

    const handleDownload = async () => {
        if (downloading) return;

        setDownloading(true);

        try {
            const response = await F.downloadPostFile(id, file);

            const url = URL.createObjectURL(response.data);
            const link = document.createElement("a");

            link.href = url;
            link.download = fileName;

            document.body.appendChild(link);
            link.click();
            link.remove();

            URL.revokeObjectURL(url);
        } catch (error) {
            showToast(getErrorMessage(error));
        } finally {
            setDownloading(false);
        }
    };

    return (
        <S.Container>
            <S.FileInformation>
                <img src={clip} width="12px" />
                <span className="typo-content-3"
                    style={{color: "var(--color-primary)"}}
                >
                    {fileName}
                </span>
            </S.FileInformation>
            <Button
                text="저장"
                size="small"
                onClick={handleDownload}
                style={{fontSize: "12px"}}
            />
        </S.Container>
    );
};

export default Attachment;