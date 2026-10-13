import { api } from "./instance";

export const addProblemBookmarkToUser = (id) => {
    return api.post(`/api/v1/problems/${id}/bookmarks`);
}