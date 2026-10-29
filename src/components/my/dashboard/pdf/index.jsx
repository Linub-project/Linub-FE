import * as E from "@/apis/exam";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import { useToast } from "@/contexts/toastContext";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import * as S from "./styles";

const PdfList = () => {
    const { showToast } = useToast();
    const [pdfs, setPdfs] = useState([]);

    const fetchPdfs = async () => {
        try {
            const response = await E.getAllExamPdfs();
            setPdfs(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchPdfs();
    }, []);

    if(!pdfs) {
        return <div></div>;
    }

    return (
        <S.Container>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "28px"
                }}
            >
                <div>
                    <p
                        className="typo-title-1"
                        style={{color: "var(--color-text-primary)"}}
                    >생성한 시험지</p>
                    <p
                        className="typo-content-3"
                        style={{color: "var(--color-text-default)"}}
                    >시험 PDF 파일은 최대 일주일간 다운로드할 수 있습니다.</p>
                </div>
            </div>
            {
                pdfs.length > 0 ?
                    <S.PdfList>
                        {
                            pdfs.map((item) => {
                                return <S.PdfItem key={item.id}>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            gap: "6px",
                                            flex: 1
                                        }}
                                    >
                                        <span
                                            className="typo-content-3"
                                            style={{color: "var(--color-text-default)"}}
                                        >{formatDate(item.createdAt, DATE_FORMAT.DOT_DATE_TIME)}</span>
                                        <span
                                            className="typo-title-1"
                                        >{item.name}</span>
                                    </div>
                                </S.PdfItem>
                            })
                        }
                    </S.PdfList>
                    :
                    <EmptyStateGlobal
                        title="생성한 PDF 시험지가 없습니다."
                        description="시험 문제나 틀린 문제를 PDF 시험지로 생성해 오프라인에서도 풀어보세요."
                        minHeight="240px"
                    />
            }
        </S.Container>
    );
}

export default PdfList;