import Hr from "@/components/common/layout/hr";
import TerminalBG from "@/components/common/terminal";
import * as S from "./styles";

const SyntaxSection = ({ id, item }) => {
    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
                style={{marginBottom: "6px"}}
            >문법</p>
            <Hr marginBottom="12px" />
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    gap: "8px"
                }}
            >
                {
                    item?.data.syntax.map((s) => {
                        return (
                            <TerminalBG key={s.id} content={s.syntax}></TerminalBG>
                        );
                    })
                }
            </div>
        </S.Container>
    );
}

export default SyntaxSection;