import { FastStartMenu } from "@/constants/fastStart";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const FastStart = () => {
const navigate = useNavigate();

    const getMenuStyle = (color) => {
        if(color === "primary") {
            return {"text": "--color-primary", "border": "--color-primary"};
        } else if(color === "secondary") {
            return {"text": "--color-secondary", "border": "--color-secondary"};
        } else {
            return {"text": "--color-text-default", "border": "--neutral-300"};
        }
    }

    return (
        <S.Container>
            <span
                className="typo-title-1"
                style={{
                    color: "var(--color-text-primary)"
                }}
            >빠른 시작</span>
            <S.MenuArea>
                {
                    FastStartMenu.map((item, idx) => {
                        const selectedColor = getMenuStyle(item.color);

                        return (
                            <S.MenuChip
                                key={idx} style={{border: `1px solid var(${selectedColor.border})`}}
                                onClick={() => navigate(item.path)}
                            >
                                <span 
                                    style={{fontSize: "24px", marginBottom: "12px"}}
                                >{item.icon}</span>
                                <span
                                    className="typo-title-1"
                                    style={{color: `var(${selectedColor.text})`, marginBottom: "8px"}}
                                >{item.title}</span>
                                <span
                                    className="typo-content-4"
                                    style={{color: "var(--color-text-default)"}}
                                >{item.description}</span>
                            </S.MenuChip>
                        );
                    })
                }
            </S.MenuArea>
        </S.Container>
    );
}

export default FastStart;