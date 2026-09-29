import axios from "axios";
import {
    getAccessToken,
    setAccessToken,
    clearAccessToken,
} from "@/utils/tokenStore";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const api = axios.create({
    baseURL: BASE_URL,
});

/*
 * Refresh Token 쿠키를 사용하는 인증 요청용
 *
 * login
 * reissue
 * logout
 *
 * 등에 사용 가능
 */
export const authApi = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});


/*
 * 일반 API 요청에 Access Token 자동 첨부
 */
api.interceptors.request.use(
    (config) => {
        const accessToken = getAccessToken();

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

let refreshPromise = null;

export const reissueAccessToken = async () => {
    if (!refreshPromise) {
        refreshPromise = authApi
            .post("/api/v1/auth/reissue")
            .then((response) => {
                const newAccessToken = response.data.token;

                setAccessToken(newAccessToken);

                return newAccessToken;
            })
            .finally(() => {
                refreshPromise = null;
            });
    }

    return refreshPromise;
};

api.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;

        if (!originalRequest) {
            return Promise.reject(error);
        }

        if (error.response?.status !== 401) {
            return Promise.reject(error);
        }

        /*
         * 이미 재발급 후 다시 요청했던 API인데
         * 또 401이 발생한 경우
         */
        if (originalRequest._retry) {
            clearAccessToken();
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {
            const newAccessToken = await reissueAccessToken();

            originalRequest.headers = originalRequest.headers ?? {};

            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            return api(originalRequest);

        } catch (refreshError) {
            clearAccessToken();

            return Promise.reject(refreshError);
        }
    }
);