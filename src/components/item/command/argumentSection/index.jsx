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
            <p
                className="typo-content-3"
                style={{color: "var(--color-text-default)", marginBottom: "6px"}}
            >특정 옵션이나 서브커맨드에 종속되지 않은 인자 목록입니다.</p>

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
                            item?.data.arguments.map((a) => {
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
                                                style={{color: "var(--color-text-default)", whiteSpace: "normal"}}
                                            >{a.description}</div>
                                            <div
                                                className="typo-content-3"
                                                style={{
                                                    color: "var(--color-warning-text)", 
                                                    whiteSpace: "normal", 
                                                    backgroundColor: "var(--color-warning-bg)",
                                                    width: "fit-content",
                                                    padding: "2px 6px"
                                                }}
                                            >{a.constraints}</div>
                                            {a.reference && (
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
                                                        {a.reference && (
                                                            <div
                                                                className="typo-content-3"
                                                                style={{
                                                                    display: "flex",
                                                                    gap: "4px",
                                                                    flexWrap: "wrap",
                                                                    marginTop: "12px"
                                                                }}
                                                            >
                                                                {a.reference.values?.map((v) => (
                                                                    <div
                                                                        key={v.id}
                                                                        style={{
                                                                            backgroundColor: "var(--color-bg-subtle)",
                                                                            padding: "2px 6px",
                                                                            border: "1px solid var(--color-border)",
                                                                            color: "var(--color-warning)"
                                                                        }}
                                                                        title={v.description}
                                                                    >
                                                                        {v.value}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
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