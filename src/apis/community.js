import { api, publicApi } from "@/apis/instance";

export const getPostList = (pageable) => {
    return publicApi.get("/api/v1/posts/all", pageable);
};

