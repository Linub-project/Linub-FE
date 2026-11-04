
import magnify from "@/assets/icon/icon_magnify.svg";
import Button from "@/components/common/button/default";
import Input from "@/components/common/input/default";
import HorizontalTab from "@/components/common/tab";
import DictionarySection from "@/components/search/dictionarySection";
import PostSection from "@/components/search/postSection";
import { SEARCH_TAB } from "@/constants/searchTab";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as S from "./styles";

const SearchList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get("keyword") ?? "";
    const tabParam = searchParams.get("tab") ?? "ALL";
    const selectedTab = SEARCH_TAB.some(item => item.id === tabParam)
        ? tabParam
        : "ALL";

    const pageParam = Number(searchParams.get("page") ?? 1);
    const page = Number.isInteger(pageParam) && pageParam > 0
        ? pageParam - 1
        : 0;

    const [input, setInput] = useState(keyword);

    useEffect(() => {
        setInput(keyword);
    }, [keyword]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [page, keyword, selectedTab]);

    const handleSubmit = () => {
        const value = input.trim();

        if (!value) return;

        setSearchParams({
            keyword: value,
            tab: "ALL",
            page: "1"
        });
    };

    const handleTabChange = (tab) => {
        setSearchParams({
            keyword,
            tab,
            page: "1"
        });
    };

    const handlePageChange = (nextPage) => {
        setSearchParams({
            keyword,
            tab: selectedTab,
            page: String(nextPage + 1)
        });
    };

    const getComponent = () => {
        const props = {
            keyword,
            page,
            selectedTab,
            onPageChange: handlePageChange
        };

        switch (selectedTab) {
            case "ALL":
                return (
                    <>
                        <DictionarySection
                            {...props}
                            onViewAll={() => handleTabChange("DICTIONARY")}
                        />
                        <PostSection
                            {...props}
                            onViewAll={() => handleTabChange("POST")}
                        />
                    </>
                );
            case "DICTIONARY": return <DictionarySection {...props} />;
            case "POST": return <PostSection {...props} />;
            default: return null;
        }
    };

    return (
        <>
            <S.SearchContainer>
                <S.SubContainer>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "16px 24px",
                            border: "1px solid var(--color-border)",
                            width: "100%",
                            gap: "12px"
                        }}
                    >
                        <img src={magnify} alt="" />
                        <Input
                            type="search"
                            value={input}
                            placeholder="검색어를 입력하세요."
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSubmit();
                                }
                            }}
                            style={{
                                boxShadow: "none",
                                flex: 1,
                                minWidth: 0
                            }}
                        />
                        <Button
                            text="검색"
                            onClick={handleSubmit}
                            disabled={!input.trim()}
                        />
                    </div>
                </S.SubContainer>
            </S.SearchContainer>
            <S.Container>
                <S.SubContainer>
                    <HorizontalTab
                        tabs={SEARCH_TAB}
                        value={selectedTab}
                        onChange={handleTabChange}
                    />
                    {getComponent()}
                </S.SubContainer>
            </S.Container>
        </>
    );
};

export default SearchList;
