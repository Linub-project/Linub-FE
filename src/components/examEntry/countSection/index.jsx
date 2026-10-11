import Range from "@/components/common/input/range";
import * as S from "./styles";

const CountSection = ({ count, setCount }) => {
    return (
        <S.Container>
            <p
                className="typo-title-1"
                style={{color: "var(--color-text-primary)"}}
            >문제 수</p>
            <p
                className="typo-content-2"
                style={{color: "var(--color-text-default)"}}
            >10문제 단위로 설정할 수 있습니다. (최소 10 · 최대 100)</p>
            <S.RangeArea>
                <S.LeftArea>
                    <Range 
                        step={10}
                        min={10}
                        max={100}
                        value={count}
                        onChange={setCount}
                        list="count"
                    />
                </S.LeftArea>
                <S.RightArea>
                    <span className="typo-heading-2"
                        style={{color: "var(--color-text-primary)"}}
                    >{count}</span>
                    <span className="typo-content-1"
                        style={{color: "var(--color-text-primary)"}}
                    >문제</span>
                </S.RightArea>
            </S.RangeArea>
        </S.Container>
    );
}

export default CountSection;