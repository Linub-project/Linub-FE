import logo from "@/assets/logo.svg";
import Button from "@/components/common/button/default";
import Input from "@/components/common/input/default";
import { useAuth } from "@/contexts/authContext";
import { useToast } from "@/contexts/toastContext";
import { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { login } = useAuth();
    const { showToast } = useToast();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await login({
                email,
                password
            });

            navigate("/");
        } catch (error) {
            showToast(error.response.message);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    return (
        <S.Container>
            <S.HeaderArea>
                <img src={logo} 
                    style={{
                        width: "48px",
                        cursor: "pointer"
                    }}
                    onClick={() => navigate("/")}
                />
                <span
                    className="typo-heading-1"
                    style={{
                        color: "var(--color-text-primary)"
                    }}
                >Linub에 로그인</span>
                <span
                    className="typo-content-1"
                    style={{
                        color: "var(--color-text-default)"
                    }}
                >Linux 학습을 계속하려면 로그인하세요.</span>
            </S.HeaderArea>

            <S.InputArea>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "12px"
                    }}
                >
                    <span
                        className="typo-content-1"
                        style={{color: "var(--color-text-primary)", alignSelf: "flex-start"}}
                    >이메일</span>
                    <Input
                        value={email}
                        placeholder="linub@example.com"
                        minHeight="40px"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "12px"
                    }}
                >
                    <span
                        className="typo-content-1"
                        style={{color: "var(--color-text-primary)", alignSelf: "flex-start"}}
                    >비밀번호</span>
                    <Input
                        value={password}
                        minHeight="40px"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <Button
                    text="로그인"
                    disabled={email.length === 0 || password.length === 0}
                    onClick={handleLogin}
                />
            </S.InputArea>

            <div
                style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center"
                }}
            >
                <span
                    className="typo-content-1"
                    style={{
                        color: "var(--color-text-default)"
                    }}
                >계정이 없으신가요?</span>
                <span
                    className="typo-content-1"
                    style={{
                        color: "var(--color-primary)",
                        cursor: "pointer"
                    }}
                    onClick={() => navigate("/signup")}
                >가입하기</span>
            </div>
        </S.Container>
    );
}

export default LoginPage;