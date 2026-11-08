import Button from "@/components/common/button/default";
import { TagChip } from "@/components/common/cardchip/CardChip";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import Hr from "@/components/common/layout/hr";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Inquiry = ({inquire}) => {
    const navigate = useNavigate();
    return (
        <S.Container>
            <S.SubContainer>
                <div
                    className="typo-content-3"
                    style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center"
                    }}
                >
                    <TagChip>{inquire.type}</TagChip>
                    <span
                        style={{
                            padding: "2px 6px",
                            color: inquire.status === "PENDING" ? "var(--color-warning-text)" : "var(--color-primary)",
                            backgroundColor: inquire.status === "PENDING" ? "var(--color-warning-bg)" : "var(--color-primary-bg)"
                        }}
                    >{inquire.status === "PENDING" ? "답변 대기" : "답변 완료"}</span>
                </div>
                <p
                    className="typo-title-1"
                >{inquire.title}</p>
                <S.MetadataArea
                    className="typo-content-4"
                >
                    <S.MetadataItem>
                        <span style={{color: "var(--color-text-label)"}}>문의 아이디</span>
                        <span style={{color: "var(--color-text-default)"}}>{inquire.id}</span>
                    </S.MetadataItem>
                    <S.MetadataItem>
                        <span style={{color: "var(--color-text-label)"}}>문의 일자</span>
                        <span style={{color: "var(--color-text-default)"}}>{formatDate(inquire.createdAt, DATE_FORMAT.DOT_DATE_TIME)}</span>
                    </S.MetadataItem>
                </S.MetadataArea>
            </S.SubContainer>
            <Hr />
            <S.SubContainer>
                <p
                    className="typo-title-2"
                    style={{color: "var(--color-text-primary)"}}
                >문의 내용</p>
                <p
                    className="typo-content-1"
                    style={{color: "var(--color-text-default)"}}
                >{inquire.content}</p>
            </S.SubContainer>
            <Hr />
            <S.SubContainer
                style={{
                    backgroundColor: "var(--color-primary-bg)"
                }}
            >
                <p
                    className="typo-title-2"
                    style={{color: "var(--color-text-primary)"}}
                >문의 답변</p>
                {
                    inquire.status === "PROCESSED" ?
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                            alignItems: "flex-start",
                            backgroundColor: "var(--color-primary-bg)",
                            width: "100%"
                        }}
                    >
                        <p
                            className="typo-content-1"
                            style={{
                                color: "var(--color-primary)",
                                whiteSpace: "pre-line"
                            }}
                        >{inquire.reply}</p>
                    </div>
                    :
                    <EmptyStateGlobal
                        title="아직 답변이 등록되지 않았습니다."
                        description="문의 내용을 확인한 후 답변이 등록되면 이 페이지에서 확인하실 수 있습니다."
                        minHeight="120px"
                    />
                }
            </S.SubContainer>
            <Hr />
            <S.SubContainer>
                <p
                    className="typo-title-2"
                    style={{color: "var(--color-text-primary)"}}
                >추가로 궁금한 점이 있으신가요?</p>
                <p
                    className="typo-content-4"
                    style={{color: "var(--color-text-default)"}}
                >하나의 문의에는 한 번의 답변만 제공됩니다. 추가 문의가 필요하다면 새로운 문의글을 작성해 주세요.</p>
                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                        marginTop: "24px",
                        flexWrap: "wrap"
                    }}
                >
                    <Button
                        text="새 문의 작성하기"
                        size="small"
                        onClick={() => navigate("/support/write")}
                    />
                    <Button
                        text="고객지원으로 돌아가기"
                        size="small"
                        variant="tertiary"
                        onClick={() => navigate("/support")}
                    />
                </div>
            </S.SubContainer>
        </S.Container>
    );
}

export default Inquiry;