import { api, publicApi } from "@/apis/instance";

export const getAllDictionary = () => {
    return api.get("/api/v1/admin/dictionaries/all");
}

export const createDictionary = (form) => {
    return api.post("/api/v1/admin/dictionaries", form);
}

export const getAllCategories = () => {
    return api.get("/api/v1/admin/categories/all");
}

export const getAllRelatedInfo = (id) => {
    return api.get(`/api/v1/admin/dictionaries/${id}/relatedInfo`);
}

export const putRelatedInfo = (id, form) => {
    return api.put(`/api/v1/admin/dictionaries/${id}/relations`, form);
}
