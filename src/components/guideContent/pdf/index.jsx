import board_enable from "@/assets/icon/icon_board_enable.svg";
import pdf from "@/assets/icon/icon_pdf.svg";
import refresh from "@/assets/icon/icon_refresh.svg";
import * as PS from "../styles";
import * as S from "./styles";

const TYPE = [
    {
        enableIcon: pdf,
        title: "자유 문제집",
        description: "선택한 범위의 문제를 모아 학습용 PDF로 생성합니다.",
    },
    {
        enableIcon: board_enable,
        title: "모의고사 문제지",
        description: "시험 출제 조건에 맞는 문제를 시험지 형태로 구성합니다.",
    },
    {
        enableIcon: refresh,
        title: "오답 문제집",
        description: "틀린 문제를 모아 집중 복습용 PDF로 구성합니다.",
    },
];

const RECOMMEND = [
    {
        key: "문제지 유형 선택",
        desc: "시험 시작 또는 마이페이지 > 생성한 시험지에서 학습 목적에 맞는 PDF 유형을 선택합니다."
    },
    {
        key: "PDF 생성 및 다운로드",
        desc: "생성된 파일을 내려받아 오프라인에서 학습합니다."
    },
    {
        key: "생성 이력 관리",
        desc: "마이페이지에서 이전 파일을 확인하거나 삭제합니다."
    },
];

const Pdf = () => {
    return (
        <PS.ContentContainer>
            <PS.Section>
                <PS.TitleText>PDF 문제집 유형</PS.TitleText>
                <S.TypeArea>
                    {
                        TYPE.map((item, idx) => (
                            <S.TypeItem key={idx}>
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
                            </S.TypeItem>
                        ))
                    }
                </S.TypeArea>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>생성 및 관리</PS.TitleText>
                <S.StartArea>
                    {
                        RECOMMEND.map((item, idx) => (
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
                <p
                    className="typo-content-3"
                    style={{color: "var(--color-text-label)"}}
                >생성 제한과 보관 기간 등의 운영 정책은 서비스 안내에서 별도로 공지됩니다.</p>
            </PS.Section>
        </PS.ContentContainer>
    );
}

export default Pdf;