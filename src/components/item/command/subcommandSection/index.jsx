import * as D from "@/apis/dictionary";
import { getErrorMessage } from "@/apis/error";
import right from "@/assets/icon/icon_right.svg";
import Hr from "@/components/common/layout/hr";
import TerminalBG from "@/components/common/terminal";
import { useToast } from "@/contexts/toastContext";
import { useState } from "react";
import * as S from "./styles";

const SubcommandSection = ({ id, item }) => {
    const [selectedSubcommand, setSelectedSubcommand] = useState(null);
    const [subcommandDetails, setSubcommandDetails] = useState({});
    const [loadingSubcommand, setLoadingSubcommand] = useState(null);
    const { showToast } = useToast();

    const handleSelectedSubcommandClick = async (subcommandId) => {
        if (selectedSubcommand === subcommandId) {
            setSelectedSubcommand(null);
            return;
        }

        setSelectedSubcommand(subcommandId);

        if (subcommandDetails[subcommandId]) {
            return;
        }

        try {
            setLoadingSubcommand(subcommandId);

            const response = await D.getSubcommand(item.id, subcommandId);

            setSubcommandDetails(prev => ({
                ...prev,
                [subcommandId]: response.data
            }));

        } catch (error) {
            showToast(getErrorMessage(error));
        } finally {
            setLoadingSubcommand(null);
        }
    };

    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
                style={{
                    marginBottom: "6px"
                }}
            >
                서브커맨드
            </p>

            <Hr marginBottom="12px" />

            <p
                className="typo-content-3"
                style={{
                    color: "var(--color-text-default)",
                    marginBottom: "6px"
                }}
            >
                자주 사용하는 서브커맨드 목록입니다.
                더 많은 서브커맨드는 Linux Lab에서
                직접 확인 가능합니다.
            </p>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "8px"
                }}
            >
                {item.data.subcommands.map((sc) => {
                    const isOpen =
                        selectedSubcommand === sc.id;

                    const detail =
                        subcommandDetails[sc.id];

                    const isLoading =
                        loadingSubcommand === sc.id;

                    return (
                        <S.SubcommandArea key={sc.id}>
                            <S.Top
                                $isOpen={isOpen}
                                onClick={() =>
                                    handleSelectedSubcommandClick(
                                        sc.id
                                    )
                                }
                            >
                                <S.Arrow
                                    src={right}
                                    $isOpen={isOpen}
                                />

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "8px"
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
                                    >
                                        {sc.name}
                                    </p>

                                    <p
                                        className="typo-content-1"
                                        style={{
                                            color: "var(--color-text-default)"
                                        }}
                                    >
                                        {sc.description}
                                    </p>
                                </div>
                            </S.Top>


                            {isOpen && (
                                <S.Bottom>
                                    {!isLoading && detail && (
                                        <>
                                            <p
                                                className="typo-title-2"
                                                style={{
                                                    color: "var(--color-text-primary)"
                                                }}
                                            >문법</p>
                                            <TerminalBG content={ detail.syntax } language="SHELL" />

                                            {detail.arguments?.length > 0 && (
                                                <>
                                                    <p
                                                        className="typo-title-2"
                                                        style={{
                                                            color: "var(--color-text-primary)"
                                                        }}
                                                    >
                                                        인자
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
                                                                <col style={{ width: "100%" }} />
                                                            </colgroup>

                                                            <tbody>
                                                                {detail.arguments.map((argument) => (
                                                                    <tr key={argument.id}>
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
                                                                                    width: "fit-content"
                                                                                }}
                                                                            >
                                                                                {argument.name}
                                                                            </div>

                                                                            <div
                                                                                className="typo-content-1"
                                                                                style={{
                                                                                    color: "var(--color-text-default)",
                                                                                    whiteSpace: "normal"
                                                                                }}
                                                                            >
                                                                                {argument.description}
                                                                            </div>
                                                                            {
                                                                                a.constraints &&
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
                                                                            }
                                                                            {argument.reference && (
                                                                                <div
                                                                                    className="typo-content-3"
                                                                                    style={{
                                                                                        display: "flex",
                                                                                        gap: "4px",
                                                                                        flexWrap: "wrap",
                                                                                        marginTop: "12px"
                                                                                    }}
                                                                                >
                                                                                    {argument.reference.values?.map((v) => (
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
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </>
                                            )}

                                            {detail.options?.length > 0 && (
                                                <>
                                                    <p
                                                        className="typo-title-2"
                                                        style={{
                                                            color: "var(--color-text-primary)"
                                                        }}
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
                                                                <col style={{width: "20%"}}/>
                                                                <col style={{width: "80%"}}/>
                                                            </colgroup>

                                                            <tbody>
                                                                {detail.options.map(
                                                                    (option) => (
                                                                        <tr key={option.id}>
                                                                            <td
                                                                                className=""
                                                                            >
                                                                                <span
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
                                                                                    {option.name}
                                                                                    {option.longName ? ` (${option.longName})` : ""}
                                                                                </span>
                                                                            </td>
                                                                            <td
                                                                                style={{
                                                                                    whiteSpace: "normal",
                                                                                    wordBreak: "break-all"
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    className="typo-content-2"
                                                                                    style={{
                                                                                        color: "var(--color-text-default)"
                                                                                    }}
                                                                                >
                                                                                    {option.description}
                                                                                </div>

                                                                                {option.reference && (
                                                                                    <div
                                                                                        className="typo-content-3"
                                                                                        style={{
                                                                                            display: "flex",
                                                                                            gap: "4px",
                                                                                            flexWrap: "wrap",
                                                                                            marginTop: "12px"
                                                                                        }}
                                                                                    >
                                                                                        {option.reference.values?.map((v) => (
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
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    )}
                                </S.Bottom>
                            )}
                        </S.SubcommandArea>
                    );
                })}
            </div>
        </S.Container>
    );
}

export default SubcommandSection;