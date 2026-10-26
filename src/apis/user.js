import { api } from "@/apis/instance";

export const getMyInfo = () => {
    return api.get("/api/v1/users/me");
};

export const getMyStatistic = () => {
    return api.get("/api/v1/users/me/statistics");
}

export const getProfileStatistic = () => {
    return api.get("/api/v1/users/profile/statistics");
}

export const getRecordStatistic = () => {
    return api.get("/api/v1/users/record/statistics");
}