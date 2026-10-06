import * as S from "./styles";

const Tooltip = ({
    text,
    position = "top",
    children
}) => {
    return (
        <S.Container>
            {children}
            {text &&
                <S.TooltipBox $position={position}>
                    {text}
                </S.TooltipBox>
            }
        </S.Container>
    );
};

export default Tooltip;