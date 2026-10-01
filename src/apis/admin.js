import { api, publicApi } from "@/apis/instance";

export const getAllDictionary = () => {
    return api.get("/api/v1/admin/dictionaries/all");
}