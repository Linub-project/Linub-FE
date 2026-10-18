import { api } from "./instance";

export const getProblemRequest = (pageable) => {
    return api.get(`/api/v1/problems/request`, {
        params: {
            page: pageable.page || 0,
            size: pageable.size || 20,
            sort: `${pageable.sort},${pageable.direction}`
        }
    });
}
