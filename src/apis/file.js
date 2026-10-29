import { api } from "./instance";

export const downloadPostFile = (id, path) => {
    return api.get(`/api/v1/posts/${id}/file/download`, {params: {path}, responseType: "blob"});
}

export const downloadPdfFile = (id) => {
    return api.get(`/api/v1/exam-pdfs/${id}/file/download`, {responseType: "blob"});
}
