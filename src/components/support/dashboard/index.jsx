import * as S from "./styles";

const STEPS = [
    {
        key: "문의 작성",
        desc: "문의 내용 입력"
    },
    {
        key: "문의 접수",
        desc: "문의 등록"
    },
    {
        key: "접수 확인",
        desc: "이메일로 접수 안내"
    },
    {
        key: "답변 대기",
        desc: "관리자 문의 검토"
    },
    {
        key: "답변 완료",
        desc: "이메일로 답변 알림"
    },
    {
        key: "답변 확인",
        desc: "메일에 전달된 문의 아이디와 비밀번호로 조회"
    },
];

const SupportDashboard = () => {
    return (
        <S.Container>
            <S.SubContainer>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <span
                        className="typo-heading-2"
                        style={{
                            color: "var(--color-text-primary)",
                            marginBottom: "4px"
                        }}
                    >고객 지원 절차</span>
                    <span
                        className="typo-content-2"
                        style={{
                            color: "var(--color-text-default)"
                        }}
                    >문의 접수부터 답변까지의 진행 절차를 안내합니다.</span>
                </div>
                <S.ProcessArea>
                    {STEPS.map((step, idx) => {
                        return (
                            <S.StepItem
                                key={idx}
                                $completed={true}
                            >
                                <S.StepCircle $active={true}>
                                    {idx+1}
                                </S.StepCircle>
                                <span
                                    className="typo-title-1"
                                    style={{color: "var(--color-text-primary)"}}
                                >{step.key}</span>
                                <span
                                    className="typo-content-3"
                                    style={{color: "var(--color-text-label)"}}
                                >{step.desc}</span>
                            </S.StepItem>
                        )
                    })}
                </S.ProcessArea>
            </S.SubContainer>
        </S.Container>
    );
}

export default SupportDashboard;