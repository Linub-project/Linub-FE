import Hr from "@/components/common/layout/hr";
import * as S from "./styles";

const PathSection = ({ id, item }) => {
    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
                style={{marginBottom: "6px"}}
            >파일 경로</p>
            <Hr marginBottom="12px" />

            <div
                className="typo-title-1"
                style={{
                    width: "100%",
                    padding: "12px 16px",
                    backgroundColor: "var(--white)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-default)"
                }}
            >
                {item.data.path}                
            </div>
        </S.Container>
    );
}

export default PathSection;