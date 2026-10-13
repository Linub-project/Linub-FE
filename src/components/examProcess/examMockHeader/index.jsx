import clock from "@/assets/icon/icon_clock_white.svg";
import Button from "@/components/common/button/default";
import { useExamFree } from "@/contexts/examFreeContext";
import { formatTime, TIME_FORMAT } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const ExamMockHeader = ({
    problems,
    showAnswer,
    setShowAnswer
}) => {
    const [lasting, setLasting] = useState(0);
    const { clearProblems } = useExamFree();
    const navigate = useNavigate();

    const handleExit = () => {
        clearProblems();
        navigate("/exam/entry", { replace: true });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setLasting(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <S.Container>
            <S.SubContainer>
            </S.SubContainer>
        </S.Container>
    );
}

export default ExamMockHeader;