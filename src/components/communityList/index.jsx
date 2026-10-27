import * as C from "@/apis/community";
import { getErrorMessage } from "@/apis/error";
import Pagination from "@/components/common/pagination";
import HeaderSection from "@/components/communityList/headerSection";
import { COMMUNITY_BOARD } from "@/constants/communityBoard";
import { useToast } from "@/contexts/toastContext";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HorizontalTab from "../common/tab";
import * as S from "./styles";
import EmptyStateGlobal from "../common/emptyState/global";

const CommunityList = () => {
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
                    posts.content.length > 0 ?
                    <S.PostList>
                        {
                            posts.content?.map((post) => (
                                <S.PostItem key={post.id}>
                                    
                                </S.PostItem>
                            ))
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