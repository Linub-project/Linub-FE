import * as S from './styles';

const Button = ({
    children = "Button",
    variant = "primary",
    size = "large",
    disabled = false,
    type = "button",
    onClick,
}) => {
    return (
        <S.StyledButton
            $variant={variant}
            $size={size}
            disabled={disabled}
            type={type}
            onClick={onClick}
        >
            {children}
        </S.StyledButton>
    );
}

export default Button;