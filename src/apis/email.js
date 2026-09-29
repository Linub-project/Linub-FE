import { authApi } from "@/apis/instance";

export const sendMailForSignup = (form) => {
    return authApi.post("/api/v1/email/send/signup", form);
};
export const sendMailForReset = (form) => {
    return authApi.post("/api/v1/email/send/signup", form);
};
export const sendMailForWithdraw = (form) => {
    return authApi.post("/api/v1/email/send/signup", form);
};

export const verifyCode = (form) => {
    return authApi.post("/api/v1/email/verify", form);
}