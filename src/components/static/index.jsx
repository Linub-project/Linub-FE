import LegalNotice from "@/components/static/legal";
import Privacy from "@/components/static/privacy";
import Responsibility from "@/components/static/responsibility";
import Terms from "@/components/static/terms";
import { FOOTER_MENU } from "@/constants/footerMenu";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";

const Static = () => {
    const {category} = useParams();
    const menu = FOOTER_MENU[1].menu;
    const currentMenu = menu.find(m => m.path === `/${category}`);

    const getComponent = () => {
        switch(category) {
            case "privacy": return <Privacy />;
            case "terms": return <Terms />;
            case "responsibility": return <Responsibility />;
            case "legal-notice": return <LegalNotice />;
        }
    }

    useEffect( () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [category]);

    return (
        <S.Container>
            <S.SubContainer>
                <p
                    className="typo-heading-1"
                    style={{
                        width: "100%",
                        textAlign: "center",
                        color: "var(--color-text-primary)"
                    }}
                >{currentMenu.label}</p>
                {getComponent()}
            </S.SubContainer>
        </S.Container>
    );
}

export default Static;