let accessToken = null;

const listeners = new Set();

export const getAccessToken = () => {
    return accessToken;
};

export const setAccessToken = (token) => {
    accessToken = token;

    listeners.forEach((listener) => {
        listener(token);
    });
};

export const clearAccessToken = () => {
    setAccessToken(null);
};

export const subscribeAccessToken = (listener) => {
    listeners.add(listener);

    return () => {
        listeners.delete(listener);
    };
};