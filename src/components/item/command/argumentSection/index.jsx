import * as S from "./styles";
import Hr from "@/components/common/layout/hr";

const ContentSection = ({ id, item }) => {
    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
                style={{marginBottom: "6px"}}
            >인자</p>
            <Hr marginBottom="12px" />

            <div
                style={{
                    backgroundColor: "var(--white)",
                    width: "100%",
                    border: "1px solid var(--color-border)",
                    borderRadius: "6px",
                    overflow: "hidden",
                    paddig: "12px"
                }}
            >
                <table
                    style={{
                        borderCollapse: "collapse",
                        width: "100%"
                    }}
                >
                    <colgroup>
                        <col style={{ width: "100%" }} />
                    </colgroup>
                    <tbody>
                        {
                            item.options.map((o) => {
                                return (
                                    <tr key={o.id}>
                                        <td>
                                            <div
                                                className="typo-title-2"
                                                style={{
                                                    color: "var(--color-primary)",
                                                    backgroundColor: "var(--color-bg-subtle)",
                                                    padding: "2px 4px",
                                                    border: "1px solid var(--color-border)",
                                                    whiteSpace: "normal",
                                                    wordBreak: "break-all"
                                                }}>
                                                    
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </S.Container>
    );
}

export default ContentSection;