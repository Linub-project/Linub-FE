import NavigateText from "@/components/common/text/navigate";
import { DUMMY_COMMUNITY } from "@/constants/dummy";
import * as S from "./styles";

const RecentCommunity = () => {
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
                                                backgroundColor: "var(--color-bg-subtle)",
                                                color: "var(--color-text-default)",
                                                padding: "2px 6px",
                                                textAlign: "center",
                                                border: "1px solid var(--color-border)"
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
            <NavigateText
                text="커뮤니티로 이동"
                path="/community"
            />
        </S.Container>
    );
}

export default RecentCommunity;