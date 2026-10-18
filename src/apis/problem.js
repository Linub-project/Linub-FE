import { api } from "./instance";

export const addProblemBookmarkToUser = (id) => {
    return api.post(`/api/v1/problems/${id}/bookmarks`);
}

export const getRecommendProblemWrongList = (size) => {
    return api.get("/api/v1/problems/wrong/recommend", {params: {size: size}});
}

export const getProblemWrongListReview = (ids) => {
    return api.get("/api/v1/problems/wrong/review", {
        params: {
            ids: ids
        },
        paramsSerializer: {
            indexes: null
        }
    });
}