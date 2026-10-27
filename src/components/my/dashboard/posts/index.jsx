import * as C from "@/apis/community";
import clip from "@/assets/icon/icon_clip.svg";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import Pagination from "@/components/common/pagination";
import { useAuth } from "@/contexts/authContext";
import { getCommunityBoardStyle } from "@/utils/communityBoardStyler";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./styles";

const Posts = () => {
    const { user } = useAuth();
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
            const response = await C.getPostList({userId: user.userId}, pageable);
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
                    <S.PostList>
                        {
                            posts.content.map((post) => {
                                const style = getCommunityBoardStyle(post.data.type);
                                return (
                                        <S.PostItem
                                            key={post.id}
                                            className="typo-content-1"
                                            onClick={() => navigate(`/community/post/${post.id}`)}
                                        >
                                            <div
                                                className="typo-content-3"
                                                style={{
                                                    display: "flex",
                                                    gap: "8px",
                                                    alignItems: "center"
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        color: style.text,
                                                        backgroundColor: style.bg,
                                                        padding: "2px 6px"
                                                    }}
                                                >{style.value}</span>
                                                <span
                                                    style={{color: "var(--color-text-default)"}}
                                                >{formatDate(post.createdAt, DATE_FORMAT.SMART_DATE)}</span>
                                                <span
                                                    style={{color: "var(--color-text-default)"}}
                                                >조회 {post.viewCnt}</span>
                                            </div>
                                            <span
                                                className="typo-content-1"
                                                style={{
                                                    color: "var(--color-text-primary)", 
                                                    display: "flex", 
                                                    alignItems: "center", 
                                                    gap: "4px"
                                                }}
                                            >{post.title}{post.hasFile && <img src={clip} width="12px" />}</span>
                                            <span
                                                className="typo-content-3"
                                                style={{color: "var(--color-text-default)"}}
                                            >{post.content}</span>
                                        </S.PostItem>
                                );
                            })
                        }
                    </S.PostList>
                    :
                    <EmptyStateGlobal
                        title="작성한 게시글이 존재하지 않습니다."
                        description="궁금한 점이나 다양한 의견을 게시판에 남겨보세요."
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