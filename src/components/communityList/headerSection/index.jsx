import Button from "@/components/common/button/default";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <div>
                <p
                    className="typo-heading-1"
                    style={{color: "var(--color-text-primary)", marginBottom: "6px"}}
                >커뮤니티</p>
                <p
                    className="typo-content-1"
                    style={{color: "var(--color-text-default)"}}
                >공지사항을 확인하고, 리눅스에 관한 질문과 다양한 정보 및 경험을 자유롭게 공유해보세요.</p>
            </div>
            <Button
                text="글쓰기"
                size="small"
                onClick={() => navigate("/community/write")}
            />
        </S.Container>
    );
}

export default HeaderSection;