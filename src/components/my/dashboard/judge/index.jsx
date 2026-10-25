import * as PR from "@/apis/problemRequest";
import judge_disable from "@/assets/icon/icon_judge_disable.svg";
import judge_unknown from "@/assets/icon/icon_judge_unknown.svg";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import Pagination from "@/components/common/pagination";
import { useAuth } from "@/contexts/authContext";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./styles";

const ProblemJudgeList = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [requests, setRequests] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Math.max(Number(searchParams.get("page") ?? 1) - 1, 0);
    const pageable = {
        page,
        size: 10,
        sort: 'createdAt',
        direction: "ASC"
    };

    const fetchRequests = async () => {
        try {
            const response = await PR.getJudgableProblemRequest(pageable);
            setRequests(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchRequests();
    }, [page]);

    if(!user.certificated) {
        return <Navigate to="/mypage" replace />;
    }

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
                    >문제 심사</p>
                    <p
                        className="typo-content-3"
                        style={{color: "var(--color-text-default)"}}
                    >독립적인 판단을 위해 다른 심사자의 심사 내용은 제출 후 확인할 수 있습니다.</p>
                </div>
            </div>
            {
                requests.content?.length > 0 ?
                    <S.RequestList>
                        {
                            requests.content.map((request) => {
                                return <S.RequestItem key={request.id}
                                    onClick={() => navigate(`/mypage/judge/${request.id}`)}
                                >
                                    <S.RequestInfo>
                                        <span
                                            className="typo-content-3"
                                            style={{
                                                color: "var(--color-text-label)"
                                            }}
                                        >{formatDate(request.createdAt, DATE_FORMAT.SMART_DATE)} 요청</span>
                                        <span
                                            className="typo-title-1"
                                        >{request.title}</span>
                                    </S.RequestInfo>
                                    <S.JudgeList>
                                        {
                                            request.judges.map((_, idx) => (
                                                <img key={idx}
                                                    src={judge_unknown}
                                                    width="16px"
                                                    height="16px"
                                                />
                                            ))
                                        }{
                                            Array.from({length: 3-request.judges.length}).map((_, idx) => (
                                                <img key={idx}
                                                    src={judge_disable}
                                                    width="16px"
                                                    height="16px"
                                                />
                                            ))
                                        }
                                    </S.JudgeList>
                                </S.RequestItem>
                            })
                        }
                    </S.RequestList>
                    :
                    <EmptyStateGlobal
                        title="심사 가능한 문제가 없습니다."
                        description="새로운 문제가 등록되면 이곳에서 확인하고 심사할 수 있습니다."
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

export default ProblemJudgeList;