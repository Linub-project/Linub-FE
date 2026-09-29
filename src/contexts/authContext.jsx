import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import {
    getAccessToken,
    setAccessToken,
    clearAccessToken,
    subscribeAccessToken,
} from "@/utils/tokenStore";

import {
    authApi,
    reissueAccessToken,
} from "@/apis/instance";

import * as U from "@/apis/user";
import * as A from "@/apis/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessTokenState] = useState(getAccessToken());
    const [user, setUser] = useState(null);
    const [isAuthReady, setIsAuthReady] = useState(false);

    /*
     * tokenStore 값이 바뀌면
     * React 상태도 같이 갱신
     */
    useEffect(() => {
        const unsubscribe = subscribeAccessToken(
            (token) => {
                setAccessTokenState(token);
            }
        );

        return unsubscribe;
    }, []);

    const fetchUser = async () => {
        const response = await U.getMyInfo();

        setUser(response.data);

        return response.data;
    };

    /*
     * 페이지 새로고침 시
     *
     * Access Token은 메모리에서 사라졌으므로
     * Refresh Token Cookie로 재발급 시도
     */
    useEffect(() => {
        let mounted = true;

        const initializeAuth = async () => {
            try {
                const newAccessToken = await reissueAccessToken();

                if (newAccessToken) {
                    await fetchUser();
                }
            } catch {
                clearAccessToken();
            } finally {
                if (mounted) {
                    setIsAuthReady(true);
                }
            }
        };

        initializeAuth();

        return () => {
            mounted = false;
        };
    }, []);


    const signup = async (signupData) => {
        const response = await A.signup(signupData);

        const newAccessToken = response.data.accessToken;

        setAccessToken(newAccessToken);

        await fetchUser();

        return response.data;
    };


    const login = async (loginData) => {
        const response = await authApi.post(
            "/api/v1/auth/login",
            loginData
        );

        const newAccessToken = response.data.token;

        setAccessToken(newAccessToken);
        
        await fetchUser();

        return response.data;
    };


    const logout = async () => {
        try {
            await authApi.post("/api/v1/auth/logout");
        } finally {
            clearAccessToken();
            setUser(null);
        }
    };


    return (
        <AuthContext.Provider
            value={{
                accessToken,
                user,
                isAuthenticated: !!accessToken,
                isAuthReady,
                signup,
                login,
                logout,
                fetchUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used within AuthProvider"
        );
    }

    return context;
};