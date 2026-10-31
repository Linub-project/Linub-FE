import * as PS from "../styles";
import * as S from "./styles";

const STEP = [
    {
        key: "문제 작성",
        desc: "객관식 또는 주관식 유형을 선택하고 문제와 보기를 작성합니다."
    },
    {
        key: "정답과 해설 입력",
        desc: "학습자가 이해할 수 있는 근거와 해설을 입력합니다."
    },
    {
        key: "등록 요청",
        desc: "필수 정보를 확인한 뒤 검토를 요청합니다."
    },
    {
        key: "검토 및 심사",
        desc: "자격 인증 정책에 따라 권한을 가진 사용자가 내용을 검토합니다."
    },
    {
        key: "승인 후 반영",
        desc: "승인된 문제는 서비스 문제 데이터에 반영될 수 있습니다."
    },
];

const Problem = () => {
    return (
        <PS.ContentContainer>
            <PS.Section>
                <PS.TitleText>문제 제작과 심사 과정</PS.TitleText>
                <S.StartArea>
                    {
                        STEP.map((item, idx) => (
                            <S.StepItem key={idx}>
                                <S.StepCircle
                                    className="terminal typo-content-3"
                                >{String(idx + 1).padStart(2, "0")}</S.StepCircle>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "12px",
                                        padding: "16px 24px",
                                        border: "1px solid var(--color-border)",
                                        flex: 1
                                    }}
                                >
                                    <p
                                        className="typo-title-1"
                                        style={{color: "var(--color-text-primary)"}}
                                    >{item.key}</p>
                                    <p
                                        className="typo-content-2"
                                        style={{color: "var(--color-text-default)"}}
                                    >{item.desc}</p>
                                </div>
                            </S.StepItem>
                        ))
                    }
                </S.StartArea>
            </PS.Section>
            <S.CallOut
                className="typo-content-2"
            >문제 심사 권한과 실제 승인 조건은 현재 서비스 정책을 따릅니다.</S.CallOut>
        </PS.ContentContainer>
    );
}

export default Problem;