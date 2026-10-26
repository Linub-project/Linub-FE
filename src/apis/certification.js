import { api } from "./instance";

export const getMyCertificationRequests = () => {
    return api.get("/api/v1/users/certifications/requests/all");
}

export const getMyCertifications = () => {
    return api.get("/api/v1/users/certifications/all");
}

export const createCertificationRequest = (form) => {
    return api.post("/api/v1/users/certifications", form);
}

export const getAllCertificationRequests = (pageable) => {
    return api.get("/api/v1/admin/certifications/requests/all", {
        params: {
            page: pageable.page || 0,
            size: pageable.size || 20,
            sort: `${pageable.sort},${pageable.direction}`
        }
    });
}

export const updateCertificationRequest = (form, id) => {
    return api.patch(`/api/v1/admin/certifications/requests/${id}`, form);
}

