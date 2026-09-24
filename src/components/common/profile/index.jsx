const ProfileImage = ({user, size}) => {
    return (
        <img src={user.profileImage} 
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
                cursor: "pointer"
            }}
        />
    );
}

export default ProfileImage;