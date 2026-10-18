import * as S from "./styles";

const Progressbar = ({
    min = 0,
    max = 100,
    value = 0,
    height = "6px",
    color = "var(--color-primary)",
    backgroundColor = "var(--color-border)",
    ...props
}) => {
    const range = Math.max(1, max - min);
    const currentValue = Math.min(Math.max(value, min), max);

    return (
        <S.Progress
            {...props}
            max={range}
            value={currentValue - min}
            $height={height}
            $color={color}
            $backgroundColor={backgroundColor}
        />
    );
};

export default Progressbar;
