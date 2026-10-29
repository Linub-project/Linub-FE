import * as S from './styles';

const IconButton = ({icon, width = "32px", height = "32px", padding, onClick}) => {
    return (
        <S.StyledButton src={icon}
            style={{
                width: width,
                height: height,
                padding: padding
            }}
            onClick={onClick}
        />
    );
}

export default IconButton;