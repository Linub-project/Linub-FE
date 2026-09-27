import Hr from "@/components/common/layout/hr";
import TerminalBG from "@/components/common/terminal";
import * as S from "./styles";

const ExampleSection = ({ id, item }) => {
    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
                style={{marginBottom: "6px"}}
            >예시</p>
            <Hr marginBottom="12px" />
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px"
                }}
            >
                {
                    item.examples.map((e) => {
                        return (
                            <div
                                key={e.id} 
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "2px"
                                }}
                            >
                                <TerminalBG content={e.content} language="TEXT" />
                                <p
                                    className="typo-content-1"
                                    style={{
                                        padding: "2px 6px",
                                        color: "var(--color-text-primary)"
                                    }}
                                >{e.description}</p>
                            </div>
                        );
                    })
                }
            </div>
        </S.Container>
    );
}

export default ExampleSection;