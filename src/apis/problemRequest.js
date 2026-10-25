import { api } from "./instance";

export const getMyProblemRequest = (pageable) => {
    return api.get(`/api/v1/problems/request/me`, {
        params: {
            page: pageable.page || 0,
            size: pageable.size || 20,
            sort: `${pageable.sort},${pageable.direction}`
        }
    });
}

export const getJudgableProblemRequest = (pageable) => {
    return api.get(`/api/v1/problems/request/judgable`, {
        params: {
            page: pageable.page || 0,
            size: pageable.size || 20,
            sort: `${pageable.sort},${pageable.direction}`
        }
    });
}

export const getProblemRequest = (id) => {
    return api.get(`/api/v1/problems/request/${id}`);
}

export const createProblemRequest = (form) => {
    return api.post(`/api/v1/problems/request`, form);
}
