import { api } from "./instance";

export const getAllJudgements = (requestId) => {
    return api.get(`/api/v1/problems/request/${requestId}/judgements/all`);
}

export const addJudgement = (requestId, form) => {
    return api.post(`/api/v1/problems/request/${requestId}/judgements`, form);
}