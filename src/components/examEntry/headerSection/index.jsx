import * as S from "./styles";

const HeaderSection = () => {
    return (
        <S.Container>
            <p
                className="typo-heading-1"
                style={{color: "var(--color-text-primary)"}}
            >시험 시작</p>
            <p
                className="typo-content-1"
                style={{color: "var(--color-text-default)"}}
            >문제 풀이 방식을 선택한 뒤 시험을 시작하세요.</p>
        </S.Container>
    );
}

export default HeaderSection;