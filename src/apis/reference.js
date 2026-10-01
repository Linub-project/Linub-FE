import { publicApi } from "@/apis/instance";

export const getReferences = (referenceId) => {
    return publicApi.get(`/api/v1/references/${referenceId}`);
};
