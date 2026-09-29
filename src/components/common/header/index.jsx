import profile1 from "@/assets/default/profile/profile1.png";
import bell_active from "@/assets/icon/icon_bell_active.svg";
import magnify from "@/assets/icon/icon_magnify.svg";
import logo from "@/assets/logo.svg";
import Button from "@/components/common/button/default";
import IconButton from "@/components/common/button/icon";
import ProfileImage from "@/components/common/profile";
import { MENU } from "@/constants/menu.js";
import { useAuth } from "@/contexts/authContext";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";

const Header = () => {
    const {
        user,
        isAuthenticated,
        isAuthReady
    } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedMenu, setSelectedMenu] = useState("HOME");

    const handleMenuSelect = (key, path) => {
        setSelectedMenu(key);
        navigate(`/${path}`);
    }

    useEffect(() => {
        const fetchSelectedMenu = () => {
            if(location.pathname === "/") {
                setSelectedMenu("HOME");
            } else if(location.pathname.startsWith("/dictionary")) {
                setSelectedMenu("DICTIONARY");
            } else if(location.pathname.startsWith("/exam")) {
                setSelectedMenu("EXAM");
            } else if(location.pathname.startsWith("lab")) {
                setSelectedMenu("LAB");
            } else if(location.pathname.startsWith("guide")) {
                setSelectedMenu("GUIDE");
            } else {
                setSelectedMenu("");
            }
        };

        fetchSelectedMenu();
    }, [location.pathname]);

    const profileUser = {
        name: user?.nickname,
        profileImage: user?.profileImage ?? profile1
    };

    return (
        <S.Container>
            <S.SubContainer>
                <S.LeftArea>
                    <S.LogoContainer onClick={() => handleMenuSelect(MENU[0].key, MENU[0].path)}>
                        <img src={logo} width={"32px"}/>
                        <S.LogoText className="typo-heading-1">Linub</S.LogoText>
                    </S.LogoContainer>
                    <S.DesktopMenuContainer>
                        {MENU.map((menu) => {
                            const isSelected = selectedMenu === menu.key;
                            return (
                                <S.MenuText
                                    key={menu.key}
                                    className={isSelected ? "typo-title-1" : "typo-content-1"}
                                    $isSelected={isSelected}
                                    onClick={() => handleMenuSelect(menu.key, menu.path)}
                                >
                                    {menu.label}
                                </S.MenuText>
                            );
                        })}
                    </S.DesktopMenuContainer>
                </S.LeftArea>
                <S.RightArea>
                    <S.SearchArea className="search-area">
                        <img src={magnify} />
                        <S.SearchInput />
                    </S.SearchArea>
                    {
                        isAuthReady  && isAuthenticated && <IconButton icon={bell_active} />
                    }
                    {isAuthReady && (
                        isAuthenticated ? (
                            <S.ProfileArea>
                                <ProfileImage
                                    user={profileUser}
                                    size={30}
                                />

                                <S.Nickname className="typo-title-1">
                                    {user?.nickname}
                                </S.Nickname>
                            </S.ProfileArea>
                        ) : (
                            <S.ProfileArea>
                                <Button
                                    size="small"
                                    text="로그인"
                                    variant="secondary"
                                    onClick={() =>
                                        navigate("/login")
                                    }
                                />

                                <Button
                                    size="small"
                                    text="회원가입"
                                    onClick={() =>
                                        navigate("/signup")
                                    }
                                />
                            </S.ProfileArea>
                        )
                    )}
                </S.RightArea>
            </S.SubContainer>
            <S.MobileMenuContainer>
                {MENU.map((menu) => {
                        const isSelected = selectedMenu === menu.key;
                        return (
                            <S.MenuText
                                key={menu.key}
                                className={isSelected ? "typo-title-1" : "typo-content-1"}
                                $isSelected={isSelected}
                                onClick={() => handleMenuSelect(menu.key, menu.path)}
                            >
                                {menu.label}
                            </S.MenuText>
                        );
                    })}
                    <S.SearchArea>
                        <img src={magnify} />
                        <S.SearchInput />
                    </S.SearchArea>
            </S.MobileMenuContainer>
        </S.Container>
    );
}

export default Header;