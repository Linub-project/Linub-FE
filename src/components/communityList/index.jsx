import * as C from "@/apis/community";
import { getErrorMessage } from "@/apis/error";
import clip from "@/assets/icon/icon_clip.svg";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import Pagination from "@/components/common/pagination";
import HorizontalTab from "@/components/common/tab";
import HeaderSection from "@/components/communityList/headerSection";
import { COMMUNITY_BOARD } from "@/constants/communityBoard";
import { useToast } from "@/contexts/toastContext";
import { getCommunityBoardStyle } from "@/utils/communityBoardStyler";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./styles";

const CommunityList = () => {
    const navigate = useNavigate();
    const {showToast} = useToast();
    const [selectedTab, setSelectedTab] = useState("ALL");
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Math.max(Number(searchParams.get("page") ?? 1) - 1, 0);
    const pageable = {
        page,
        size: 20,
        sort: 'createdAt',
        direction: "desc"
    };

    const fetchCommunities = async () => {
        try {
            const response = await C.getPostList({ type: selectedTab }, pageable);
            setPosts(response.data);
        } catch (error) {
            showToast(getErrorMessage(error));
        }
    }

    useEffect(() => {
        fetchCommunities();
    }, [page, selectedTab]);

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
            <S.SubContainer>
                <HeaderSection />
                <HorizontalTab
                    tabs={COMMUNITY_BOARD}
                    value={selectedTab}
                    onChange={setSelectedTab}
                />
                {
                    posts.content?.length > 0 ?
                    <S.PostList>
                        {
                            posts.content?.map((post) => {
                                const style = getCommunityBoardStyle(post.data.type);
                                return <S.PostItem key={post.id}
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
                                        >{post.nickname} · {formatDate(post.createdAt, DATE_FORMAT.SMART_DATE)} · 조회 {post.viewCnt}</span>
                                    </div>
                                    <span
                                        className="typo-content-1"
                                        style={{color: "var(--color-text-primary)", display: "flex", alignItems: "center", gap: "4px"}}
                                    >{post.title}{post.hasFile && <img src={clip} width="12px" />}</span>
                                    <span
                                        className="typo-content-3"
                                        style={{color: "var(--color-text-default)"}}
                                    >{post.content}</span>
                                </S.PostItem>
                            })
                        }
                    </S.PostList>
                    :
                    <EmptyStateGlobal
                        title="등록된 게시글이 없습니다."
                        description="우측 상단의 게시글 작성 버튼을 눌러 게시글을 작성해보세요."
                    />
                }
                <Pagination
                    page={posts}
                    onChange={handlePageChange}
                />
            </S.SubContainer>
        </S.Container>
    );
}

export default CommunityList;