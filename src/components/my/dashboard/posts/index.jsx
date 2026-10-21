import * as C from "@/apis/community";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import Pagination from "@/components/common/pagination";
import Tooltip from "@/components/common/tooltip";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { getLegendStyle } from "@/utils/legendStyler";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./styles";

const Posts = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Math.max(Number(searchParams.get("page") ?? 1) - 1, 0);
    const pageable = {
        page,
        size: 20,
        sort: 'createdAt',
        direction: "desc"
    };

    const fetchMyPosts = async () => {
        try {
            const response = await C.getAllDictionaryMemos(pageable);
            setPosts(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchMyPosts();
    }, [page]);

    if(!posts) {
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
                    >내가 쓴 글</p>
                    <p
                        className="typo-content-3"
                        style={{color: "var(--color-text-default)"}}
                    >내가 작성한 게시글입니다.</p>
                </div>
            </div>
            {
                posts?.content?.length > 0 ?
                    <S.MemoList>
                        {
                            posts.content.map((item) => {
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
                page={posts}
                onChange={handlePageChange}
            />
        </S.Container>
    );
}

export default Posts;