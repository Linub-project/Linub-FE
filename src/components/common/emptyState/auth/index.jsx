import { useNavigate } from "react-router-dom";
import Button from "@/components/common/button/default";

const AuthStateGlobal = ({
    title = "로그인 후 확인 가능합니다.",
    border = "none",
    bg = "var(--color-bg)",
    minHeight = "240px"
}) => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                borderRadius: "6px",
                border: "1px solid var(--color-border)",
                minHeight: minHeight,
                backgroundColor: bg
            }}
        >
            <span
                className="typo-title-1"
                style={{
                    color: "var(--color-text-primary)"
                }}
            >{title}</span>
            <Button
                text="로그인"
                size="small"
                onClick={() => navigate("/login")}
            />
        </div>
    );
}

export default AuthStateGlobal;