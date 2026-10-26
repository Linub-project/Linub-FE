import { useNavigate } from "react-router-dom";

const IMAGE_BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/images`;

const ProfileImage = ({user, size, font = "14px", weight = "600", disableNavigation = false}) => {
    const navigate = useNavigate();
    const first = user.nickname.charAt(0);

    const handleClick = () => {
        if (!disableNavigation) {
            navigate("/mypage");
        }
    };

    return (
        <>
        {
            user.profileUrl ?
                <img src={`${IMAGE_BASE_URL}/${user.profileUrl}`} 
                    style={{
                        width: size,
                        height: size,
                        borderRadius: "50%",
                        cursor: "pointer",
                        objectFit: "cover"
                    }}
                    onClick={handleClick}
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
                    onClick={handleClick}
                >
                    {first}
                </div>
        }
        </>
    );
}

export default ProfileImage;