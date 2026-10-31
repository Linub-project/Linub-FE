import board_enable from "@/assets/icon/icon_board_enable.svg";
import pdf from "@/assets/icon/icon_pdf.svg";
import people from "@/assets/icon/icon_people.svg";
import refresh from "@/assets/icon/icon_refresh.svg";
import Button from "@/components/common/button/default";
import { useNavigate } from "react-router-dom";
import * as PS from "../styles";
import * as S from "./styles";

const SPACE = [
    {
        enableIcon: board_enable,
        title: "문제풀이와 정답률",
        description: "학습량과 전체 이해도를 함께 확인합니다.",
    },
    {
        enableIcon: people,
        title: "시험 응시 기록",
        description: "최근 점수와 시험별 결과를 비교합니다.",
    },
    {
        enableIcon: refresh,
        title: "오답과 북마크",
        description: "다시 볼 문제를 모아 반복 학습합니다.",
    },
    {
        enableIcon: people,
        title: "프로필과 인증",
        description: "계정 정보와 자격 인증 상태를 관리합니다.",
    },
    {
        enableIcon: pdf,
        title: "문제 제작",
        description: "내가 아는 리눅스 지식으로 문제를 만들고 요청합니다.",
    },
];

const Mypage = () => {
    const navigate = useNavigate();
    return (
        <PS.ContentContainer>
            <PS.Section>
                <PS.TitleText>한눈에 보는 학습 상태</PS.TitleText>
                <S.StatusArea>
                    {
                        SPACE.map((item, idx) => (
                            <S.StatusItem key={idx}>
                                <PS.Icon src={item.enableIcon}/>
                                <span
                                    className="typo-heading-3"
                                    style={{
                                        margin: "8px 0"
                                    }}
                                >{item.title}</span>
                                <span
                                    className="typo-content-2"
                                    style={{
                                        color: "var(--color-text-default)"
                                    }}
                                >{item.description}</span>
                            </S.StatusItem>
                        ))
                    }
                </S.StatusArea>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>통계를 학습에 활용하는 방법</PS.TitleText>
                <PS.ContentText>정답률이 낮은 과목은 사전에서 관련 개념을 복습하고 자유 모드로 다시 문제를 풀어보세요. 시험 기록과 누적 학습 일수는 단기 점수보다 꾸준한 학습 흐름을 확인하는 데 활용할 수 있습니다.</PS.ContentText>
            </PS.Section>
            <Button
                text="마이페이지로 이동"
                onClick={() => navigate("/mypage")}
            />
        </PS.ContentContainer>
    );
}

export default Mypage;