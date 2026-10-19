import certified from "@/assets/icon/icon_certified.svg";
import Button from "@/components/common/button/default";
import ProfileImage from "@/components/common/profile";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Profile = ({user}) => {
    const navigate = useNavigate();
    
    return (
        <S.Container>
            <ProfileImage user={user} size={80} font="24px" />
            <S.InformationArea>
                <p
                    className="typo-heading-1"
                    style={{
                        color: "var(--color-text-primary)",
                        marginBottom: "4px"
                    }}
                >{user.nickname}</p>
                <p
                    className="typo-content-1"
                    style={{
                        color: "var(--color-text-default)",
                        marginBottom: "16px"
                    }}
                >junsu120202@gmail.com</p>
                <p
                    className="typo-content-1"
                    style={{
                        color: "var(--color-text-primary)",
                        marginBottom: "16px"
                    }}
                >Linux 시스템과 네트워크를 공부하며, 배운 내용을 매일 기록하고 있습니다.</p>
                <p
                    className="typo-content-3"
                    style={{
                        color: "var(--color-text-default)",
                        marginBottom: "16px"
                    }}
                >가입일 2026.02.12</p>
                { // api 호출 필요
                    !user.isCertified &&
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                width: "100%",
                                gap: "8px"
                            }}
                        >
                            <S.CertificationItem>
                                <img src={certified} width="16px" height="16px" />
                                <span
                                    className="typo-title-2"
                                    style={{
                                        color: "var(--color-primary)"
                                    }}
                                >리눅스마스터 1급</span>
                            </S.CertificationItem>
                            <S.CertificationItem>
                                <img src={certified} width="16px" height="16px" />
                                <span
                                    className="typo-title-2"
                                    style={{
                                        color: "var(--color-primary)"
                                    }}
                                >리눅스마스터 2급</span>
                            </S.CertificationItem>
                            <S.CertificationItem>
                                <img src={certified} width="16px" height="16px" />
                                <span
                                    className="typo-title-2"
                                    style={{
                                        color: "var(--color-primary)"
                                    }}
                                >RHCSA</span>
                            </S.CertificationItem>
                            <S.CertificationItem>
                                <img src={certified} width="16px" height="16px" />
                                <span
                                    className="typo-title-2"
                                    style={{
                                        color: "var(--color-primary)"
                                    }}
                                >LPIC1</span>
                            </S.CertificationItem>
                        </div>
                }
            </S.InformationArea>
            <S.ButtonArea>
                <Button
                    text="프로필 수정"
                    variant="tertiary"
                    size="small"
                />
                {
                    user.role === "ADMIN" &&
                        <Button
                            text="관리자 페이지"
                            variant="quinary"
                            size="small"
                            onClick={() => navigate("/admin")}
                        />
                }
            </S.ButtonArea>
        </S.Container>
    );
}

export default Profile;