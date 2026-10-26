
import * as S from "./styles";

const PROCESS = [
    {
        number: "01",
        title: "문제 작성",
        description: "문제 유형과 내용을 입력하고, 정답 및 해설을 작성합니다."
    },
    {
        number: "02",
        title: "분류 및 제출",
        description: "문제와 관련된 시험 과목 및 분류를 지정한 후 제출합니다."
    },
    {
        number: "03",
        title: "문제 심사",
        description: "검증된 심사자가 문제의 정확성, 적절성 및 해설의 타당성을 검토합니다."
    },
    {
        number: "04",
        title: "문제 등록",
        description: "심사를 통과한 문제는 Linub의 문제 데이터베이스에 등록되어 학습에 활용됩니다."
    }
];

const PRECAUTIONS = [
    "문제와 보기는 명확하게 작성하고, 정답은 객관적인 근거를 바탕으로 지정해주세요.",
    "해설에는 정답인 이유를 충분히 설명하고, 필요한 경우 관련 명령어나 개념을 함께 작성해주세요.",
    "기존에 등록된 문제와 지나치게 유사하거나 중복되는 문제는 등록이 제한될 수 있습니다.",
    "타인의 저작물을 무단으로 복제하거나 저작권을 침해하는 내용을 등록하지 마세요.",
    "부정확한 정보, 부적절한 표현 또는 필수 정보가 누락된 문제는 반려 및 추후 문제 작성 이용에 제한이 생길 수 있습니다."
];

const Intro = () => {
    return (
        <S.Container>
            <S.Section>
                <S.SectionHeader>
                    <h3 className="typo-title-1">
                        문제 등록 절차
                    </h3>
                    <p className="typo-content-3">
                        작성부터 등록까지 다음 절차로 진행됩니다.
                    </p>
                </S.SectionHeader>

                <S.ProcessGrid>
                    {PROCESS.map(item => (
                        <S.ProcessItem key={item.number}>
                            <S.ProcessNumber>
                                {item.number}
                            </S.ProcessNumber>

                            <span className="typo-title-1">
                                {item.title}
                            </span>

                            <p className="typo-content-3">
                                {item.description}
                            </p>
                        </S.ProcessItem>
                    ))}
                </S.ProcessGrid>
            </S.Section>

            <S.Section>
                <S.SectionHeader>
                    <h3 className="typo-title-1">
                        문제 작성 시 주의사항
                    </h3>
                    <p className="typo-content-3">
                        원활한 심사를 위해 다음 사항을 확인해주세요.
                    </p>
                </S.SectionHeader>

                <S.PrecautionList>
                    {PRECAUTIONS.map((item, idx) => (
                        <S.PrecautionItem key={idx}>
                            <S.PrecautionNumber>
                                {String(idx + 1).padStart(2, "0")}
                            </S.PrecautionNumber>

                            <span className="typo-content-2">
                                {item}
                            </span>
                        </S.PrecautionItem>
                    ))}
                </S.PrecautionList>
            </S.Section>
        </S.Container>
    );
};

export default Intro;
