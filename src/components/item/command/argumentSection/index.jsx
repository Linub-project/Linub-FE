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
                            item.arguments.map((a) => {
                                return (
                                    <tr key={a.id}>
                                        <td
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                width: "100%",
                                                gap: "8px"
                                            }}
                                        >
                                            <div
                                                className="typo-title-2"
                                                style={{
                                                    color: "var(--color-primary)",
                                                    backgroundColor: "var(--color-bg-subtle)",
                                                    padding: "2px 4px",
                                                    border: "1px solid var(--color-border)",
                                                    whiteSpace: "normal",
                                                    wordBreak: "break-all",
                                                    width: "fit-content"
                                                }}>{a.name}</div>
                                            <div
                                                className="typo-content-1"
                                                style={{color: "var(--color-text-default)"}}
                                            >{a.description}</div>
                                            {a.valueType === "REFERENCE" && a.referenceGroup?.values?.length > 0 && (
                                                <div
                                                    className="typo-content-3"
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        width: "100%",
                                                        gap: "4px",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            color: "var(--neutral-300)",
                                                        }}
                                                    >
                                                        사용가능한 값
                                                    </span>

                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                            gap: "4px",
                                                            width: "100%",
                                                        }}
                                                    >
                                                        {a.referenceGroup.values.map((v) => (
                                                            <span
                                                                key={v}
                                                                style={{
                                                                    padding: "2px 4px",
                                                                    border: "1px solid var(--color-border)",
                                                                    color: "var(--color-text-default)",
                                                                }}
                                                            >
                                                                {v}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
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