import { publicApi } from "./instance";

export const getHomeStatistics = () => {
    return publicApi.get("/api/v1/statistics/home");
}