import Hr from "@/components/common/layout/hr";
import * as S from "./styles";

const OptionSection = ({ id, item }) => {
    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
                style={{ marginBottom: "6px" }}
            >
                옵션
            </p>

            <Hr marginBottom="12px" />

            <p
                className="typo-content-3"
                style={{
                    color: "var(--color-text-default)",
                    marginBottom: "6px"
                }}
            >
                자주 사용하는 옵션 목록입니다. 더 많은 옵션은 Linux Lab에서 직접 확인 가능합니다.
            </p>

            <div
                style={{
                    backgroundColor: "var(--white)",
                    width: "100%",
                    border: "1px solid var(--color-border)",
                    borderRadius: "6px",
                    overflow: "hidden"
                }}
            >
                <table
                    style={{
                        borderCollapse: "collapse",
                        width: "100%"
                    }}
                >
                    <colgroup>
                        <col style={{ width: "20%" }} />
                        <col style={{ width: "80%" }} />
                    </colgroup>

                    <tbody>
                        {item?.data?.options?.map((o) => {
                            return (
                                <tr key={o.id}>
                                    <td
                                        style={{
                                            display: "flex"
                                        }}
                                    >
                                        <p
                                            className="typo-title-2"
                                            style={{
                                                color: "var(--color-primary)",
                                                backgroundColor: "var(--color-bg-subtle)",
                                                padding: "2px 4px",
                                                border: "1px solid var(--color-border)",
                                                whiteSpace: "normal",
                                                wordBreak: "break-all"
                                            }}
                                        >
                                            {o.name}
                                            {o.longName && ` (${o.longName})`}
                                        </p>
                                    </td>

                                    <td
                                        style={{
                                            whiteSpace: "normal",
                                            wordBreak: "break-all",
                                        }}
                                    >
                                        <div
                                            className="typo-content-2"
                                            style={{
                                                color: "var(--color-text-default)",
                                            }}
                                        >
                                            {o.description}
                                        </div>

                                        {o.reference && (
                                            <div
                                                className="typo-content-3"
                                                style={{
                                                    display: "flex",
                                                    gap: "4px",
                                                    flexWrap: "wrap",
                                                    marginTop: "12px"
                                                }}
                                            >
                                                {o.reference.values?.map((v) => (
                                                    <div key={v.id}
                                                        style={{
                                                            backgroundColor: "var(--color-bg-subtle)",
                                                            padding: "2px 6px",
                                                            border: "1px solid var(--color-border)",
                                                            color: "var(--color-warning)"
                                                        }}
                                                        title={v.description}
                                                    >{v.value}</div>
                                                ))}
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </S.Container>
    );
};

export default OptionSection;