import { api } from "@/apis/instance";

export const getPostList = (condition = {}, pageable = {}) => {
    return api.get("/api/v1/posts", {
        params: {
            ...condition,
            page: pageable.page ?? 0,
            size: pageable.size ?? 20,
            sort: `${pageable.sort ?? "id"},${pageable.direction ?? "DESC"}`
        }
    });
};

export const getPost = (id) => {
    return api.get(`/api/v1/posts/${id}`);
}

export const createPost = (form) => {
    return api.post("/api/v1/posts", form);
}

export const getMyComments = (pageable) => {
    return api.get("/api/v1/comments/me", {
        params: {
            page: pageable.page || 0,
            size: pageable.size || 20,
            sort: `${pageable.sort},${pageable.direction}`
        }
    });
}

export const getAllPostComments = (id, pageable) => {
    return api.get(`/api/v1/posts/${id}/comments/all`, {
        params: {
            page: pageable.page || 0,
            size: pageable.size || 20,
            sort: `${pageable.sort},${pageable.direction}`
        }
    });
}

export const createComment = (id, form) => {
    return api.post(`/api/v1/posts/${id}/comments`, form);
}

export const updateComment = (postId, commentId, fix) => {
    return api.patch(`/api/v1/posts/${postId}/comments/${commentId}`, {
        params: {fix: fix}
    });
}