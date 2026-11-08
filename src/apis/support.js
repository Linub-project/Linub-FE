import { publicApi } from "./instance";

export const createInquiry = (form) => {
    return publicApi.post("/api/v1/supports", form);
}

export const getInquiry = (uuid, form) => {
    return publicApi.post(`/api/v1/supports/${uuid}`, form);
}