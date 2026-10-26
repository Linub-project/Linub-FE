import * as S from "./styles";

const Modal = ({
    width = "",
    height = "fit-content",
    title = "",
    onClick,
    bg = "var(--white)",
    padding = "16px 24px",
    maxWidth = "80%",
    maxHeight = "80%",
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
                    backgroundColor: bg,
                    padding: padding,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight
                }}
            >
                {
                    title &&
                        <p
                            className="typo-heading-3"
                            style={{
                                color: "var(--color-text-primary)"
                            }}
                        >{title}</p>
                }
                {children}
            </S.Subcontainer>
        </S.Container>
    );
}

export default Modal;