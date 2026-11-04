import { api } from "./instance";

export const searchDictionaries = (keyword, pageable) => {
    return api.get("/api/v1/search/dictionaries", {params: {
        keyword: keyword,
        page: pageable.page,
        size: pageable.size,
    }});
}

export const searchPosts = (keyword, pageable) => {
    return api.get("/api/v1/search/posts", {params: {
        keyword: keyword,
        page: pageable.page,
        size: pageable.size,
    }});
}