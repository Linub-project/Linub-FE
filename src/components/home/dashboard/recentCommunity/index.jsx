import * as C from "@/apis/community";
import { SkeletonBox } from "@/components/common/skeleton/style";
import NavigateText from "@/components/common/text/navigate";
import { getCommunityBoardStyle } from "@/utils/communityBoardStyler";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const RecentCommunity = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await C.getHomePostList();
            setPosts(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    if(posts.length === 0) {
        return <SkeletonBox $h="130px" />
    }

    return (
        <S.Container>
            <span
                className="typo-title-1"
                style={{
                    color: "var(--color-text-primary)"
                }}
            >커뮤니티</span>
            <S.TableArea>
                <table>
                    <colgroup>
                        <col style={{ width: "20%" }} />
                        <col style={{ width: "80%" }} />
                    </colgroup>
                    <tbody>
                        {
                            posts?.map((item) => (
                                <tr key={item.id}
                                    onClick={() => navigate(`/community/post/${item.id}`)}
                                >
                                    <td
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <div
                                            className="typo-content-3"
                                            style={{
                                                backgroundColor: getCommunityBoardStyle(item.postType).bg,
                                                color: getCommunityBoardStyle(item.postType).text,
                                                padding: "2px 6px",
                                                textAlign: "center",
                                                border: "1px solid var(--color-border)"
                                            }}
                                        >{getCommunityBoardStyle(item.postType).value}</div>
                                    </td>
                                    <S.Title className="typo-content-4">{item.title}</S.Title>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </S.TableArea>
            <NavigateText
                text="커뮤니티로 이동"
                path="/community"
            />
        </S.Container>
    );
}

export default RecentCommunity;