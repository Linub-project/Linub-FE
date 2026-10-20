import { api } from "./instance";

export const addProblemBookmarkToUser = (id) => {
    return api.post(`/api/v1/problems/${id}/bookmarks`);
}

export const getAllProblemBookmarks = () => {
    return api.get("/api/v1/problems/bookmarks/all");
}

export const getProblemBookmark = (id) => {
    return api.get(`/api/v1/problems/bookmarks/${id}`);
}

export const deleteProblemBookmark = (form) => {
    return api.delete(`/api/v1/problems/bookmarks`, {data: form});
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

export const getAllProblemWrongs = (pageable) => {
    return api.get("/api/v1/problems/wrong", {
        params: {
            page: pageable.page,
            size: pageable.size,
            sort: `${pageable.sort},${pageable.direction}`
        }
    });
}