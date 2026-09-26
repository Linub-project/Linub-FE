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
            <TerminalBG content={item.syntax} />
        </S.Container>
    );
}

export default SyntaxSection;