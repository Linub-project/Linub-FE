import Hr from "@/components/common/layout/hr";
import { AMDIN_SIDEBAR } from "@/constants/adminSidebar";
import { useAuth } from "@/contexts/authContext";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [selectedMenu, setSelectedMenu] = useState("DASHBOARD");

    const handleMenuSelect = (key, path) => {
            setSelectedMenu(key);
            navigate(`/admin/${path}`);
        }
    
        useEffect(() => {
            const fetchSelectedMenu = () => {
                if(location.pathname === "/dashboard") {
                    setSelectedMenu("DASHBOARD");
                } else if(location.pathname.startsWith("/admin/user")) {
                    setSelectedMenu("USER");
                } else if(location.pathname.startsWith("/admin/dictionary")) {
                    setSelectedMenu("DICTIONARY");
                } else if(location.pathname.startsWith("/admin/problem")) {
                    setSelectedMenu("PROBLEM");
                } else if(location.pathname.startsWith("/admin/certification")) {
                    setSelectedMenu("CERTIFICATION");
                } else if(location.pathname.startsWith("/admin/statistic")) {
                    setSelectedMenu("STATISTIC")
                }
            };
    
            fetchSelectedMenu();
        }, [location.pathname]);

    return (
        <S.Container>
            <div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        padding: "16px",
                        alignItems: "flex-start",
                        gap: "12px"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "8px"
                        }}
                    >
                        <span
                            className="typo-title-2"
                            style={{
                                padding: "2px 6px",
                                color: "var(--white)",
                                backgroundColor: "var(--color-primary)"
                            }}
                        >{user.role}</span>
                        <span
                            className="typo-title-1"
                            style={{color: "var(--color-text-primary)"}}
                        >{user.nickname}</span>
                    </div>
                    <p
                        className="typo-title-2"
                        style={{color: "var(--color-text-default)"}}
                    >junsu120202@gmail.com</p>
                </div>
                <Hr />
                <S.MenuArea>
                    {
                        AMDIN_SIDEBAR.map((menu) => {
                            const isSelected = selectedMenu === menu.key;
                            return (
                                <S.Menu 
                                    key={menu.id}
                                    className={isSelected ? "typo-title-1" : "typo-content-1"}
                                    $isSelected={isSelected}
                                    onClick={() => handleMenuSelect(menu.key, menu.path)}
                                >
                                    {menu.label}
                                </S.Menu>
                            )
                        })
                    }
                </S.MenuArea>
            </div>
            <div>
                <Hr />
                <S.BackButton
                    className="typo-content-3"
                    style={{
                        display: "flex",
                        padding: "12px 16px",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        color: "var(--color-text-default)"
                    }}
                    onClick={() => navigate("/")}
                >
                    ← Linub으로 돌아가기
                </S.BackButton>
            </div>
        </S.Container>
    );
}

export default Sidebar;