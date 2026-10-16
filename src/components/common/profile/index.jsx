import { useNavigate } from "react-router-dom";

const ProfileImage = ({user, size, font = "14px", weight = "600"}) => {
    const navigate = useNavigate();
    const first = user.nickname.charAt(0);
    return (
        <>
        {
            user.profileImage ?
                <img src={user.profileImage} 
                    style={{
                        width: size,
                        height: size,
                        borderRadius: "50%",
                        cursor: "pointer",
                    }}
                    onClick={() => navigate(`/mypage`)}
                />
                :
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "var(--color-primary)",
                        width: size,
                        minWidth: size,
                        height: size,
                        borderRadius: "50%",
                        cursor: "pointer",
                        color: "var(--white)",
                        fontSize: font,
                        fontWeight: weight,
                    }}
                    onClick={() => navigate(`/mypage`)}
                >
                    {first}
                </div>
        }
        </>
    );
}

export default ProfileImage;