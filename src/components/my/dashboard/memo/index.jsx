import * as D from "@/apis/dictionary";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import Pagination from "@/components/common/pagination";
import Tooltip from "@/components/common/tooltip";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { getLegendStyle } from "@/utils/legendStyler";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./styles";

const Memo = () => {
    const navigate = useNavigate();
    const [sessions, setSessions] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Math.max(Number(searchParams.get("page") ?? 1) - 1, 0);
    const pageable = {
        page,
        size: 20,
        sort: 'startAt',
        direction: "desc"
    };

    const fetchExamSession = async () => {
        try {
            const response = await D.getAllDictionaryMemos(pageable);
            setSessions(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchExamSession();
    }, [page]);

    if(!sessions) {
        return <div></div>;
    }

    const handlePageChange = (page) => {
        const params = new URLSearchParams(searchParams);

        if (page === 0) {
            params.delete("page");
        } else {
            params.set("page", String(page + 1));
        }

        setSearchParams(params);
    };

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
                    >메모</p>
                    <p
                        className="typo-content-3"
                        style={{color: "var(--color-text-default)"}}
                    >사전에서 작성한 메모를 확인하고, 학습 내용을 다시 복습해보세요.</p>
                </div>
            </div>
            {
                sessions?.content?.length > 0 ?
                    <S.MemoList>
                        {
                            sessions.content.map((item) => {
                                const legendStyle = getLegendStyle(item.type);
                                return <Tooltip text={item.status === "IN_PROGRESS" || item.status === "STOPPED" ? "클릭하여 시험 재개" : ""} key={item.id}>
                                    <S.MemoItem
                                        className="typo-content-1"
                                        onClick={() => navigate(`/dictionary/item/${item.dictionaryId}#memo`)}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "flex-start",
                                                gap: "8px",
                                                flex: 1
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "8px",
                                                    alignItems: "center"
                                                }}
                                            >
                                                <span
                                                    className="terminal typo-title-1"
                                                    style={{
                                                        color: `var(${legendStyle.text})`,
                                                    }}
                                                >
                                                    {item.topic}
                                                </span>
                                                <span
                                                    className="typo-content-3"
                                                    style={{
                                                        color: `var(${legendStyle.text})`,
                                                        backgroundColor: `var(${legendStyle.bg})`,
                                                        padding: "2px 6px"
                                                    }}
                                                >
                                                    {item.type}
                                                </span>
                                            </div>
                                            <span
                                                className="typo-content-1"
                                                style={{color: "var(--color-text-default)"}}
                                            >{item.content}</span>
                                        </div>
                                        <span
                                            className="typo-content-3"
                                            style={{
                                                color: "var(--color-text-label)",
                                                alignSelf: "flex-start"
                                            }}
                                        >{formatDate(item.updatedAt, DATE_FORMAT.SMART_DATE)}</span>
                                    </S.MemoItem>
                                </Tooltip>
                            })
                        }
                    </S.MemoList>
                    :
                    <EmptyStateGlobal
                        title="메모가 존재하지 않습니다."
                        description="학습 중 중요한 내용을 메모로 남겨보세요."
                        minHeight="240px"
                    />
            }
            <Pagination
                page={sessions}
                onChange={handlePageChange}
            />
        </S.Container>
    );
}

export default Memo;