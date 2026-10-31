import Button from "@/components/common/button/default";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const GuideIntro = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px"
                }}
            >
                <span
                    className="typo-content-3 terminal"
                    style={{
                        color: "var(--color-primary)",
                        width: "100%",
                        letterSpacing: "1px"
                    }}
                >OFFICIAL DOCUMENTATION</span>
                <span
                    className="typo-display"
                >Linub 가이드</span>
                <span
                    style={{color: "var(--color-text-primary)"}}
                >리눅스 학습의 시작부터 실전까지, Linub를 효과적으로 활용하는 방법을 알아보세요.</span>
                <span
                    className="typo-content-2"
                    style={{color: "var(--color-text-default)", maxWidth: "600px"}}
                >주요 기능과 사용 방법을 확인하고 자신에게 맞는 학습 방법을 찾아보세요.</span>
                <span
                    className="typo-content-2"
                    style={{color: "var(--color-text-default)", maxWidth: "600px"}}
                >입문자를 위한 학습 순서부터 시험 대비와 오답 복습까지 안내합니다.</span>
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: '12px'
                }}
            >
                <Button
                    text="처음 시작하기"
                    width="fit-content"
                    style={{padding: "12px 16px"}}
                    onClick={() => navigate("/guide/GETTING_STARTED")}
                />
                <Button
                    text="학습 로드맵 보기"
                    width="fit-content"
                    variant="secondary"
                    style={{padding: "12px 16px"}}
                    onClick={() => navigate("/guide/ROADMAP")}
                />
            </div>
        </S.Container>
    );
}

export default GuideIntro;