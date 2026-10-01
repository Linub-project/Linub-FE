import { api, publicApi } from "@/apis/instance";

export const getDictionaries = (pageable, condition) => {
    return api.get("/api/v1/dictionaries", {
        params: {
            ...condition,
            page: pageable.page,
            size: pageable.size,
            sort: `${pageable.sort},${pageable.direction}`
        }
    });
};

export const getDictionary = (id) => {
    return publicApi.get(`/api/v1/dictionaries/${id}`);
};

export const getSubcommand = (id, subcommandId) => {
    return publicApi.get(`/api/v1/dictionaries/${id}/subcommands/${subcommandId}`);
};

export const getDictionaryMemo = (id) => {
    return api.get(`/api/v1/dictionaries/${id}/memo`)
}

export const putDictionaryMemo = (id, content) => {
    return api.put(`/api/v1/dictionaries/${id}/memo`, content);
}

export const getDictionaryComparison = (leftId, rightId) => {
    return publicApi.get("/api/v1/dictionaries/compare", {
        params: {
            leftId, rightId
        }
    });
}