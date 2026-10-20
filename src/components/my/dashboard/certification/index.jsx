import * as C from "@/apis/certification";
import Button from "@/components/common/button/default";
import EmptyStateGlobal from "@/components/common/emptyState/global";
import Image from "@/components/common/image";
import Input from "@/components/common/input/default";
import Select from "@/components/common/input/select";
import { CERTIFICATION } from "@/constants/certification";
import { useToast } from "@/contexts/toastContext";
import { getCertificationStatusStyle } from "@/utils/certificationStatusStyler";
import { DATE_FORMAT, formatDate } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import * as S from "./styles";

const CertificationRequest = () => {
    const { showToast } = useToast();
    const [requests, setRequests] = useState([]);
    const [certification, setCertification] = useState("LM1");
    const [image, setImage] = useState(null);
    const [openRequestView, setOpenRequestView] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [openImageId, setOpenImageId] = useState(null);

    const fetchRequests = async () => {
        try {
            const response = await C.getMyCertificationRequests();
            setRequests(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchRequests();
    }, []);

    if(!requests) {
        return <div></div>;
    }

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) {
            setImage(null);
            return;
        }

        if (!file.type.startsWith("image/")) {
            showToast("이미지 파일만 업로드할 수 있습니다.");
            e.target.value = "";
            setImage(null);
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            showToast("이미지는 최대 5MB까지 업로드할 수 있습니다.");
            e.target.value = "";
            setImage(null);
            return;
        }

        setImage(file);
    };

    const handleRequestViewToggle = () => {
        if (isSubmitting) return;

        if (openRequestView) {
            setCertification("");
            setImage(null);
        }

        setOpenRequestView(prev => !prev);
    };

    const handleRequestSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        if (!certification) {
            showToast("인증할 자격증을 선택해주세요.");
            return;
        }

        if (!image) {
            showToast("자격증 증빙 이미지를 첨부해주세요.");
            return;
        }

        const formData = new FormData();
        formData.append("certification", certification);
        formData.append("file", image);

        setIsSubmitting(true);

        try {
            await C.createCertificationRequest(formData);

            setCertification("");
            setImage(null);
            setOpenRequestView(false);

            fetchRequests();
        } catch (error) {
            showToast("자격증 인증 요청에 실패했습니다.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleImageToggle = (id) => {
        setOpenImageId(prev => prev === id ? null : id);
    };

    return (
        <S.Container>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "28px"
                }}
            >
                <div>
                    <p
                        className="typo-title-1"
                        style={{color: "var(--color-text-primary)"}}
                    >자격 인증 요청</p>
                    <p
                        className="typo-content-3"
                        style={{color: "var(--color-text-default)"}}
                    >Linux 관련 자격증을 인증하면 문제 심사 권한이 부여됩니다.</p>
                </div>
                <Button
                    text={openRequestView ? "닫기" : "인증 요청"}
                    size="small"
                    variant={openRequestView ? "tertiary" : "primary"}
                    onClick={handleRequestViewToggle}
                    disabled={isSubmitting}
                />
            </div>
            {openRequestView && (
                <form
                    onSubmit={handleRequestSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        padding: "20px",
                        border: "1px solid var(--color-border)",
                        borderRadius: "8px"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px"
                        }}
                    >
                        <p
                            className="typo-title-1"
                            style={{ color: "var(--color-text-primary)" }}
                        >자격증 선택</p>
                        <Select
                            value={certification}
                            options={CERTIFICATION}
                            onChange={(e) => setCertification(e.target.value)}
                            width="100%"
                            required
                        />
                        {
                            ["LM1", "LM2"].includes(certification) && <>
                                <p className="typo-content-3" style={{color: "var(--color-text-default)"}}>리눅스마스터 자격증의 경우, 인증 요청을 일정 건수 취합한 후 한국정보통신진흥협회에 일괄적으로 진위 확인을 요청합니다. 따라서 인증 심사 및 처리에 다소 시간이 소요될 수 있습니다.</p>
                                <p className="typo-content-3" style={{color: "var(--color-text-default)"}}>제출 정보가 일치하지 않거나 진위가 확인되지 않을 경우 인증이 반려될 수 있습니다.</p>
                            </>
                        }
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px"
                        }}
                    >
                        <p
                            className="typo-title-1"
                            style={{ color: "var(--color-text-primary)" }}
                        >자격증 증빙 이미지</p>
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                        />
                        <p
                            className="typo-content-3"
                            style={{ color: "var(--color-text-label)" }}
                        >자격증 또는 인증 내역을 확인할 수 있는 이미지를 첨부해주세요. (최대 5MB)</p>
                        <p
                            className="typo-content-3"
                            style={{ color: "var(--color-danger)" }}
                        >증빙 사진은 요청 처리 후 모든 저장소에서 삭제됩니다.</p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: "8px"
                        }}
                    >
                        <Button
                            text="취소"
                            type="button"
                            size="small"
                            variant="tertiary"
                            onClick={handleRequestViewToggle}
                            disabled={isSubmitting}
                        />
                        <Button
                            text={isSubmitting ? "요청 중..." : "인증 요청 제출"}
                            type="submit"
                            size="small"
                            disabled={isSubmitting}
                        />
                    </div>
                </form>
            )}
            {
                requests.length > 0 ?
                    <S.RequestList>
                        {
                            requests.map((item) => {
                                const name = CERTIFICATION.filter(c => c.value === item.certification);
                                return <S.RequestItem key={item.id}>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            gap: "6px",
                                            flex: 1
                                        }}
                                    >
                                        <span
                                            className="typo-content-3"
                                            style={{color: "var(--color-text-default)"}}
                                        >{formatDate(item.createdAt, DATE_FORMAT.DOT_DATE_TIME)}</span>
                                        <span
                                            className="typo-title-1"
                                        >{name[0].label}</span>
                                        {
                                            item.updatedAt !== item.createdAt && <span
                                                    className="typo-content-3"
                                                >처리일시: {formatDate(item.updatedAt, DATE_FORMAT.DOT_DATE_TIME)}</span>
                                        }
                                        {item.status === "WAIT" && item.imageUrl !== "removed" && (
                                            <>
                                                <S.ImageButton
                                                    className="typo-content-1"
                                                    onClick={() => handleImageToggle(item.id)}
                                                >
                                                    {openImageId === item.id ? "증빙 이미지 닫기" : "증빙 이미지 보기"}
                                                </S.ImageButton>
                                                {openImageId === item.id && (
                                                    <Image
                                                        src={item.imageUrl}
                                                        width="120px"
                                                        height="auto"
                                                    />
                                                )}
                                            </>
                                        )}
                                    </div>
                                    <span
                                        className="typo-content-1"
                                        style={{
                                            color: `var(${getCertificationStatusStyle(item.status).text})`,
                                            backgroundColor: `var(${getCertificationStatusStyle(item.status).bg})`,
                                            padding: "2px 6px",
                                            alignSelf: "flex-start"
                                        }}
                                    >{`${getCertificationStatusStyle(item.status).value}`}</span>
                                    {
                                        item.status !== "WAIT" && <span
                                            className="typo-content-3"
                                            style={{
                                                color: "var(--color-text-default)"
                                            }}
                                        >{item.reason}</span>
                                    }
                                </S.RequestItem>
                            })
                        }
                    </S.RequestList>
                    :
                    <EmptyStateGlobal
                        title="인증 요청 이력이 없습니다."
                        description="보유한 자격증을 인증하고, 문제 심사에 참여해보세요."
                        minHeight="240px"
                    />
            }
        </S.Container>
    );
}

export default CertificationRequest;