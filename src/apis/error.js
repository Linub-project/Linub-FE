export const getErrorMessage = (error) => {
    return error.response?.data?.message
        ?? error.message
        ?? "오류가 발생했습니다.";
};

export const getErrorCode = (error) => {
    return error.response?.data?.code;
};