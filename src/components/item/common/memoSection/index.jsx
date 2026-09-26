import * as S from "./styles";
import Hr from "@/components/common/layout/hr";

const MemoSection = ({ id, item }) => {
    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
                style={{marginBottom: "6px"}}
            >개인 메모</p>
            <Hr marginBottom="12px" />
        </S.Container>
    );
}

export default MemoSection;