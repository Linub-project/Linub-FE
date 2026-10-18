import * as P from "@/apis/problem";
import Button from "@/components/common/button/default";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import Checkbox from "@/components/common/input/checkbox";
import NavigateText from "@/components/common/text/navigate";
import { useToast } from "@/contexts/toastContext";
import { formatDate } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import * as S from "./styles";

const Bookmark = () => {
    const {showToast} = useToast();
    const [bookmarks, setBookmarks] = useState([]);
    const [removeCandidate, setRemoveCandidate] = useState([]);

    const fetchProblemBookmark = async () => {
        try {
            const response = await P.getAllProblemBookmarks();
            setBookmarks(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchProblemBookmark();
    }, []);

    const handleBookmarkToggle = (id) => {
        setRemoveCandidate(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            }
            return [...prev, id];
        });
    };

    const handleBookmarkDelete = async () => {
        try {
            await P.deleteProblemBookmark({ids: removeCandidate});
            showToast("성공적으로 삭제했습니다.");
            fetchProblemBookmark();
        } catch(error) {

        }
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
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >북마크한 문제</p>
                {
                    removeCandidate.length > 0 &&
                        <Button
                            text={`선택한 ${removeCandidate.length}문제 삭제`}
                            variant="quinary"
                            size="small"
                            onClick={handleBookmarkDelete}
                        />
                }
            </div>
            {
                bookmarks.length > 0 ?
                <S.BookmarkList>
                    {
                        bookmarks.map((bookmark) => {
                            const isSelected = removeCandidate.filter(item => item === bookmark.id);
                            return <S.BookmarkItem key={bookmark.id}>
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
                                        id={`exam-${bookmark.id}`}
                                        label={bookmark.question}
                                        checked={isSelected.length === 1}
                                        onChange={() => handleBookmarkToggle(bookmark.id)}
                                    />
                                    <span
                                        className="typo-content-3"
                                        style={{color: "var(--color-text-label)", width: "fit-content", alignSelf: "flex-start"}}
                                    >{formatDate(bookmark.createdAt)}</span>
                                </div>
                                <NavigateText path={`/mypage/bookmark-problems/${bookmark.id}`} text="보기" />
                            </S.BookmarkItem>
                        })
                    }
                </S.BookmarkList>
                :
                <EmptyStateGlobal
                    title="북마크한 문제가 존재하지 않습니다."
                    description="시험 중 다시 보고 싶은 문제를 북마크에 추가해보세요."
                    minHeight="240px"
                />
            }
        </S.Container>
    );
}

export default Bookmark;