import magnify from "@/assets/icon/icon_magnify.svg";
import Button from "@/components/common/button/default";
import { Chip } from "@/components/common/cardchip/CardChip.jsx";
import { getRandomCommand } from "@/utils/commandUtil";
import { useEffect, useState } from "react";
import * as S from "./styles";

const HomeIntro = () => {
    const [randomCommand, setRandomCommand] = useState([]);
    const [searchText, setSearchText] = useState();

    useEffect(() => {
        setRandomCommand(getRandomCommand(5));
    }, []);

    return (
        <S.Container>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px"
                }}
            >
                <span
                    className="typo-title-1"
                    style={{
                        fontFamily: "JetBrains Mono",
                        color: "var(--color-primary)",
                        width: "100%",
                    }}
                >$ linub --start<S.Cursor /></span>
                <span
                    className="typo-display"
                >Linux,<br />아는 것에서 쓰는 것으로.</span>
                <span
                    style={{color: "var(--color-text-default)", fontWeight: "300", fontSize: "16px"}}
                >개념을 찾아보고, 문제로 확인하고, 터미널에서 직접 실행해보세요.<br />배움과 실습이 하나로 이어지는 Linux 학습 플랫폼, Linub.</span>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: '12px'
                }}
            >
                <S.SearchArea>
                    <img src={magnify} />
                    <S.SearchInput 
                        className="typo-content-1"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button
                        size={"large"}
                        text={"검색"}
                    />
                </S.SearchArea>
                <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
                    <span
                        className="typo-content-3"
                        style={{
                            padding: "2px 8px",
                            color: "var(--color-text-primary)",
                            whiteSpace: "nowrap",
                        }}
                    >추천 검색</span>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "8px",
                            width: "600px",
                            minWidth: "24px"
                        }}
                    >
                        {
                            randomCommand.map((com, idx) => {
                                return (
                                    <Chip key={idx}>{com}</Chip>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </S.Container>
    );
}

export default HomeIntro;