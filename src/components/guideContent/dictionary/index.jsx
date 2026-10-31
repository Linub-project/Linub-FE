import book_enable from "@/assets/icon/icon_book_enable.svg";
import pdf from "@/assets/icon/icon_pdf.svg";
import terminal from "@/assets/icon/icon_terminal.svg";
import Button from "@/components/common/button/default";
import { useNavigate } from "react-router-dom";
import * as PS from "../styles";
import * as S from "./styles";

const TYPE = [
    {
        enableIcon: book_enable,
        title: "개념 사전",
        description: "네트워크, 파일시스템, 프로세스, 사용자·권한 등 핵심 원리를 설명합니다.",
    },
    {
        enableIcon: terminal,
        title: "명령어 사전",
        description: "명령어의 용도와 주요 옵션, 인수 및 사용법을 확인합니다.",
    },
    {
        enableIcon: pdf,
        title: "파일 사전",
        description: "주요 시스템 파일과 디렉터리의 역할을 학습합니다.",
    },
];

const RECOMMEND = [
    {
        key: "파일 권한 개념 확인",
        desc: "소유자, 그룹, 기타 사용자의 읽기·쓰기·실행 권한을 이해합니다."
    },
    {
        key: "chmod 명령어 학습",
        desc: "심볼릭 모드와 8진수 권한 표현을 확인합니다."
    },
    {
        key: "연관 명령어 확인",
        desc: "chown과 chgrp를 함께 살펴봅니다."
    },
    {
        key: "관련 문제풀이",
        desc: "자유 모드에서 권한 관련 문제로 이해도를 확인합니다."
    },
];

const Dictionary = () => {
    const navigate = useNavigate();
    return (
        <PS.ContentContainer>
            <PS.Section>
                <PS.TitleText>사전 종류</PS.TitleText>
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
                <PS.TitleText>추천하는 사전 활용 방법</PS.TitleText>
                <PS.ContentText>파일 권한을 공부하는 경우 다음처럼 연관 콘텐츠를 연결해 보세요.</PS.ContentText>
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
            </PS.Section>
            <Button
                text="사전으로 이동"
                onClick={() => navigate("/dictionary")}
            />
        </PS.ContentContainer>
    );
}

export default Dictionary;