import { getErrorMessage } from "@/apis/error";
import * as PJ from "@/apis/problemJudge";
import * as PR from "@/apis/problemRequest";
import judge_accept from "@/assets/icon/icon_judge_accept.svg";
import judge_disable from "@/assets/icon/icon_judge_disable.svg";
import judge_reject from "@/assets/icon/icon_judge_reject.svg";
import Button from "@/components/common/button/default";
import Image from "@/components/common/image";
import { TextArea } from "@/components/common/input/textarea/styles";
import TerminalBG from "@/components/common/terminal";
import { OPTION_ICON } from "@/constants/optionIcon";
import { useAuth } from "@/contexts/authContext";
import { useToast } from "@/contexts/toastContext";
import { formatDate } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";

const ProblemJudgeDetail = () => {
    const { user } = useAuth();
    const {id} = useParams();
    const navigate = useNavigate();
    const {showToast} = useToast();
    const [request, setRequest] = useState([]);
    const [selectedButton, setSelectedButton] = useState(null);
    const [reason, setReason] = useState("");
    const [buttonText, setButtonText] = useState("심사 제출");
    const [isSend, setIsSend] = useState(false);

    const fetchRequest = async () => {
        try {
            const response = await PR.getProblemRequest(id);
            setRequest(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchRequest();
    }, [id]);

    if(!user.certificated) {
        return <Navigate to="/mypage" replace />;
    }

    if(!request) {
        return <div></div>;
    }

    const handleSubmit = async () => {
        setIsSend(true);
        try {
            const form = {
                judge: selectedButton === "ACCEPT" ? true : false,
                reason: reason
            };
            await PJ.addJudgement(id, form);
            fetchRequest();
        } catch (error) {
            showToast(getErrorMessage(error));
            setButtonText("심사 제출");
        } finally {
            setIsSend(false);
        }
    }

    return (
        <S.Container>
            <Button
                text="← 목록으로"
                variant="tertiary"
                size="small"
                width="fit-content"
                onClick={() => navigate(-1)}
            />

            <section
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100%",
                    gap: "12px"
                }}
            >
                <p
                    className="typo-title-2"
                    style={{color: "var(--color-text-default)"}}
                >개요</p>
                <S.Section>
                    <div
                        className="typo-content-3"
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            flexWrap: "wrap",
                            gap: "8px",
                            alignItems: "center"
                        }}
                    >
                        <span
                            style={{
                                color: request.type === "MULTIPLE" ? "var(--color-primary)" : "var(--color-danger)",
                                backgroundColor: request.type === "MULTIPLE" ? "var(--color-primary-bg)" : "var(--color-danger-bg)",
                                padding: "2px 6px"
                            }}
                        >{request.type === "MULTIPLE" ? "객관식" : "주관식"}</span>
                        {
                            request.subjects?.map((sub) => (
                                <span key={sub.id}
                                    style={{
                                        color: "var(--color-secondary)",
                                        backgroundColor: "var(--color-secondary-bg)",
                                        padding: "2px 6px"
                                    }}
                                >{sub.code}. {sub.subject}</span>
                            ))
                        }
                    </div>
                    <div
                        className="typo-title-1"
                    >{request.title}</div>
                    <div
                        className="typo-content-3"
                        style={{color: "var(--color-text-label)"}}
                    >{formatDate(request.createdAt)}</div>
                </S.Section>
            </section>

            <section
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100%",
                    gap: "12px"
                }}
            >
                <p
                    className="typo-title-2"
                    style={{color: "var(--color-text-default)"}}
                >문제</p>
                <S.Section>
                    <span
                        className="typo-title-1"
                    >Q. {request.question}</span>
                    {
                        request.imageUrl &&
                            <Image src={request.imageUrl} />
                    }
                    {
                        request.sourceCode && 
                            <TerminalBG content={request.sourceCode} language={request.language}/>
                    }
                    <S.OptionArea>
                        {request.options?.map((option, idx) => {
                            return (
                                <S.OptionItem
                                    key={option.id}
                                >
                                    <img
                                        src={OPTION_ICON[idx].default}
                                        style={{ width: "18px" }}
                                        alt={`${idx + 1}번`}
                                    />
                                    <span className="typo-content-1">
                                        {option.content}
                                    </span>
                                </S.OptionItem>
                            );
                        })}
                    </S.OptionArea>
                </S.Section>
            </section>

            <section
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100%",
                    gap: "12px"
                }}
            >
                <p
                    className="typo-title-2"
                    style={{color: "var(--color-text-default)"}}
                >해설</p>
                <S.Section
                    className="typo-content-1"
                    style={{
                        backgroundColor: "var(--color-primary-bg)",
                        border: "1px solid var(--color-primary-border)",
                        color: "var(--color-primary)"
                    }}
                >
                    {request.explanation}
                </S.Section>
            </section>

            {
                request.isJudged ?
                    <section
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            gap: "12px"
                        }}
                    >
                        <p
                            className="typo-title-2"
                            style={{color: "var(--color-text-default)"}}
                        >심사 현황</p>
                        <S.JudgeList>
                            {
                                request.judges.map((judge, idx) => (
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            gap: "4px"
                                        }}
                                    >
                                        <img key={idx}
                                            src={judge.judge ? judge_accept : judge_reject}
                                            width="32px"
                                            height="32px"
                                        />
                                        <span
                                            className="typo-title-1"
                                            style={{color: judge.judge ? "var(--color-primary)" : "var(--color-danger)"}}
                                        >Reviewer {idx+1}{judge.judgeId === user.userId && " (본인)"}</span>
                                    </div>
                                ))
                            }{
                                Array.from({length: 3-request.judges.length}).map((_, idx) => (
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            gap: "4px"
                                        }}
                                    >
                                        <img key={idx}
                                            src={judge_disable}
                                            width="32px"
                                            height="32px"
                                        />
                                        <span
                                            className="typo-title-1"
                                            style={{color: "var(--color-text-label)"}}
                                        >Reviewer {request.judges.length+idx+1}</span>
                                    </div>
                                ))
                            }
                        </S.JudgeList>
                    </section>
                    :
                    <section
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: "100%",
                            gap: "12px"
                        }}
                    >
                        <p
                            className="typo-title-2"
                            style={{color: "var(--color-text-default)"}}
                        >심사</p>
                        <S.Section style={{gap: "24px"}}>
                            <div
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    gap: "16px"
                                }}
                            >
                                <S.Button
                                    className="typo-title-1"
                                    $color={selectedButton === "ACCEPT" && "var(--color-primary)"}
                                    $bg={selectedButton === "ACCEPT" && "var(--color-primary-bg)"}
                                    $border={selectedButton === "ACCEPT" && "var(--color-primary)"}
                                    onClick={() => setSelectedButton("ACCEPT")}
                                >
                                    승인
                                </S.Button>
                                <S.Button
                                    className="typo-title-1"
                                    $color={selectedButton === "REJECT" && "var(--color-danger)"}
                                    $bg={selectedButton === "REJECT" && "var(--color-danger-bg)"}
                                    $border={selectedButton === "REJECT" && "var(--color-danger)"}
                                    onClick={() => setSelectedButton("REJECT")}
                                >
                                    반려
                                </S.Button>
                            </div>
                            {
                                selectedButton &&
                                <div
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "8px"
                                    }}
                                >
                                    <p
                                        className="typo-title-2"
                                        style={{color: "var(--color-text-default)"}}
                                    >코멘트 ({selectedButton === "ACCEPT" ? "선택" : "필수"})</p>
                                    <TextArea
                                        $h="120px"
                                        $focusBorder={selectedButton === "REJECT" && "var(--color-danger)"}
                                        $shadow={selectedButton === "REJECT" && "var(--shadow-input-error)"}
                                        placeholder={selectedButton === "ACCEPT" ? "추가 코멘트를 남길 수 있습니다(작성자에게 전달)" : "반려 시 필수로 이유를 남겨야합니다."}
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                    />
                                </div>
                            }
                            <Button
                                text={buttonText}
                                loading={isSend}
                                width="100%"
                                variant={selectedButton === "ACCEPT" ? "primary" : "quinary"}
                                disabled={!selectedButton || (selectedButton === "REJECT" && !reason)}
                                onClick={handleSubmit}
                            />
                        </S.Section>
                    </section>
            }
        </S.Container>
    );
}

export default ProblemJudgeDetail;