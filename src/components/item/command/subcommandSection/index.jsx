import right from "@/assets/icon/icon_right.svg";
import Hr from "@/components/common/layout/hr";
import TerminalBG from "@/components/common/terminal";
import { useState } from "react";
import * as S from "./styles";

const SubcommandSection = ({ id, item }) => {
    const [selectedSubcommand, setSelectedSubcommand] = useState(null);

    const handleSelectedSubcommandClick = (id) => {
        setSelectedSubcommand((prev) =>
            prev === id ? null : id
        );
    }

    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
                style={{marginBottom: "6px"}}
            >서브커맨드</p>
            <Hr marginBottom="12px" />
            <p
                className="typo-content-3"
                style={{color: "var(--color-text-default)", marginBottom: "6px"}}
            >자주 사용하는 서브커맨드 목록입니다. 더 많은 서브커맨드는 Linux Lab에서 직접 확인 가능합니다.</p>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "8px",
                }}
            >
                {
                    item.subcommands.map((sc) => {
                        const isOpen = selectedSubcommand === sc.subcommand;

                        return (
                            <S.SubcommandArea key={sc.subcommand}>
                                <S.Top
                                    $isOpen={isOpen}
                                    onClick={() => handleSelectedSubcommandClick(sc.subcommand)}
                                >
                                    <S.Arrow src={right} $isOpen={isOpen} />
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "8px",
                                        }}
                                    >
                                        <p
                                            className="typo-title-2"
                                            style={{
                                                color: "var(--color-primary)",
                                                border: "1px solid var(--color-border)",
                                                backgroundColor: "var(--color-bg-subtle)",
                                                padding: "2px 4px",
                                                width: "fit-content"
                                            }}
                                        >{sc.name}</p>
                                        <p
                                            className="typo-content-1"
                                            style={{
                                                color: "var(--color-text-default)",
                                            }}
                                        >{sc.description}</p>
                                    </div>
                                </S.Top>

                                <S.Bottom $isOpen={isOpen}>
                                    <p
                                        className="typo-title-2"
                                        style={{color: "var(--color-text-primary)"}}
                                    >문법</p>
                                    <TerminalBG content={sc.syntax}/>

                                    <p
                                        className="typo-title-2"
                                        style={{color: "var(--color-text-primary)"}}
                                    >옵션</p>
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
                                                <col style={{ width: "25%" }} />
                                                <col style={{ width: "75%" }} />
                                            </colgroup>
                                            <tbody>
                                                {
                                                    sc.options.map((o) => {
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
                                                                    >{o.name}({o.longName ? o.longName: ""})</p>
                                                                </td>
                                                                <td
                                                                    className="typo-content-2"
                                                                    style={{
                                                                        color: "var(--color-text-default)",
                                                                        whiteSpace: "normal",
                                                                        wordBreak: "break-all"
                                                                    }}
                                                                >{o.description}</td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </S.Bottom>
                            </S.SubcommandArea>
                        );
                    })
                }
            </div>
        </S.Container>
    );
}

export default SubcommandSection;