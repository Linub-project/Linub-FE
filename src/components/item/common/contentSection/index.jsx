import Hr from "@/components/common/layout/hr";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import * as S from "./styles";

const ContentSection = ({ id, item }) => {
    return (
        <S.Container id={id}>
            <p
                className="typo-heading-2"
                style={{marginBottom: "6px"}}
            >개요</p>
            <Hr marginBottom="12px" />
            <S.ContentArea className="typo-content-1">
                <ReactMarkdown remarkPlugins={[remarkBreaks]}>{item.content}</ReactMarkdown>
            </S.ContentArea>
        </S.Container>
    );
}

export default ContentSection;