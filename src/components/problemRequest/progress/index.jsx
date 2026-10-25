import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const STEPS = [
    "기본정보",
    "문제 작성",
    "정답 및 해설",
    "분류",
    "최종 확인"
];

const Progress = ({currentPage}) => {
    const navigate = useNavigate();

    return (
        <S.Container>
            {STEPS.map((label, idx) => {
                const step = idx + 1;
                const isActive = step <= currentPage;
                const isCompleted = step < currentPage;
                return (
                    <S.StepItem
                        key={step}
                        $completed={isCompleted}
                        onClick={() => navigate(`/problem/request/${step}`)}
                    >
                        <S.StepCircle $active={isActive}>
                            {step}
                        </S.StepCircle>
                        <S.StepLabel $active={isActive}>
                            {label}
                        </S.StepLabel>
                    </S.StepItem>
                );
            })}
        </S.Container>
    );
}

export default Progress;