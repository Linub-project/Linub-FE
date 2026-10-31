import board_enable from "@/assets/icon/icon_board_enable.svg";
import book_enable from "@/assets/icon/icon_book_enable.svg";
import Button from "@/components/common/button/default";
import { useNavigate } from "react-router-dom";
import * as PS from "../styles";
import * as S from "./styles";

const MODE = [
    {
        enableIcon: book_enable,
        title: "자유 모드",
        description: "학습할 범위와 문제 수를 선택합니다. 특정 과목 집중 학습이나 새로 배운 개념 확인에 적합합니다.",
    },
    {
        enableIcon: board_enable,
        title: "시험 모드",
        description: "대상 시험과 출제 조건에 따라 종합적인 문제풀이를 진행합니다. 실전 감각을 점검할 때 활용합니다.",
    },
];

const METHOD = [
    {
        key: "결과 확인",
        desc: "결과 확인 단계에서 학습 내용을 점검하고 다음 행동으로 연결합니다."
    },
    {
        key: "정답과 해설 확인",
        desc: "정답과 해설 확인 단계에서 학습 내용을 점검하고 다음 행동으로 연결합니다."
    },
    {
        key: "오답 목록 확인",
        desc: "오답 목록 확인 단계에서 학습 내용을 점검하고 다음 행동으로 연결합니다."
    },
    {
        key: "관련 개념 복습",
        desc: "관련 개념 복습 단계에서 학습 내용을 점검하고 다음 행동으로 연결합니다."
    },
    {
        key: "다시 문제풀이",
        desc: "다시 문제풀이 단계에서 학습 내용을 점검하고 다음 행동으로 연결합니다."
    },
];

const Exam = () => {
    const navigate = useNavigate();
    return (
        <PS.ContentContainer>
            <PS.Section>
                <PS.TitleText>향후 제공할 학습 경험</PS.TitleText>
                <S.ModeArea>
                    {
                        MODE.map((item, idx) => (
                            <S.ModeItem key={idx}>
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
                            </S.ModeItem>
                        ))
                    }
                </S.ModeArea>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>모드 비교</PS.TitleText>
                <table>
                    <colgroup>
                        <col width="20%" />
                        <col width="40%" />
                        <col width="40%" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>항목</th>
                            <th>자유 모드</th>
                            <th>시험 모드</th>
                        </tr>
                        <tr>
                            <S.Td>학습 목적</S.Td>
                            <S.Td>주제별 집중 학습</S.Td>
                            <S.Td>종합 실력 점검</S.Td>
                        </tr>
                        <tr>
                            <S.Td>문제 선정</S.Td>
                            <S.Td>범위와 수 직접 선택</S.Td>
                            <S.Td>시험 조건에 따라 구성</S.Td>
                        </tr>
                        <tr>
                            <S.Td>추천 상황</S.Td>
                            <S.Td>개념 학습 직후</S.Td>
                            <S.Td>시험 전 실전 점검</S.Td>
                        </tr>
                        <tr>
                            <S.Td>복습 방법</S.Td>
                            <S.Td>해설 및 북마크</S.Td>
                            <S.Td>결과 분석 후 취약 영역 복습</S.Td>
                        </tr>
                    </tbody>
                </table>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>문제 풀이 후 활용 방법</PS.TitleText>
                <S.StartArea>
                    {
                        METHOD.map((item, idx) => (
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
            <PS.Section>
                <PS.TitleText>PDF 문제집</PS.TitleText>
                <PS.ContentText>문제지를 PDF로 생성해 오프라인에서 학습할 수 있습니다. PDF 생성과 다운로드는 웹 시험 응시 및 자동 채점 기록과 구분됩니다.</PS.ContentText>
            </PS.Section>
            <Button
                text="시험 안내로 이동"
                onClick={() => navigate("/exam")}
            />
        </PS.ContentContainer>
    );
}

export default Exam;