import * as S from './styles';

const Button = ({
    text = "Button",
    variant = "primary",
    size = "large",
    disabled = false,
    loading = false,
    loadingText = "저장 중",
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
            {loading ? (
                <>
                    <S.Spinner />
                    {loadingText}
                </>
            ) : (
                text
            )}
        </S.StyledButton>
    );
}

export default Button;