import NavigateText from "@/components/common/text/navigate";
import { START_MENU } from "@/constants/startMenu";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Start = () => {
const navigate = useNavigate();

    return (
        <S.Container>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <span
                    className="typo-heading-2"
                    style={{
                        color: "var(--color-text-primary)",
                        marginBottom: "4px"
                    }}
                >어디서부터 시작해야 할까요?</span>
                <span
                    className="typo-content-2"
                    style={{
                        color: "var(--color-text-default)"
                    }}
                >학습 목표에 맞는 가이드를 선택하면 Linub의 기능을 더욱 쉽게 활용할 수 있습니다.</span>
            </div>

            <S.MenuArea>
                {
                    START_MENU.map((item, idx) => {
                        return (
                            <S.MenuChip
                                key={idx}
                                onClick={() => navigate(item.path)}
                            >
                                <S.Icon src={item.enableIcon}/>
                                <span
                                    className="typo-heading-3"
                                    style={{
                                        margin: "8px 0"
                                    }}
                                >{item.title}</span>
                                <span
                                    className="typo-content-2"
                                    style={{
                                        color: "var(--color-text-default)",
                                        marginBottom: "24px"
                                    }}
                                >{item.description}</span>
                                <NavigateText
                                    text={item.link}
                                    path={item.path}
                                />
                            </S.MenuChip>
                        );
                    })
                }
            </S.MenuArea>
        </S.Container>
    );
}

export default Start;