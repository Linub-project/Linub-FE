import Button from "@/components/common/button/default";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";

const WrongComponent = () => {
    const locate = useLocation();
    const decodedPathname = decodeURIComponent(locate.pathname);
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.SubContainer>
                <div
                    style={{
                        padding: "16px 24px",
                        backgroundColor: "var(--color-terminal-bg)",
                        marginBottom: "32px",
                        width: "100%",
                        whiteSpace: "normal",
                        overflowWrap: "anywhere"
                    }}
                >
                    <span
                        className="typo-content-1 terminal"
                        style={{
                            color: "var(--white)"
                        }}
                    >$ find / --name </span>
                    <span
                        className="typo-content-1 terminal"
                        style={{
                            color: "var(--white)",
                        }}
                    >{decodedPathname}</span>
                    <div
                        style={{

                        }}
                    >
                        <span
                            className="typo-content-2 terminal"
                            style={{
                                color: "var(--color-danger)"
                            }}
                        >find: </span>
                        <span
                            className="typo-content-2 terminal"
                            style={{
                                color: "var(--color-danger)"
                            }}
                        >'{decodedPathname}'</span>
                        <span
                            className="typo-content-2 terminal"
                            style={{
                                color: "var(--color-danger)"
                            }}
                        >: No such file or directory</span>
                    </div>
                </div>
                <p
                    className="terminal"
                    style={{
                        fontSize: "60px",
                        fontWeight: "bold",
                        marginBottom: "12px"
                    }}
                >404</p>
                <p
                    className="typo-heading-2"
                    style={{
                        color: "var(--color-text-primary)",
                        marginBottom: "12px"
                    }}
                >페이지를 찾을 수 없습니다.</p>
                <p
                    className="typo-content-1"
                    style={{
                        color: "var(--neutral-300)",
                        textAlign: "center",
                        marginBottom: "48px"
                    }}
                >요청하신 페이지가 삭제되었거나<br />주소가 변경되었을 수 있습니다.</p>
                <div
                    style={{
                        display: "flex",
                        gap: "16px",
                        width: "100%",
                        justifyContent: "center"
                    }}
                >
                    <Button 
                        text="홈으로 돌아가기"
                        onClick={() => navigate("/")}
                    />
                    <Button 
                        variant={"tertiary"}
                        text="이전 페이지로"
                        onClick={() => navigate(-1)}
                    />
                </div>
            </S.SubContainer>
        </S.Container>
    );
}

export default WrongComponent;