import Button from "@/components/common/button/default";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const SupportIntro = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

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
                >Linub 고객지원</span>
                <span
                    style={{color: "var(--color-text-primary)"}}
                >Linub 이용 중 궁금한 점이나 불편한 사항이 있으신가요?</span>
                <span
                    className="typo-content-2"
                    style={{color: "var(--color-text-default)", maxWidth: "600px"}}
                >서비스 이용 문의부터 오류 신고와 개선 의견까지 자유롭게 남겨주세요.</span>
                <span
                    className="typo-content-2"
                    style={{color: "var(--color-text-default)", maxWidth: "600px"}}
                >모든 문의는 비공개로 처리되며 관리자 답변은 작성자만 확인할 수 있습니다.</span>
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: '12px'
                }}
            >
                <Button
                    text="문의 작성하기"
                    width="fit-content"
                    style={{padding: "12px 16px"}}
                    onClick={() => navigate("/support/write")}
                />
                <Button
                    text="내 문의 조회"
                    width="fit-content"
                    variant="secondary"
                    style={{padding: "12px 16px"}}
                    onClick={() => navigate("/support/view")}
                />
            </div>
        </S.Container>
    );
}

export default SupportIntro;