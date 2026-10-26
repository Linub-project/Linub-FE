import * as C from "@/apis/certification";
import { getErrorMessage } from "@/apis/error";
import * as U from "@/apis/user";
import certified from "@/assets/icon/icon_certified.svg";
import Button from "@/components/common/button/default";
import Input from "@/components/common/input/default";
import ProfileImage from "@/components/common/profile";
import { useAuth } from "@/contexts/authContext";
import { useToast } from "@/contexts/toastContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Profile = ({user}) => {
    const { logout } = useAuth();
    const {showToast} = useToast();
    const navigate = useNavigate();
    
    const [profile, setProfile] = useState(user);
    const [certs, setCerts] = useState([]);
    const [openEditor, setOpenEditor] = useState(false);
    const [saving, setSaving] = useState(false);
    const [nickname, setNickname] = useState("");
    const [introduce, setIntroduce] = useState("");
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const fetchCertifications = async () => {
        try {
            const response = await C.getMyCertifications();
            setCerts(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchCertifications();
    }, []);

    useEffect(() => {
        setProfile(user);
    }, [user]);

    useEffect(() => {
        if (!file) {
            setImagePreview(null);
            return;
        }

        const url = URL.createObjectURL(file);
        setImagePreview(url);

        return () => URL.revokeObjectURL(url);
    }, [file]);

    const handleEdit = () => {
        setNickname(profile.nickname ?? "");
        setIntroduce(profile.introduce ?? "");
        setFile(null);
        setOpenEditor(true);
    };

    const handleCancel = () => {
        setFile(null);
        setOpenEditor(false);
    };

    const handleImageChange = (e) => {
        const selectedFile = e.target.files?.[0];

        if (!selectedFile) return;

        if (!selectedFile.type.startsWith("image/")) {
            showToast("이미지 파일만 업로드할 수 있습니다.");
            e.target.value = "";
            return;
        }

        if (selectedFile.size > 5 * 1024 * 1024) {
            showToast("이미지는 최대 5MB까지 업로드할 수 있습니다.");
            e.target.value = "";
            return;
        }

        setFile(selectedFile);
        e.target.value = "";
    };

    const handleSubmit = async () => {
        if (saving) return;

        if (!nickname.trim()) {
            showToast("닉네임을 입력해주세요.");
            return;
        }

        setSaving(true);

        try {
            const formData = new FormData();

            formData.append("nickname", nickname.trim());
            formData.append("introduce", introduce);
            formData.append("changeProfile", String(!!file));

            if (file) {
                formData.append("file", file);
            }

            const response = await U.updateProfile(formData);

            setProfile(response.data);

            setFile(null);
            setOpenEditor(false);

            showToast("프로필이 수정되었습니다.");
        } catch (error) {
            showToast(getErrorMessage(error));
        } finally {
            setSaving(false);
        }
    };

    const handleLogout = async () => {
        if(!user) return;
        try {
            await logout();
            navigate("/");
        } catch (error) {
            showToast(getErrorMessage(error));
        }
    }
    
    return (
        <S.Container>
            {openEditor ? (
                <label
                    style={{
                        cursor: "pointer",
                        flexShrink: 0
                    }}
                    title="프로필 사진 변경"
                >
                    {imagePreview ? (
                        <img
                            src={imagePreview}
                            alt="프로필 사진 미리보기"
                            style={{
                                width: "80px",
                                height: "80px",
                                borderRadius: "50%",
                                objectFit: "cover"
                            }}
                        />
                    ) : (
                        <ProfileImage
                            user={profile}
                            size={80}
                            font="24px"
                            disableNavigation
                        />
                    )}

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                    />
                </label>
            ) : (
                <ProfileImage
                    user={profile}
                    size={80}
                    font="24px"
                />
            )}
            <S.InformationArea>
                {openEditor ? (
                    <Input
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="닉네임을 입력해주세요."
                        style={{fontSize: "18px", fontWeight: "700"}}
                    />
                ) : (
                    <p
                        className="typo-heading-1"
                        style={{
                            color: "var(--color-text-primary)",
                            marginBottom: "4px"
                        }}
                    >
                        {profile.nickname}
                    </p>
                )}

                <p
                    className="typo-content-1"
                    style={{
                        color: "var(--color-text-default)",
                        marginBottom: "16px"
                    }}
                >
                    {profile.email}
                </p>

                {openEditor ? (
                    <Input
                        value={introduce}
                        onChange={(e) => setIntroduce(e.target.value)}
                        placeholder="자기소개를 입력해주세요."
                    />
                ) : (
                    <p
                        className="typo-content-1"
                        style={{
                            color: "var(--color-text-primary)",
                            marginBottom: "16px"
                        }}
                    >
                        {profile.introduce || "등록된 자기소개가 없습니다."}
                    </p>
                )}

                <p
                    className="typo-content-3"
                    style={{
                        color: "var(--color-text-default)",
                        marginBottom: "16px"
                    }}
                >
                    가입일 2026.02.12
                </p>

                {!profile.isCertified && (
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            width: "100%",
                            gap: "8px"
                        }}
                    >
                        {certs.map((item, idx) => (
                            <S.CertificationItem key={idx}>
                                <img
                                    src={certified}
                                    width="16px"
                                    height="16px"
                                    alt=""
                                />
                                <span
                                    className="typo-title-2"
                                    style={{
                                        color: "var(--color-primary)"
                                    }}
                                >
                                    {item.certification}
                                </span>
                            </S.CertificationItem>
                        ))}
                    </div>
                )}
            </S.InformationArea>

            <S.ButtonArea>
                {openEditor ? (
                    <>
                        <Button
                            text="취소"
                            variant="tertiary"
                            size="small"
                            disabled={saving}
                            onClick={handleCancel}
                        />
                        <Button
                            text={saving ? "저장 중..." : "저장하기"}
                            size="small"
                            disabled={saving || !nickname.trim()}
                            onClick={handleSubmit}
                        />
                    </>
                ) : (
                    <Button
                        text="프로필 수정"
                        variant="tertiary"
                        size="small"
                        onClick={handleEdit}
                    />
                )}

                {profile.role === "ADMIN" && (
                    <Button
                        text="관리자 페이지"
                        variant="secondary"
                        size="small"
                        onClick={() => navigate("/admin")}
                    />
                )}

                <Button
                    text="로그아웃"
                    variant="quinary"
                    size="small"
                    onClick={handleLogout}
                />
            </S.ButtonArea>
        </S.Container>
    );
};

export default Profile;