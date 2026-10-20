import * as P from "@/apis/problem";
import Button from "@/components/common/button/default";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import Checkbox from "@/components/common/input/checkbox";
import Pagination from "@/components/common/pagination";
import { useProblemReview } from "@/contexts/problemReviewContext";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./styles";

const WrongProblem = () => {
    const navigate = useNavigate();
    const { setProblems } = useProblemReview();
    const [wrongs, setWrongs] = useState([]);
    const [solvecandidate, setSolveCandidate] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Math.max(Number(searchParams.get("page") ?? 1) - 1, 0);
    const [sort, setSort] = useState("updatedAt");
    const pageable = {
        page,
        size: 20,
        sort,
        direction: "desc"
    };

    const fetchProblemWrong = async () => {
        try {
            const response = await P.getAllProblemWrongs(pageable);
            setWrongs(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchProblemWrong();
    }, [page, sort]);

    const handleWrongProblemToggle = (id) => {
        setSolveCandidate(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            }
            return [...prev, id];
        });
    }

    const handleProblemReview = async () => {
        try {
            const response = await P.getProblemWrongListReview(solvecandidate);
            setProblems(response.data);
            navigate("/problem/review");
        } catch(error) {

        }
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

    const handleSortChange = (value) => {
        if(!value) {
            setSort("updatedAt");
            return;
        }
        setSort(value);
    }

    if(!wrongs) {
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
                    >틀린 문제</p>
                    <p
                        className="typo-content-3"
                        style={{color: "var(--color-text-default)"}}
                    >시험에서 틀린 문제가 자동으로 기록됩니다.</p>
                </div>
                <div
                    className="typo-content-3"
                    style={{
                        display: "flex",
                        gap: "8px",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <span
                        style={{
                            color: sort === "updatedAt" ? "var(--color-primary)" : "var(--color-text-default)"
                        }}
                        onClick={() => handleSortChange("updatedAt")}
                    >최근 틀린 순</span>
                    <span
                        style={{
                            color: sort === "wrongCnt" ? "var(--color-primary)" : "var(--color-text-default)"
                        }}
                        onClick={() => handleSortChange("wrongCnt")}
                    >많이 틀린 순</span>
                </div>
            </div>
            {
                solvecandidate.length > 0 &&
                    <Button
                        text={`선택한 ${solvecandidate.length}문제 풀기`}
                        onClick={handleProblemReview}
                    />
            }
            {
                wrongs?.content?.length > 0 ?
                    <S.ProblemList>
                        {
                            wrongs.content.map((problem) => {
                                const isSelected = solvecandidate.filter(item => item === problem.id);
                                return <S.ProblemItem key={problem.id}>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            gap: "8px",
                                            flex: 1
                                        }}
                                    >
                                        <Checkbox
                                            id={`exam-${problem.id}`}
                                            label={`Q. ${problem.question}`}
                                            checked={isSelected.length === 1}
                                            onChange={() => handleWrongProblemToggle(problem.id)}
                                        />
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                width: "100%"
                                            }}
                                        >
                                            <span
                                                className="typo-content-3"
                                                style={{
                                                    padding: "2px 6px",
                                                    backgroundColor: "var(--color-danger-bg)",
                                                    color: "var(--color-danger)"
                                                }}
                                            >
                                                {problem.wrongCnt}회 틀림
                                            </span>
                                            <span
                                                className="typo-content-3"
                                                style={{color: "var(--color-text-label)", width: "fit-content"}}
                                            >마지막 문제 풀이 : {formatDate(problem.updatedAt, DATE_FORMAT.DOT_DATE_TIME)}</span>
                                        </div>
                                    </div>
                                </S.ProblemItem>
                            })
                        }
                    </S.ProblemList>
                    :
                    <EmptyStateGlobal
                        title="틀린 문제가 존재하지 않습니다."
                        description="새로운 시험을 치고 틀린 문제들을 확인해보세요."
                        minHeight="240px"
                    />
            }
            <Pagination
                page={wrongs}
                onChange={handlePageChange}
            />
        </S.Container>
    );
}

export default WrongProblem;