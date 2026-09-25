import profile1 from "@/assets/default/profile/profile1.png";
import bell_active from "@/assets/icon/icon_bell_active.svg";
import magnify from "@/assets/icon/icon_magnify.svg";
import logo from "@/assets/logo.svg";
import IconButton from "@/components/common/button/icon";
import ProfileImage from "@/components/common/profile";
import { MENU } from "@/constants/menu.js";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";

const userDummy = {
    name: "용감한 다람쥐",
    profileImage: profile1
}

const Header = () => {
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

    return (
        <S.Container>
            <div style={{display: "flex"}}>
                <S.LogoContainer onClick={() => handleMenuSelect(MENU[0].key, MENU[0].path)}>
                    <img src={logo} width={"32px"}/>
                    <S.LogoText className="typo-heading-1">Linub</S.LogoText>
                </S.LogoContainer>
                <S.MenuContainer>
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
                </S.MenuContainer>
            </div>
            <div style={{display: "flex", gap: "16px"}}>
                <S.SearchArea>
                    <img src={magnify} />
                    <S.SearchInput />
                </S.SearchArea>
                <IconButton icon={bell_active} />
                <S.ProfileArea>
                    <ProfileImage user={userDummy} size={30}/>
                    <S.Nickname className="typo-title-1">{userDummy.name}</S.Nickname>
                </S.ProfileArea>
            </div>
        </S.Container>
    );
}

export default Header;