import * as P from "@/apis/problem";
import four_default from "@/assets/icon/icon_four_default.svg";
import four_primary from "@/assets/icon/icon_four_primary.svg";
import one_default from "@/assets/icon/icon_one_default.svg";
import one_primary from "@/assets/icon/icon_one_primary.svg";
import three_default from "@/assets/icon/icon_three_default.svg";
import three_primary from "@/assets/icon/icon_three_primary.svg";
import two_default from "@/assets/icon/icon_two_default.svg";
import two_primary from "@/assets/icon/icon_two_primary.svg";
import { SkeletonBox } from "@/components/common/skeleton/style";
import { shuffleArray } from "@/utils/shuffle";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";
import Button from "@/components/common/button/default";

const OPTION_ICON = [
    {
        primary: one_primary,
        default: one_default
    },
    {
        primary: two_primary,
        default: two_default
    },
    {
        primary: three_primary,
        default: three_default
    },
    {
        primary: four_primary,
        default: four_default
    },
]

const ProblemBookmarkDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [bookmark, setBookmark] = useState(null);

    const fetchBookmarkDetail = async () => {
        try {
            const response = await P.getProblemBookmark(id);
            setBookmark(response.data);
        } catch(error) {
            
        }
    }

    useEffect(() => {
        fetchBookmarkDetail();
    }, []);

    const shuffledOption = useMemo(() => {
        return shuffleArray([...bookmark?.problem?.options ?? []]);
    }, [bookmark?.problem?.id]);

    if(!bookmark) {
        return <div></div>;
    }

    return (
        <S.Container>
            <Button
                text="← 목록으로"
                variant="tertiary"
                size="small"
                width="fit-content"
                onClick={() => navigate(-1)}
            />
            <div>
                <p
                    className="typo-title-1"
                    style={{color: "var(--color-text-primary)"}}
                >Q. {bookmark.problem.question}</p>
            </div>
            {
                bookmark.problem.imageUrl &&
                    <Image src={bookmark.problem.imageUrl} />
            }
            {
                bookmark.problem.sourceCode && 
                    <TerminalBG content={bookmark.problem.sourceCode} language={bookmark.problem.language}/>
            }
            <S.OptionArea>
                {shuffledOption.map((option, idx) => {
                    return (
                        <S.OptionItem
                            key={option.id}
                        >
                            <img
                                src={OPTION_ICON[idx].default}
                                style={{ width: "18px" }}
                                alt={`${idx + 1}번`}
                            />
                            <span className="typo-content-1">
                                {option.content}
                            </span>
                        </S.OptionItem>
                    );
                })}
            </S.OptionArea>
        </S.Container>
    );
}

export default ProblemBookmarkDetail;