import { useNavigate } from "react-router-dom";

const ProfileImage = ({user, size}) => {
    const navigate = useNavigate();

    return (
        <img src={user.profileImage} 
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
                cursor: "pointer"
            }}
            onClick={() => navigate(`/mymenu`)}
        />
    );
}

export default ProfileImage;