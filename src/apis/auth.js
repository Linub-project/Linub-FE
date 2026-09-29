import { authApi } from "@/apis/instance";

export const signup = (form) => {
    return authApi.post("/api/v1/auth/signup", form);
};

