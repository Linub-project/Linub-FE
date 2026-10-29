import { getErrorMessage } from "@/apis/error";
import * as E from "@/apis/exam";
import Button from "@/components/common/button/default";
import { useToast } from "@/contexts/toastContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const PdfSection = ({
    mode,
    scope,
    selectedSubjectIds,
    exam,
    count,
    duration,
    isSend,
    setIsSend
}) => {
    const navigate = useNavigate();
    const {showToast} = useToast();
    const [buttonText, setButtonText] = useState("PDF 생성");
    const [isLoading, setIsLoading] = useState(false);

    if(mode === "FREE" && (!scope || selectedSubjectIds.length === 0)) {
        return;
    } else if(mode === "MOCK" && !exam.id) {
        return;
    }

    const handleSubmit = async () => {
        if (isSend) return;

        setIsSend(true);
        setIsLoading(true);
        setButtonText("PDF 파일 생성 중..");
        try {
            const request = {
                id: exam.id,
                scope: scope,
                type: "MULTIPLE",
                ids: selectedSubjectIds,
                count: count,
                problemWrongIds: null,
                examPdfType: mode
            }
            await E.createExamPdf(request);
            navigate(`/mypage/pdfs`);
        } catch (error) {
            showToast(getErrorMessage(error));
        } finally {
            setIsSend(false);
            setIsLoading(false);
        }
    }

    return (
        <S.Container>
            <S.TopArea>
                <div className="typo-content-3"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%"
                    }}
                >
                    <span
                        className="typo-title-1"
                        style={{color: "var(--color-secondary)"}}
                    >{mode === "FREE" ? "자유 시험" : exam.title}</span>
                    <span
                        style={{color: "var(--color-secondary)"}}
                    >{count}문제 · {mode === "FREE" ? "무제한" : `${duration}분 제한`}</span>
                </div>
                <Button
                    text={buttonText}
                    loading={isLoading}
                    loadingText="PDF 생성 중"
                    disabled={isSend}
                    style={{
                        backgroundColor: "var(--secondary-200)",
                        color: "var(--color-secondary)",
                    }}
                    onClick={handleSubmit}
                />
            </S.TopArea>
            <div
                className="typo-content-3"
                style={{
                    width: "100%",
                    textAlign: "center"
                }}
            >
                <p style={{color: "var(--color-danger)"}}>PDF 파일은 하루 최대 10회까지 생성할 수 있습니다.</p>
                <p style={{color: "var(--color-danger)"}}>생성된 PDF 파일은 7일 후 자동으로 영구 삭제되므로, 보관이 필요한 파일은 미리 다운로드해 주세요.</p>
                <p style={{color: "var(--color-danger)"}}>생성된 PDF 파일은 마이페이지 &gt; PDF 탭에서 확인할 수 있습니다.</p>
            </div>
        </S.Container>
    );
}

export default PdfSection;