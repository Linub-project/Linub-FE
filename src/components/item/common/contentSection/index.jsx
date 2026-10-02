import * as S from "./styles";
import Hr from "@/components/common/layout/hr";

const ContentSection = ({ id, item }) => {
    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
                style={{marginBottom: "6px"}}
            >개요</p>
            <Hr marginBottom="12px" />
            <p
                className="typo-content-1"
                style={{color: "var(--color-text-primary)", whiteSpace: "preserve"}}
            >{item.content}</p>
        </S.Container>
    );
}

export default ContentSection;