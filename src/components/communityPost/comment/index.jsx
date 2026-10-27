import * as C from "@/apis/community";
import { getErrorMessage } from "@/apis/error";
import Button from "@/components/common/button/default";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import Image from "@/components/common/image";
import { TextArea } from "@/components/common/input/textarea/styles";
import Pagination from "@/components/common/pagination";
import { useToast } from "@/contexts/toastContext";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import * as S from "./styles";

const Comment = ({id}) => {
    const {showToast} = useToast();
    const [input, setInput] = useState("");
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(0);
    const pageable = {
        page,
        size: 20,
        sort: 'createdAt',
        direction: "desc"
    };

    const fetchComments = async () => {
        try {
            const response = await C.getAllPostComments(id, pageable);
            setComments(response.data);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchComments();
    }, [id, page]);

    const handlePageChange = (page) => {
        setPage(page);
    };

    const handleSubmit = async () => {
        try {
            const form = {
                content: input
            };
            await C.createComment(id, form);
            setInput("");
            if (page === 0) {
                fetchComments();
            } else {
                setPage(0);
            }
        } catch (error) {
            showToast(getErrorMessage(error));
        }
    }

    return (
        <>
            <S.Container>
                {
                    comments.content?.length > 0 ?
                    <S.CommentList>
                        <div
                            className="typo-title-1"
                            style={{
                                padding: "16px 24px"
                            }}
                        >댓글 {comments.totalElements}</div>
                        {
                            comments.content.map((comment) => (
                                <S.CommentItem key={comment.id}>
                                    <Image src={comment.profileUrl}
                                        width="24px"
                                        height="24px"
                                        radius="50%"
                                        style={{objectFit: "cover"}}
                                    />
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            gap: "6px"
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "6px",
                                                height: "24px",
                                            }}
                                        >
                                            <span 
                                                className="typo-title-1"
                                                style={{alignSelf: "center", color: "var(--color-text-default)"}}
                                            >{comment.nickname}</span>
                                            <span style={{alignSelf: "center"}}>·</span>
                                            <span 
                                                className="typo-content-3"
                                                style={{alignSelf: "center", color: "var(--color-text-label)"}}
                                            >{formatDate(comment.createdAt, DATE_FORMAT.DOT_DATE_TIME)}</span>
                                        </div>
                                        <p
                                            className="typo-content-1"
                                            style={{
                                                color: "var(--color-text-primary)"
                                            }}
                                        >
                                            {comment.content}
                                        </p>
                                    </div>
                                </S.CommentItem>
                            ))
                        }
                    </S.CommentList>
                    :
                    <EmptyStateGlobal
                        title="아직 등록된 댓글이 없습니다."
                        description="댓글을 통해 다른 사용자들과 의견을 나누어보세요."
                    />
                }
                <Pagination
                    page={comments}
                    onChange={handlePageChange}
                />
            </S.Container>
            <S.InputArea>
                <TextArea
                    placeholder="댓글을 입력하세요.."
                    $h="120px"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button
                    text="등록"
                    disabled={!input}
                    onClick={handleSubmit}
                />
            </S.InputArea>
        </>
    );
}

export default Comment;