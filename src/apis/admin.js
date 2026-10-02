import { api, publicApi } from "@/apis/instance";

export const getAllDictionary = () => {
    return api.get("/api/v1/admin/dictionaries/all");
}

export const createDictionary = (form) => {
    return api.post("/api/v1/admin/dictionaries", form);
}