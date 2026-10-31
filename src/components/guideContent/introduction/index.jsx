import board_enable from "@/assets/icon/icon_board_enable.svg";
import book_enable from "@/assets/icon/icon_book_enable.svg";
import pdf from "@/assets/icon/icon_pdf.svg";
import people from "@/assets/icon/icon_people.svg";
import refresh from "@/assets/icon/icon_refresh.svg";
import terminal from "@/assets/icon/icon_terminal.svg";
import * as PS from "../styles";
import * as S from "./styles";

const FEATURE = [
    {
        enableIcon: book_enable,
        title: "통합 리눅스 사전",
        description: "개념 · 명령어 · 파일을 연결해 학습합니다.",
    },
    {
        enableIcon: board_enable,
        title: "문제풀이와 모의시험",
        description: "학습 목적에 맞게 실력을 확인합니다.",
    },
    {
        enableIcon: refresh,
        title: "오답과 학습 기록",
        description: "부족한 영역을 찾고 반복 복습합니다.",
    },
    {
        enableIcon: pdf,
        title: "PDF 문제집",
        description: "오프라인에서도 문제를 복습합니다.",
    },
    {
        enableIcon: people,
        title: "사용자 참여",
        description: "문제를 제작하고 지식으로 공유합니다.",
    },
    {
        enableIcon: terminal,
        title: "Linux Lab",
        description: "웹 기반 실습 환경에서 직접 실행합니다.",
    },
];

const GETTING_START = [
    {
        key: "학습 주제 정하기",
        desc: "현재 수준과 목표에 맞는 학습 주제를 선택합니다."
    },
    {
        key: "사전에서 개념 확인",
        desc: "관련 개념과 명령어의 용도, 옵션을 살펴봅니다."
    },
    {
        key: "자유 모드 문제풀이",
        desc: "선택한 범위의 문제를 풀어 이해도를 확인합니다."
    },
    {
        key: "오답 복습",
        desc: "틀린 이유와 관련 개념을 확인하고 다시 풉니다."
    },
    {
        key: "시험 모드 도전",
        desc: "준비가 되면 종합적인 문제풀이로 실력을 점검합니다."
    },
];

const Introduction = () => {
    return (
        <PS.ContentContainer>
            <PS.Section>
                <PS.TitleText>Linub이란?</PS.TitleText>
                <PS.ContentText>Linub는 Linux/Unix를 학습하는 사용자와 리눅스 자격시험을 준비하는 사용자를 위한 웹 기반 학습 플랫폼입니다.</PS.ContentText>
                <PS.ContentText>개념과 명령어를 검색하고 다양한 문제를 풀어보며 학습 결과를 관리할 수 있습니다. 향후 Linux Lab을 통해 웹 브라우저에서 명령어를 직접 실습할 수 있는 환경도 제공할 예정입니다.</PS.ContentText>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>Linub의 학습 흐름</PS.TitleText>
                <S.FlowArea>
                    <S.FlowItem>사전</S.FlowItem>
                    <S.FlowItem>실습</S.FlowItem>
                    <S.FlowItem>문제풀이</S.FlowItem>
                    <S.FlowItem>오답 복습</S.FlowItem>
                    <S.FlowItem>실력 점검</S.FlowItem>
                </S.FlowArea>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>주요 특징</PS.TitleText>
                <S.FeatureArea>
                    {
                        FEATURE.map((item, idx) => (
                            <S.FeatureItem key={idx}
                                onClick={() => navigate(item.path)}
                            >
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
                            </S.FeatureItem>
                        ))
                    }
                </S.FeatureArea>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>이런 사용자에게 추천해요</PS.TitleText>
                <S.RecommendArea>
                    <S.RecommendItem>
                        <span>리눅스를 처음 접하는 입문자</span>
                        <span style={{color: "var(--color-primary)"}}>사전 · 입문 로드맵</span>
                    </S.RecommendItem>
                    <S.RecommendItem>
                        <span>컴퓨터공학 관련 전공 학생</span>
                        <span style={{color: "var(--color-primary)"}}>개념 사전 · 문제풀이</span>
                    </S.RecommendItem>
                    <S.RecommendItem>
                        <span>리눅스마스터 1급·2급 준비생</span>
                        <span style={{color: "var(--color-primary)"}}>자유 모드 · 시험 모드</span>
                    </S.RecommendItem>
                    <S.RecommendItem>
                        <span>Linux/Unix 기초를 복습하려는 사용자</span>
                        <span style={{color: "var(--color-primary)"}}>오답 관리 · PDF</span>
                    </S.RecommendItem>
                    <S.RecommendItem>
                        <span>문제를 만들고 지식을 공유하려는 사용자</span>
                        <span style={{color: "var(--color-primary)"}}>커뮤니티 · 문제 제작</span>
                    </S.RecommendItem>
                </S.RecommendArea>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>처음 시작하는 방법</PS.TitleText>
                <S.StartArea>
                    {
                        GETTING_START.map((item, idx) => (
                            <S.StepItem key={idx}>
                                <S.StepCircle
                                    className="terminal typo-content-3"
                                >{String(idx + 1).padStart(2, "0")}</S.StepCircle>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "12px",
                                        padding: "16px 24px",
                                        border: "1px solid var(--color-border)",
                                        flex: 1
                                    }}
                                >
                                    <p
                                        className="typo-title-1"
                                        style={{color: "var(--color-text-primary)"}}
                                    >{item.key}</p>
                                    <p
                                        className="typo-content-2"
                                        style={{color: "var(--color-text-default)"}}
                                    >{item.desc}</p>
                                </div>
                            </S.StepItem>
                        ))
                    }
                </S.StartArea>
            </PS.Section>
        </PS.ContentContainer>
    );
}

export default Introduction;