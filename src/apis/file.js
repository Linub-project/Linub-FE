import { api } from "./instance";

export const downloadPostFile = (id, path) => {
    return api.get(`/api/v1/posts/${id}/file/download`, {params: {path}});
}