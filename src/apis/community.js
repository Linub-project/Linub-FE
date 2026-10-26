import { api } from "@/apis/instance";

export const getPostList = (condition, pageable) => {
    return api.get("/api/v1/posts", {
        params: {
            ...condition,
            page: pageable.page || 0,
            size: pageable.size || 20,
            sort: `${pageable.sort},${pageable.direction}`
        }
    });
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

export const createComment = (id) => {
    return api.post(`/api/v1/posts/${id}/comments`);
}

export const updateComment = (postId, commentId, fix) => {
    return api.patch(`/api/v1/posts/${postId}/comments/${commentId}`, {
        params: {fix: fix}
    });
}