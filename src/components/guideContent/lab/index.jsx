import book_enable from "@/assets/icon/icon_book_enable.svg";
import terminal from "@/assets/icon/icon_terminal.svg";
import Button from "@/components/common/button/default";
import { useNavigate } from "react-router-dom";
import * as PS from "../styles";
import * as S from "./styles";

const EXP = [
    {
        enableIcon: terminal,
        title: "브라우저 터미널",
        description: "별도 설치 없이 명령어를 실행하는 환경을 목표로 합니다.",
    },
    {
        enableIcon: book_enable,
        title: "사전과 연결",
        description: "학습한 명령어를 실습으로 자연스럽게 이어갈 수 있도록 준비합니다.",
    },
];

const Lab = () => {
    const navigate = useNavigate();
    return (
        <PS.ContentContainer>
            <PS.Section>
                <PS.TitleText>Linux Lab이란?</PS.TitleText>
                <PS.ContentText>명령어의 이름만 외우지 않고 옵션과 인수를 바꾸어 직접 실행하며 결과를 확인하도록 돕는 웹 기반 실습 환경입니다.</PS.ContentText>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>향후 제공할 학습 경험</PS.TitleText>
                <S.ExpArea>
                    {
                        EXP.map((item, idx) => (
                            <S.ExpItem key={idx}>
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
                            </S.ExpItem>
                        ))
                    }
                </S.ExpArea>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>참고사항</PS.TitleText>
                <PS.ContentText>실습 환경의 유지 시간, 자원 제한과 같은 운영 정책은 아직 확정되지 않았습니다. 공개 시점에 정확한 이용 안내를 제공할 예정입니다.</PS.ContentText>
            </PS.Section>
            <Button
                text="실습 시작 · 준비 중"
                disabled
            />
        </PS.ContentContainer>
    );
}

export default Lab;