import people from "@/assets/icon/icon_people.svg";
import board_enable from "@/assets/icon/icon_board_enable.svg";
import pdf from "@/assets/icon/icon_pdf.svg";
import Button from "@/components/common/button/default";
import { useNavigate } from "react-router-dom";
import * as PS from "../styles";
import * as S from "./styles";

const SPACE = [
    {
        enableIcon: board_enable,
        title: "공지사항",
        description: "서비스의 주요 소식과 업데이트 및 운영 안내를 확인할 수 있습니다.",
    },
    {
        enableIcon: people,
        title: "질문과 정보 공유",
        description: "게시글과 댓글을 통해 질문하고 학습 정보와 경험을 공유할 수 있습니다.",
    },
    {
        enableIcon: pdf,
        title: "건의 및 신고",
        description: "서비스 개선을 위한 의견을 제안하거나 이용 중 발생한 문제를 신고할 수 있습니다.",
    },
];

const Community = () => {
    const navigate = useNavigate();
    return (
        <PS.ContentContainer>
            <PS.Section>
                <PS.TitleText>함께 배우는 공간</PS.TitleText>
                <S.ModeArea>
                    {
                        SPACE.map((item, idx) => (
                            <S.ModeItem key={idx}>
                                <PS.Icon src={item.enableIcon}/>
                                <span
                                    className="typo-heading-3"
                                    style={{
                                        margin: "8px 0"
                                    }}
                                >{item.title}</span>
                                <span
                                    className="typo-content-2"
                                    style={{
                                        color: "var(--color-text-default)"
                                    }}
                                >{item.description}</span>
                            </S.ModeItem>
                        ))
                    }
                </S.ModeArea>
            </PS.Section>
            <PS.Section>
                <PS.TitleText>커뮤니티 이용 시</PS.TitleText>
                <PS.ContentText>상대방을 존중하고 출처가 있는 자료는 출처와 이용 조건을 확인해 주세요. 오류가 있거나 운영 정책에 맞지 않는 콘텐츠는 신고 기능을 이용할 수 있습니다.</PS.ContentText>
            </PS.Section>
            <Button
                text="커뮤니티로 이동"
                onClick={() => navigate("/community")}
            />
        </PS.ContentContainer>
    );
}

export default Community;