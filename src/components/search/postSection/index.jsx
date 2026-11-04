
import * as SS from "@/apis/search";
import { TagChip } from "@/components/common/cardchip/CardChip";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import Pagination from "@/components/common/pagination";
import { getLegendStyle } from "@/utils/legendStyler";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const PostSection = ({
    keyword,
    page,
    selectedTab,
    onPageChange,
    onViewAll
}) => {
    const navigate = useNavigate();

    const [dictionaries, setDictionaries] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const isPreview = selectedTab === "ALL";
    const size = isPreview ? 5 : 20;
    const currentPage = isPreview ? 0 : page;

    useEffect(() => {
        let active = true;

        const fetchDictionaries = async () => {
            setDictionaries(null);
            setIsError(false);

            if (!keyword.trim()) {
                setIsLoading(false);
                return;
            }

            setIsLoading(true);

            try {
                const pageable = {
                    page: currentPage,
                    size
                };

                const response = await SS.searchPosts(
                    keyword,
                    pageable
                );

                if (active) {
                    setDictionaries(response.data);
                }
            } catch (error) {
                if (active) {
                    console.error("사전 검색 실패:", error);
                    setIsError(true);
                }
            } finally {
                if (active) {
                    setIsLoading(false);
                }
            }
        };

        fetchDictionaries();

        return () => {
            active = false;
        };
    }, [keyword, currentPage, size]);

    const items = dictionaries?.content ?? [];

    return (
        <S.Container>
            <S.Header>
                <p
                    className="typo-title-2"
                    style={{
                        color: "var(--color-text-primary)"
                    }}
                >게시글</p>
                {!isLoading && dictionaries && (
                    <span
                        className="typo-content-3"
                        style={{
                            color: "var(--color-text-default)"
                        }}
                    >
                        총 {dictionaries.totalElements}개
                    </span>
                )}
            </S.Header>
            {!keyword.trim() ? (
                <EmptyStateGlobal
                    title="검색어를 입력해주세요."
                    description="찾고 싶은 게시글의 제목이나 내용을 검색해보세요."
                />
            ) : isLoading ? (
                <S.LoadingArea>
                    검색 중...
                </S.LoadingArea>
            ) : isError ? (
                <EmptyStateGlobal
                    title="검색에 실패했습니다."
                    description="잠시 후 다시 시도해주세요."
                />
            ) : items.length > 0 ? (
                <>
                    <S.DictionaryList>
                        {items.map(item => {
                            const style = getLegendStyle(item.type);
                            return <S.DictionaryItem
                                key={item.id}
                                type="button"
                                onClick={() =>
                                    navigate(`/dictionary/item/${item.id}`)
                                }
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}
                                >
                                    <span
                                        className="typo-content-3"
                                        style={{
                                            color: `var(${style.text})`,
                                            backgroundColor: `var(${style.bg})`,
                                            padding: "2px 6px"
                                        }}
                                    >{item.type}</span>
                                    
                                </div>
                                <span className="typo-title-1"
                                    style={{color: "var(--color-primary)"}}
                                >{item.topic}</span>
                                <p
                                    className="typo-content-2"
                                    style={{
                                        color: "var(--color-text-default)"
                                    }}
                                >{item.summary}</p>
                                {
                                    item.tags.length > 0 &&
                                        <div
                                            style={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: "8px"
                                            }}
                                        >{
                                            item.tags.map((tag) => (
                                                <TagChip key={tag.id}>
                                                    {tag.name}
                                                </TagChip>
                                            ))
                                        }</div>
                                }
                            </S.DictionaryItem>
                        })}
                    </S.DictionaryList>
                    {isPreview ? (
                        dictionaries.totalElements > size && (
                            <S.MoreButton
                                type="button"
                                onClick={onViewAll}
                            >게시글 검색 결과 전체 보기</S.MoreButton>
                        )
                    ) : (
                        <Pagination
                            page={dictionaries}
                            onChange={onPageChange}
                        />
                    )}
                </>
            ) : (
                <EmptyStateGlobal
                    title="검색 결과가 없습니다."
                    description="다른 검색어로 시도해보세요."
                />
            )}
        </S.Container>
    );
};

export default PostSection;
