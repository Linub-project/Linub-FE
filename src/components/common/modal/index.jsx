import Hr from "../layout/hr";
import * as S from "./styles";

const Modal = ({
    width = "",
    height = "fit-content",
    title = "MODAL",
    onClick,
    children
}) => {
    return (
        <S.Container
            onClick={onClick}
        >
            <S.Subcontainer
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: width,
                    height: height,
                }}
            >
                <p
                    className="typo-heading-3"
                    style={{
                        color: "var(--color-text-primary)"
                    }}
                >{title}</p>
                {children}
            </S.Subcontainer>
        </S.Container>
    );
}

export default Modal;