import board_enable from "@/assets/icon/icon_board_enable.svg";
import book_enable from "@/assets/icon/icon_book_enable.svg";
import pdf from "@/assets/icon/icon_pdf.svg";
import refresh from "@/assets/icon/icon_refresh.svg";
import * as PS from "../styles";
import * as S from "./styles";

const SPACE = [
    {
        enableIcon: book_enable,
        title: "총 문제풀이 수와 정답률",
        description: "숫자의 변화와 학습 기록을 함께 확인해 다음 학습 주제를 정합니다.",
    },
    {
        enableIcon: refresh,
        title: "이번 달 학습 현황과 학습 일수",
        description: "숫자의 변화와 학습 기록을 함께 확인해 다음 학습 주제를 정합니다",
    },
    {
        enableIcon: pdf,
        title: "시험 응시 기록과 최근 결과",
        description: "숫자의 변화와 학습 기록을 함께 확인해 다음 학습 주제를 정합니다.",
    },
    {
        enableIcon: board_enable,
        title: "오답과 취약 주제",
        description: "숫자의 변화와 학습 기록을 함께 확인해 다음 학습 주제를 정합니다.",
    },
];

const Statistic = () => {
    return (
        <PS.ContentContainer>
            <PS.Section>
                <PS.TitleText>주요 학습 통계</PS.TitleText>
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
                <PS.TitleText>기록을 다음 행동으로 연결하세요</PS.TitleText>
                <PS.ContentText>최근 정답률이 낮아졌다면 틀린 문제와 관련 주제를 사전에서 다시 학습해 보세요.</PS.ContentText>
                <PS.ContentText>학습 일수가 줄었다면 짧은 자유 모드 문제풀이로 학습 흐름을 다시 시작해 보세요.</PS.ContentText>
                <PS.ContentText>시험 결과에서 특정 과목이 부족하다면 해당 범위만 선택해 집중적으로 문제를 풀어보세요.</PS.ContentText>
            </PS.Section>
        </PS.ContentContainer>
    );
}

export default Statistic;