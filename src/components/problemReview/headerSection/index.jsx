import Button from "@/components/common/button/default";
import Progressbar from "@/components/common/progressbar";
import { useProblemReview } from "@/contexts/problemReviewContext";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const HeaderSection = ({
    problems,
    selectedProblem
}) => {
    const { clearProblems } = useProblemReview();
    const navigate = useNavigate();

    const handleExit = () => {
        clearProblems();
        navigate("/mypage/wrong-problems", { replace: true });
    };

    return (
        <S.Container>
            <S.SubContainer>
                <S.LeftArea>
                    <span
                        className="typo-content-1"
                        style={{
                            color: "var(--color-text-primary)"
                        }}
                        >오답 복습</span>
                    <span
                        className="typo-content-3"
                        style={{
                            color: "var(--color-text-label)"
                        }}
                    >{selectedProblem+1} / {problems.length}</span>
                </S.LeftArea>
                <S.RightArea>
                    {
                        problems.length === selectedProblem+1 ?
                        <Button
                            text="학습 종료"
                            size="small"
                            variant="quinary"
                            onClick={handleExit}
                        />
                        :
                        <Button
                            text="학습 중단"
                            size="small"
                            variant="tertiary"
                            onClick={handleExit}
                        />
                    }
                </S.RightArea>
            </S.SubContainer>
            <Progressbar
                max={problems.length}
                value={selectedProblem+1}
                height="3px"
            />
        </S.Container>
    );
}

export default HeaderSection;