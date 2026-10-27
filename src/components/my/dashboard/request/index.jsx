import * as PR from "@/apis/problemRequest";
import * as PJ from "@/apis/problemJudge";
import Button from "@/components/common/button/default";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import Pagination from "@/components/common/pagination";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { getProblemRequestStyle } from "@/utils/problemRequestStyler";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./styles";

const ProblemRequest = () => {
    const navigate = useNavigate();
    const [requests, setRequests] = useState([]);
    const [reasons, setReasons] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Math.max(Number(searchParams.get("page") ?? 1) - 1, 0);
    const pageable = {
        page,
        size: 10,
        sort: 'createdAt',
        direction: "DESC"
    };

    const fetchRequests = async () => {
        try {
            const response = await PR.getMyProblemRequest(pageable);
            setRequests(response.data);
        } catch (error) {

        }
    }

    const fetchJudgeReason = async () => {
        if(!selectedId) {
            return;
        }
        try {
            const response = await PJ.getAllJudgements(selectedId);
            setReasons(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchRequests();
    }, [page]);

    useEffect(() => {
        fetchJudgeReason();
    }, [selectedId]);

    if(!requests) {
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
                    >문제 업로드 요청</p>
                    <p
                        className="typo-content-3"
                        style={{color: "var(--color-text-default)"}}
                    >직접 작성한 문제의 업로드 요청 내역과 심사 결과를 확인해보세요.</p>
                </div>
                <Button
                    text="문제 작성"
                    size="small"
                    onClick={() => navigate("/problem/request")}
                />
            </div>
            {
                requests.content?.length > 0 ?
                    <S.RequestList>
                        {
                            requests.content.map((request) => {
                                const style = getProblemRequestStyle(request.status);
                                return <S.RequestItem key={request.id}
                                    onClick={() => {if(request.judges.length < 1) return; setSelectedId(request.id);}}
                                >
                                    <S.RequestInfo>
                                        <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                                            <span
                                                className="typo-content-2"
                                                style={{
                                                    padding: "2px 6px",
                                                    color: `var(${style.text})`,
                                                    backgroundColor: `var(${style.bg})`,
                                                    width: "fit-content"
                                                }}
                                            >{style.value}</span>
                                            <span
                                                className="typo-content-3"
                                                style={{
                                                    color: "var(--color-text-label)"
                                                }}
                                            >{formatDate(request.createdAt, DATE_FORMAT.SMART_DATE)} 요청</span>
                                        </div>
                                        <span
                                            className="typo-content-1"
                                        >{request.title}</span>
                                    </S.RequestInfo>
                                    <S.JudgeList>
                                        <span
                                            className="typo-content-3"
                                            style={{color: "var(--color-text-default)"}}
                                        >심사 {request.judges.length} / 3</span>
                                        {
                                            request.judges.map((judge, idx) => (
                                                <span key={idx}
                                                    className="typo-content-3"
                                                    style={{
                                                        color: judge ? "var(--color-primary)" : "var(--color-danger)",
                                                        backgroundColor: judge ? "var(--color-primary-bg)" : "var(--color-danger-bg)",
                                                        padding: "2px 6px"
                                                    }}
                                                >심사 완료</span>
                                            ))
                                        }{
                                            Array.from({length: 3-request.judges.length}).map((_, idx) => (
                                                <span key={idx}
                                                    className="typo-content-3"
                                                    style={{
                                                        color: "var(--color-text-default)",
                                                        border: "1px solid var(--color-border)",
                                                        padding: "2px 6px"
                                                    }}
                                                >대기 중</span>
                                            ))
                                        }
                                    </S.JudgeList>
                                    {
                                        selectedId === request.id &&
                                            <S.ReasonList>
                                                {
                                                    reasons.map((judge, idx) => (
                                                        <S.ReasonItem key={idx}
                                                            $isTrue={judge.judge}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "12px"
                                                                }}
                                                            >
                                                                <span
                                                                    className="typo-title-1"
                                                                    style={{color: "var(--color-text-primary)"}}
                                                                >Reviewer {idx+1}</span>
                                                                <span>{formatDate(judge.createdAt, DATE_FORMAT.SMART_DATE)}</span>
                                                            </div>
                                                            <div
                                                                style={{display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "12px"}}
                                                            >
                                                                <span
                                                                    className="typo-title-1"
                                                                    style={{
                                                                        color: judge.judge ? "var(--color-primary)" : "var(--color-danger)",
                                                                        backgroundColor: judge.judge ? "var(--color-primary-bg)" : "var(--color-danger-bg)",
                                                                        padding: "2px 6px"
                                                                    }}
                                                                >{judge.judge ? "ACCEPT" : "REJECT"}</span>
                                                                <span
                                                                    className="typo-title-1"
                                                                    style={{
                                                                        color: judge.judge ? "var(--color-primary)" : "var(--color-danger)",
                                                                        backgroundColor: judge.judge ? "var(--color-primary-bg)" : "var(--color-danger-bg)",
                                                                        padding: "2px 6px"
                                                                    }}
                                                                >{judge.reason}</span>
                                                            </div>
                                                        </S.ReasonItem>
                                                    ))
                                                }
                                            </S.ReasonList>
                                    }
                                </S.RequestItem>
                            })
                        }
                    </S.RequestList>
                    :
                    <EmptyStateGlobal
                        title="작성한 문제가 없습니다."
                        description="학습한 내용을 바탕으로 문제를 만들고, 다른 사용자들과 공유해보세요."
                        minHeight="240px"
                    />
            }
            <Pagination
                page={requests}
                onChange={handlePageChange}
            />
        </S.Container>
    );
}

export default ProblemRequest;