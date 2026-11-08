import logo from "@/assets/logo.svg";
import Hr from "@/components/common/layout/hr";
import { FOOTER_MENU } from "@/constants/footerMenu";
import { useToast } from "@/contexts/toastContext";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Footer = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();

    const handleNavigate = (menu) => {
        if(menu.thirdPath) {
            window.open(menu.thirdPath, "_blank", "noopener,noreferrer");
            return;
        }

        if(menu.value) {
            navigator.clipboard.writeText(menu.value);
            showToast("클립보드에 이메일 복사 완료");
            return;
        }

        if(!menu.path) {
            return;
        }

        navigate(`${menu.path}`);
    }
    
    return (
        <S.Container>
            <S.MainArea>
                <S.IntroductionArea>
                    <div style={{display: "flex", gap: "8px", alignItems: "center"}}>
                        <img src={logo} width={"32px"}/>
                        <span className="typo-heading-1">Linub</span>
                    </div>
                    <S.IntroductionText style={{lineHeight: "22px"}} className="typo-content-2">Linux 학습부터 실습, 시험까지 한곳에서. 사전 · 문제 풀이 · 터미널 실습을 하나의 서비스에서 제공하는 Linux 통합 학습 플랫폼입니다.</S.IntroductionText>
                </S.IntroductionArea>
                <S.MenuArea>
                    {
                        FOOTER_MENU.map((item) => {
                            return (
                                <S.SubmenuArea
                                    key={item.key}
                                >
                                    <span 
                                        className="typo-title-2"
                                        style={{marginBottom: "4px", color: "var(--neutral-300)"}}>{item.label}</span>
                                    {
                                        item.menu.map((menu) => {
                                            return (
                                                <S.MenuText
                                                    key={menu.key}
                                                    className="typo-content-2"
                                                    onClick={() => handleNavigate(menu)}
                                                >{menu.label}</S.MenuText>
                                            );
                                        })
                                    }
                                </S.SubmenuArea>
                            );
                        })
                    }
                </S.MenuArea>
            </S.MainArea>
            <Hr />
            <p 
                className="typo-content-2"
                style={{
                    color: "var(--neutral-300)",
                    padding: "24px",
                    textAlign: "center"
                }}
            >© 2026 Linub. All rights reserved.</p>
        </S.Container>
    );
}

export default Footer;