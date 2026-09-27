import * as S from "./styles";

const Textarea = ({
    value,
    onChange,
    placeholder,
    minHeight
}) => {
    return (
        <S.TextArea
            style={{minHeight: minHeight}}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default Textarea;