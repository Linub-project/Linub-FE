import * as C from "@/apis/community";
import { getErrorCode } from "@/apis/error";
import File from "@/components/common/file";
import WrongComponent from "@/components/common/wrong";
import AnnouncementPost from "@/components/communityPost/announcement";
import Comment from "@/components/communityPost/comment";
import ComplaintPost from "@/components/communityPost/complaint";
import FreePost from "@/components/communityPost/free";
import QnaPost from "@/components/communityPost/qna";
import { getCommunityBoardStyle } from "@/utils/communityBoardStyler";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";

const CommunityPost = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const [style, setStyle] = useState({});
    const [empty, setEmpty] = useState(false);

    const fetchPost = async () => {
        try {
            const response = await C.getPost(id);
            setPost(response.data);
            setStyle(getCommunityBoardStyle(response.data.data.type));
        } catch (error) {
            if(getErrorCode(error) === "POST_002") {
                setEmpty(true);
            }
        }
    }

    useEffect(() => {
        fetchPost();
    }, [id]);

    if(empty) {
        return <WrongComponent />
    }

    const getPostComponent = () => {
        switch(post.data?.type) {
            case "ANNOUNCEMENT": return <AnnouncementPost post={post} />;
            case "FREE": return <FreePost post={post} />;
            case "QNA": return <QnaPost post={post} />;
            case "COMPLAINT": return <ComplaintPost post={post} />;
        }
    }

    return (
        <S.Container>
            <S.SubContainer>
                <span
                    className="typo-content-3"
                    style={{color: "var(--color-text-default)", cursor: "pointer"}}
                    onClick={() => navigate("/community")}
                >← 목록으로</span>

                <div style={{width: "100%"}}>
                    <S.TitleArea>
                        <p
                            className="typo-content-3"
                            style={{
                                color: style.text,
                                backgroundColor: style.bg,
                                padding: "2px 6px",
                                width: "fit-content"
                            }}
                        >{style.value}</p>
                        <p
                            className="typo-title-1"
                        >{post.title}</p>
                        <div
                            className="typo-content-3"
                            style={{
                                display: "flex",
                                gap: "6px"
                            }}
                        >
                            <span style={{color: "var(--color-text-default)"}}>{post.nickname}</span>·
                            <span style={{color: "var(--color-text-label)"}}>{formatDate(post.createdAt, DATE_FORMAT.DOT_DATE_TIME)}</span>·
                            <span style={{color: "var(--color-text-label)"}}>조회 {post.viewCnt}</span>
                        </div>
                    </S.TitleArea>
                    {getPostComponent()}
                    {
                        post.fileUrl && <S.FileArea>
                            <p
                                className="typo-title-2"
                                style={{color: "var(--color-text-default)"}}
                            >첨부파일</p>
                            <File file={post.fileUrl} id={id} />
                        </S.FileArea>
                    }
                </div>
                <Comment id={id} />
            </S.SubContainer>
        </S.Container>
    );
}

export default CommunityPost;