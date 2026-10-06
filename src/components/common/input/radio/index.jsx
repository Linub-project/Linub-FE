import * as S from "./styles";

const Radio = ({
    name,
    value,
    label,
    checked,
    onChange,
    disabled = false
}) => {
    return (
        <S.Label>
            <S.Radio
                type="radio"
                name={name}
                value={value}
                checked={checked}
                disabled={disabled}
                onChange={() => onChange(value)}
            />

            <span className="typo-content-1">
                {label}
            </span>
        </S.Label>
    );
};

export default Radio;