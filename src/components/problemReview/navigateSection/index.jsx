import * as S from "./styles";

const NavigateSection = ({
    problems,
    selectedProblem,
    setSelectedProblem
}) => {

    if(problems.length === 1) {
        return null;
    }

    return (
        <S.Container>
            <div>
                {selectedProblem > 0 && (
                    <Button
                        text="← 이전"
                        size="small"
                        variant="tertiary"
                        onClick={() => setSelectedProblem(prev => prev - 1)}
                    />
                )}
            </div>

            <div>
                {selectedProblem < problems.length - 1 && (
                    <Button
                        text="다음 →"
                        size="small"
                        variant="tertiary"
                        onClick={() => setSelectedProblem(prev => prev + 1)}
                    />
                )}
            </div>
        </S.Container>
    );
}

export default NavigateSection;