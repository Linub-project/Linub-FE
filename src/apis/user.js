import { api } from "@/apis/instance";

export const getMyInfo = () => {
    return api.get("/api/v1/users/me");
};

export const getMyStatistic = () => {
    return api.get("/api/v1/users/me/statistics");
}