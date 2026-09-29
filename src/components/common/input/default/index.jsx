import * as S from "./styles";

const Input = ({
    value,
    type = "text",
    onChange,
    placeholder,
    minHeight,
    onKeyDown,
    disabled,
    ...props
}) => {
    return (
        <S.Input
            style={{minHeight: minHeight}}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            onKeyDown={onKeyDown}
            disabled={disabled}
            {...props}
        />
    );
}

export default Input;