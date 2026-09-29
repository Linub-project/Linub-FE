import { api } from "@/apis/instance";

export const getMyInfo = () => {
    return api.get("/api/v1/users/me");
};