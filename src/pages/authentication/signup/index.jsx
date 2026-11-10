import * as E from "@/apis/email";
import { getErrorMessage } from "@/apis/error";
import logo from "@/assets/logo.svg";
import Button from "@/components/common/button/default";
import Checkbox from "@/components/common/input/checkbox";
import Input from "@/components/common/input/default";
import Modal from "@/components/common/modal";
import { SNAPSHOT as TERMS } from "@/components/static/terms";
import { SNAPSHOT as PRIVACY } from "@/components/static/privacy";
import { useAuth } from "@/contexts/authContext";
import { useToast } from "@/contexts/toastContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const SignupPage = () => {
    const { signup } = useAuth();
    const { showToast } = useToast();
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [nickname, setNickname] = useState("");
    const [isSend, setIsSend] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [agreePrivacy, setAgreePrivacy] = useState(false);
    const [openTerms, setOpenTerms] = useState(false);
    const [openPrivacy, setOpenPrivacy] = useState(false);
    const [sendButtonText, setSendButtonText] = useState("인증코드 요청");
    const [sendButtonLoading, setSendButtonLoading] = useState(false);
    const [verifyButtonLoading, setVerifyButtonLoading] = useState(false);
    const [buttonText, setButtonText] = useState("회원가입");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const currentTerms = TERMS[TERMS.length-1];
    const TermsDocument = currentTerms.component;
    const currentPrivacy = PRIVACY[PRIVACY.length - 1];
    const PrivacyDocument = currentPrivacy.component;

    const handleEmailSendButtonClick = async () => {
        try {
            setIsSend(true);
            setSendButtonLoading(true);

            await E.sendMailForSignup({email});

            setSendButtonText("전송 완료");
        } catch (error) {
            showToast(getErrorMessage(error));
        } finally {
            setSendButtonLoading(false);
            setTimeout(() => {
                setSendButtonText("인증코드 요청");
            }, 3000);
        }
    }

    const handleVerifyCodeButtonClick = async () => {
        setVerifyButtonLoading(true);
        try {
            await E.verifyCode({
                email: email,
                code: code,
                purpose: "REGISTER"
            });

            setIsVerified(true);
        } catch (error) {
            showToast(getErrorMessage(error));
        } finally {
            setVerifyButtonLoading(false);
        }
    }

    const handleSignup = async () => {
        try {
            await signup({
                email,
                nickname,
                password,
                confirmPassword
            });

            showToast("회원가입이 완료되었습니다. 이제 로그인 후 Linub을 이용할 수 있습니다.");
            navigate("/login", { replace: true });
        } catch (error) {
            showToast(getErrorMessage(error));
        }
    }

    const handleKeyDownSignup = (e) => {
        if (e.key === "Enter") {
            handleSignup();
        }
    };

    return (
        <S.Container>
            <S.HeaderArea>
                <img src={logo} 
                    style={{
                        width: "48px",
                        cursor: "pointer"
                    }}
                    onClick={() => navigate("/")}
                />
                <span
                    className="typo-heading-1"
                    style={{
                        color: "var(--color-text-primary)"
                    }}
                >Linub 계정 만들기</span>
                <span
                    className="typo-content-1"
                    style={{
                        color: "var(--color-text-default)"
                    }}
                >Linux를 배우고, 익히고, 직접 실습해보세요.</span>
            </S.HeaderArea>

            <S.InputArea>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "12px"
                    }}
                >
                    <span
                        className="typo-content-1"
                        style={{color: "var(--color-text-primary)", alignSelf: "flex-start"}}
                    >이메일</span>
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            gap: "12px"
                        }}
                    >
                        <Input
                            value={email}
                            placeholder="linub@example.com"
                            minHeight="40px"
                            onChange={(e) => setEmail(e.target.value)}
                            readOnly={isVerified}
                            autofocus={true}
                        />
                        <Button 
                            text={sendButtonText}
                            size="small"
                            variant="quaternary"
                            onClick={() => handleEmailSendButtonClick()}
                            disabled={email.length < 3}
                            loading={sendButtonLoading}
                            loadingText="요청 중"
                        />
                    </div>
                </div>
                {
                    isSend &&
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "12px"
                            }}
                        >
                            <span
                                className="typo-content-1"
                                style={{color: "var(--color-text-primary)", alignSelf: "flex-start"}}
                            >인증 코드</span>
                            <div
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    gap: "12px"
                                }}
                            >
                                <Input
                                    value={code}
                                    placeholder="이메일을 확인해주세요"
                                    minHeight="40px"
                                    onChange={(e) => setCode(e.target.value)}
                                    readOnly={isVerified}
                                />
                                <Button 
                                    text="확인"
                                    size="small"
                                    loading={verifyButtonLoading}
                                    loadingText="확인 중"
                                    disabled={code.length < 6}
                                    onClick={() => handleVerifyCodeButtonClick()}
                                />
                            </div>
                        </div>
                }
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "12px"
                    }}
                >
                    <span
                        className="typo-content-1"
                        style={{color: "var(--color-text-primary)", alignSelf: "flex-start"}}
                    >닉네임</span>
                    <Input
                        value={nickname}
                        placeholder="한글, 영어, 숫자 및 공백만 가능"
                        minHeight="40px"
                        onChange={(e) => setNickname(e.target.value)}
                        disabled={!isVerified}
                    />
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "12px"
                    }}
                >
                    <span
                        className="typo-content-1"
                        style={{color: "var(--color-text-primary)", alignSelf: "flex-start"}}
                    >비밀번호</span>
                    <Input
                        value={password}
                        placeholder="영어, 숫자, 특수기호 모두 포함한 8~32자"
                        minHeight="40px"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={!isVerified}
                    />
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "12px"
                    }}
                >
                    <span
                        className="typo-content-1"
                        style={{color: "var(--color-text-primary)", alignSelf: "flex-start"}}
                    >비밀번호 확인</span>
                    <Input
                        value={confirmPassword}
                        placeholder="한 번 더 입력"
                        minHeight="40px"
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onKeyDown={handleKeyDownSignup}
                        disabled={!isVerified}
                    />
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px"
                    }}
                >
                    <span
                        className="typo-content-1"
                        style={{color: "var(--color-text-primary)", alignSelf: "flex-start"}}
                    >이용약관 및 개인정보 안내</span>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Checkbox
                            checked={agreeTerms}
                            label="[필수] 서비스 이용약관에 동의합니다."
                            onChange={() => setAgreeTerms(prev => !prev)}
                        />
                        <span
                            className="typo-content-3"
                            style={{color: "var(--color-primary)", cursor: "pointer"}}
                            onClick={() => setOpenTerms(prev => !prev)}
                        >[보기]</span>
                        {openTerms && <Modal
                            maxWidth="90%"
                            maxHeight="90%"
                        >
                                <span
                                    className="typo-content-4"
                                    style={{
                                        color: "var(--color-text-default)",
                                        alignSelf: "flex-end",
                                        cursor: "pointer",
                                        padding: "4px"
                                    }}
                                    onClick={() => setOpenTerms(false)}
                                >X</span>
                                <TermsDocument current={currentTerms} />
                            </Modal>
                        }
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Checkbox
                            checked={agreePrivacy}
                            label="[필수] 개인정보처리방침에 동의합니다."
                            onChange={() => setAgreePrivacy(prev => !prev)}
                        />
                        <span
                            className="typo-content-3"
                            style={{color: "var(--color-primary)", cursor: "pointer"}}
                            onClick={() => setOpenPrivacy(prev => !prev)}
                        >[보기]</span>
                        {openPrivacy && <Modal
                            maxWidth="90%"
                            maxHeight="90%"
                        >
                                <span
                                    className="typo-content-4"
                                    style={{
                                        color: "var(--color-text-default)",
                                        alignSelf: "flex-end",
                                        cursor: "pointer",
                                        padding: "4px"
                                    }}
                                    onClick={() => setOpenPrivacy(false)}
                                >X</span>
                                <PrivacyDocument current={currentPrivacy} />
                            </Modal>
                        }
                    </div>
                </div>
                <Button
                    text={buttonText}
                    disabled={email.length === 0 
                        || !isVerified
                        || password.length === 0
                        || password !== confirmPassword
                        || !agreeTerms}
                    onClick={() => handleSignup()}
                />
            </S.InputArea>

            <div
                style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center"
                }}
            >
                <span
                    className="typo-content-1"
                    style={{
                        color: "var(--color-text-default)"
                    }}
                >이미 계정이 있으신가요?</span>
                <span
                    className="typo-content-1"
                    style={{
                        color: "var(--color-primary)",
                        cursor: "pointer"
                    }}
                    onClick={() => navigate("/login")}
                >로그인</span>
            </div>
        </S.Container>
    );
}

export default SignupPage;