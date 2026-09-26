import { DUMMY_COMMUNITY } from "@/constants/dummy";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const RecentCommunity = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <span
                className="typo-title-1"
                style={{
                    color: "var(--color-text-primary)"
                }}
            >커뮤니티</span>
            <S.TableArea>
                <table>
                    <colgroup>
                        <col style={{ width: "25%" }} />
                        <col style={{ width: "75%" }} />
                    </colgroup>
                    <tbody>
                        {
                            DUMMY_COMMUNITY.map((item) => (
                                <tr key={item.id}>
                                    <td
                                        style={{
                                            display: "flex",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <div
                                            className="typo-content-3"
                                            style={{
                                                backgroundColor: "var(--color-danger-bg)",
                                                color: "var(--color-danger)",
                                                padding: "2px 6px",
                                                textAlign: "center"
                                            }}
                                        >
                                            {item.tag}
                                        </div>
                                    </td>
                                    <S.Title className="typo-content-4">{item.description}</S.Title>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </S.TableArea>
            <span
                className="typo-content-3"
                style={{
                    color: "var(--color-primary)",
                    cursor: "pointer"
                }}
                onClick={() => navigate("/community")}
            >커뮤니티 이동 →</span>
        </S.Container>
    );
}

export default RecentCommunity;