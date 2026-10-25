import * as C from "@/apis/community";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import Pagination from "@/components/common/pagination";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { getPostTypeStyle } from "@/utils/postTypeStyler";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./styles";

const Comment = () => {
    const navigate = useNavigate();
    const [comments, setComments] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Math.max(Number(searchParams.get("page") ?? 1) - 1, 0);
    const pageable = {
        page,
        size: 20,
        sort: 'createdAt',
        direction: "desc"
    };

    const fetchMyComment = async () => {
        try {
            const response = await C.getMyComments(pageable);
            setComments(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchMyComment();
    }, [page]);

    if(!comments) {
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

    return ( // 댓글 구현 후 수정 필요
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
                    >내가 쓴 댓글</p>
                    <p
                        className="typo-content-3"
                        style={{color: "var(--color-text-default)"}}
                    >내가 작성한 댓글입니다.</p>
                </div>
            </div>
            {
                comments?.content?.length > 0 ?
                    <S.CommentList>
                        {
                            comments.content.map((item) => {
                                const postTypeStyle = getPostTypeStyle(item.data.type);
                                return (
                                        <S.CommentItem
                                            key={item.id}
                                            className="typo-content-1"
                                            onClick={() => navigate(`/community/${item.id}`)}
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
                                                        className="typo-title-1"
                                                        style={{
                                                            color: `var(${postTypeStyle.text})`,
                                                        }}
                                                    >
                                                        {item.title}
                                                    </span>
                                                    <span
                                                        className="typo-content-3"
                                                        style={{
                                                            color: `var(${postTypeStyle.text})`,
                                                            backgroundColor: `var(${postTypeStyle.bg})`,
                                                            padding: "2px 6px"
                                                        }}
                                                    >
                                                        {postTypeStyle.value}
                                                    </span>
                                                </div>
                                            </div>
                                            <span
                                                className="typo-content-3"
                                                style={{
                                                    color: "var(--color-text-label)",
                                                    alignSelf: "flex-start"
                                                }}
                                            >{formatDate(item.createdAt, DATE_FORMAT.SMART_DATE)}</span>
                                        </S.CommentItem>
                                );
                            })
                        }
                    </S.CommentList>
                    :
                    <EmptyStateGlobal
                        title="작성한 댓글이 존재하지 않습니다."
                        description="다른 사용자의 게시글에 댓글을 남기고 의견을 나눠보세요."
                        minHeight="240px"
                    />
            }
            <Pagination
                page={comments}
                onChange={handlePageChange}
            />
        </S.Container>
    );
}

export default Comment;