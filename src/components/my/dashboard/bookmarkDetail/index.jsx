import * as P from "@/apis/problem";
import Button from "@/components/common/button/default";
import { OPTION_ICON } from "@/constants/optionIcon";
import { shuffleArray } from "@/utils/shuffle";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";

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