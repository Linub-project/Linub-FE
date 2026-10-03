import * as S from "./styles";

const Select = ({
    value,
    options = [],
    onChange,

    placeholder,
    name,
    id,

    disabled = false,
    required = false,

    width = "100%",
    size = "small",

    ...props
}) => {
    return (
        <S.Select
            className="typo-title-1"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            $width={width}
            $size={size}
            {...props}
        >
            {placeholder && (
                <option value="" disabled>
                    {placeholder}
                </option>
            )}

            {options.map(option => (
                <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                >
                    {option.label}
                </option>
            ))}
        </S.Select>
    );
};

export default Select;