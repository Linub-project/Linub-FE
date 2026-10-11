import * as S from "./styles";

const Range = ({
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    list,
    ...props
}) => {
    const count = Math.floor((max - min) / step) + 1;
    const values = Array.from(
        { length: count },
        (_, idx) => min + idx * step
    );
    return (
        <S.Container>
            <S.Range
                type="range"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
                list={list}
                {...props}
            />

            {list && (
                <datalist id={list}>
                    {values.map(item => (
                        <option key={item} value={item} />
                    ))}
                </datalist>
            )}

            <S.LabelArea>
                {values.map(item => (
                    <span key={item} className="typo-content-3">
                        {item}
                    </span>
                ))}
            </S.LabelArea>
        </S.Container>
    );
};

export default Range;