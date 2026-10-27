import Button from "@/components/common/button/default";
import * as S from "./styles";

const Attachment = ({ file, onDownload }) => {
    if (!file) return null;

    const formatFileSize = (size) => {
        if (size == null) return "";
        if (size < 1024) return `${size} B`;
        if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
        return `${(size / (1024 * 1024)).toFixed(1)} MB`;
    };

    return (
        <S.Container>
            <S.FileInformation>
                <span className="typo-content-1">
                    {file.fileName}
                </span>
                {file.fileSize != null && (
                    <span className="typo-content-3">
                        {formatFileSize(file.fileSize)}
                    </span>
                )}
            </S.FileInformation>

            <Button
                text="다운로드"
                variant="tertiary"
                size="small"
                onClick={() => onDownload?.(file)}
            />
        </S.Container>
    );
};

export default Attachment;