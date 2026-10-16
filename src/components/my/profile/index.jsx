import ProfileImage from "@/components/common/profile";
import * as S from "./styles";
import Button from "@/components/common/button/default";

const Profile = ({user}) => {
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
                        color: "var(--color-text-default)"
                    }}
                >2026.02.12 가입</p>
            </S.InformationArea>
            <Button
                text="프로필 수정"
                variant="tertiary"
                size="small"
            />
        </S.Container>
    );
}

export default Profile;