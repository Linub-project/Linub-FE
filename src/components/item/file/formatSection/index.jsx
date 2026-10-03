import Hr from "@/components/common/layout/hr";
import * as S from "./styles";
import TerminalBG from "@/components/common/terminal";

const FormatSection = ({ id, item }) => {
    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
                style={{marginBottom: "6px"}}
            >파일 형식</p>
            <Hr marginBottom="12px" />

            <TerminalBG content={item.data.format} language="TEXT" />

            <div
                style={{
                    backgroundColor: "var(--white)",
                    width: "100%",
                    border: "1px solid var(--color-border)",
                    borderRadius: "6px",
                    overflow: "hidden",
                    paddig: "12px",
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
                            item.data.fileFormatDescriptionResponses.map((a) => {
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
                                                    color: "var(--color-text-primary)",
                                                    whiteSpace: "normal",
                                                    wordBreak: "break-all",
                                                    width: "100%"
                                                }}>{a.name}</div>
                                            <div
                                                className="typo-content-1"
                                                style={{
                                                    color: "var(--color-text-default)",
                                                    width: "100%",
                                                    whiteSpace: "normal"
                                                }}
                                            >{a.description}</div>
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

export default FormatSection;