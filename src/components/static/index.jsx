import Privacy from "@/components/static/privacy";
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
            case "terms": return <Privacy />;
            case "responsibility": return <Privacy />;
            case "legal-notice": return <Privacy />;
        }
    }

    useEffect( () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

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