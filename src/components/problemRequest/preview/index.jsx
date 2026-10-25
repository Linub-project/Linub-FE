import Button from "@/components/common/button/default";
import Image from "@/components/common/image";
import Hr from "@/components/common/layout/hr";
import TerminalBG from "@/components/common/terminal";
import { OPTION_ICON } from "@/constants/optionIcon";
import * as S from "./styles";

const ProblemRequestPreview = ({
    form,
    setOpenPreview
}) => {
    const answerIdx = form.options.findIndex(item => item.isAnswer);
    return (
        <S.PreviewModal>
            <div
                className="typo-content-3"
                style={{
                    height: "40px",
                    backgroundColor: "var(--color-warning-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 24px",
                    borderRadius: "0"
                }}
            >
                <span style={{color: "var(--yellow-900)"}}>미리모기 모드 - 실제 문제처럼 표시됩니다.</span>
                <span style={{color: "var(--yellow-900)", cursor: "pointer"}}
                    onClick={() => setOpenPreview(false)}
                >돌아가기 →</span>
            </div>
            <div
                style={{
                    padding: "40px 24px",
                    maxWidth: "800px",
                    alignSelf: "center",
                    width: "100%"
                }}
            >
                <S.Container>
                    <S.TopArea>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px"
                            }}
                        >
                            <span
                                className="typo-content-1"
                                style={{color: "var(--color-text-primary)"}}
                            >문제 1</span>
                            <span
                                className="typo-content-3"
                                style={{color: "var(--color-text-default)"}}
                            >1 / 1 답안 작성</span>
                        </div>
                        <Button
                            text="북마크"
                            size="small"
                            variant="tertiary"
                        />
                    </S.TopArea>
                    <Hr />
                    <S.ContentArea>
                        <p
                            className="typo-title-1"
                            style={{color: "var(--color-text-primary)"}}
                        >{form.question || "질문이 여기에 표시됩니다."}</p>
                        {
                            form.imageUrl &&
                                <Image src={form.imageUrl} />
                        }
                        {
                            form.sourceCode && 
                                <TerminalBG content={form.sourceCode} language={form.language}/>
                        }
                        <S.OptionArea>
                            {form.options.map((option, idx) => {
                                return (
                                    <S.OptionItem
                                        key={idx}
                                    >
                                        <img
                                            src={OPTION_ICON[idx].default}
                                            style={{ width: "18px" }}
                                            alt={`${idx + 1}번`}
                                        />
                                        <span className="typo-content-1">
                                            {option.content || `옵션 ${idx+1}`}
                                        </span>
                                    </S.OptionItem>
                                );
                            })}
                        </S.OptionArea>
                    </S.ContentArea>
                    <Hr />
                    <S.BottomArea>
                        <div>
                            <Button
                                text="다음 →"
                                size="small"
                                variant="tertiary"
                                onClick={() => setSelectedProblem(prev => prev + 1)}
                            />
                        </div>
                    </S.BottomArea>
                </S.Container>
                <S.ExplanationContainer>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "12px 16px",
                            gap: "6px"
                        }}
                    >
                        <span className="typo-title-1"
                            style={{
                                color: "var(--color-primary)"
                            }}
                        >정답</span>
                        <span className="typo-content-1" style={{color: "var(--color-text-primary)"}}>{answerIdx !== -1 ? `${answerIdx+1}번` : "등록된 정답이 없습니다."}</span>
                    </div>
                    <Hr bg="var(--color-primary-border)" />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "12px 16px",
                            gap: "6px"
                        }}
                    >
                        <span className="typo-title-1"
                            style={{
                                color: "var(--color-primary)"
                            }}
                        >해설</span>
                        <p className="typo-content-1" style={{color: "var(--color-text-primary)"}}>
                            {form.explanation || "등록된 해설이 없습니다."}
                        </p>
                    </div>
                    <Hr bg="var(--color-primary-border)" />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "12px 16px",
                            gap: "6px"
                        }}
                    >
                        <span className="typo-title-1"
                            style={{
                                color: "var(--color-primary)"
                            }}
                        >정답률</span>
                        <span className="typo-content-1" style={{color: "var(--color-text-primary)"}}>
                            {"통계 없음"}
                        </span>
                    </div>
                </S.ExplanationContainer>
            </div>
        </S.PreviewModal>
    );
}

export default ProblemRequestPreview;