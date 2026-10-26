import Hr from "@/components/common/layout/hr";
import * as S from "./styles";

const Sequence5 = ({form}) => {

    return (
        <S.Container>
            <S.ChecklistArea>
                <div
                    style={{padding: "12px 16px"}}
                >
                    <p className="typo-title-1"
                    >제출 전 확인</p>
                    <p className="typo-content-3"
                        style={{color: "var(--color-text-label)", marginTop: "4px"}}
                    >빨간색 글씨가 안 보이면 제출 가능한 상태입니다.</p>
                </div>
                <Hr />
                <S.ChecklistList>
                    <S.ChecklistItem>
                        <S.LabelTitle>문제 제목</S.LabelTitle>
                        <S.LabelValue $color={form.title ? "--color-primary" : "--color-danger"}>{form.title || "제목 미작성"}</S.LabelValue>
                    </S.ChecklistItem>
                    <S.ChecklistItem>
                        <S.LabelTitle>문제 유형</S.LabelTitle>
                        <S.LabelValue $color="--color-primary">{form.type === "MULTIPLE" ? "객관식" : "주관식"}</S.LabelValue>
                    </S.ChecklistItem>
                    <S.ChecklistItem>
                        <S.LabelTitle>문제 질문</S.LabelTitle>
                        <S.LabelValue $color={form.question ? "--color-primary" : "--color-danger"}>{form.question || "질문 미작성"}</S.LabelValue>
                    </S.ChecklistItem>
                    <S.ChecklistItem>
                        <S.LabelTitle>이미지</S.LabelTitle>
                        <S.LabelValue $color={!!form.image && "--color-primary"}>{!!form.image ? form.image.name : "이미지 없음"}</S.LabelValue>
                    </S.ChecklistItem>
                    <S.ChecklistItem>
                        <S.LabelTitle>소스코드</S.LabelTitle>
                        <S.LabelValue $color={form.sourceCode && "--color-primary"}>{form.sourceCode || "소스코드 없음"}</S.LabelValue>
                    </S.ChecklistItem>
                    {form.sourceCode &&
                        <S.ChecklistItem>
                            <S.LabelTitle>언어</S.LabelTitle>
                            <S.LabelValue $color={form.language ? "--color-primary" : "--color-danger"}>{form.language || "언어 미선택"}</S.LabelValue>
                        </S.ChecklistItem>
                    }
                    <S.ChecklistItem>
                        <S.LabelTitle>정답</S.LabelTitle>
                        <S.LabelValue $color={form.type ? "--color-primary" : "--color-danger"}>{form.type === "MULTIPLE" ? "입력 완료" : `${form.shortAnswers.length}개 작성`}</S.LabelValue>
                    </S.ChecklistItem>
                    <S.ChecklistItem>
                        <S.LabelTitle>해설</S.LabelTitle>
                        <S.LabelValue $color={form.explanation ? "--color-primary" : "--color-danger"}>{form.explanation || "해설 미작성"}</S.LabelValue>
                    </S.ChecklistItem>
                    <S.ChecklistItem>
                        <S.LabelTitle>과목</S.LabelTitle>
                        <S.LabelValue $color={form.subjects.length > 0 ? "--color-primary" : "--color-danger"}>{form.subjects.length}개 선택</S.LabelValue>
                    </S.ChecklistItem>
                </S.ChecklistList>
            </S.ChecklistArea>
            <S.NoticeArea>
                <span className="typo-title-1" style={{marginBottom: "8px"}}>
                    제출 전 확인해주세요.
                </span>
                <p className="typo-content-3">제출된 문제는 즉시 등록되지 않으며, 심사 진행 상황에 따라 처리에 시간이 소요될 수 있습니다.</p>
                <p className="typo-content-3">3명의 검토를 거쳐 2명 이상 승인할 경우 정식으로 등록됩니다.</p>
                <p className="typo-content-3">심사 결과는 마이페이지의 '업로드 요청 문제'에서 확인할 수 있습니다.</p>
            </S.NoticeArea>
        </S.Container>
    );
}

export default Sequence5;