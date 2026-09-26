import { createContext, useContext, useState } from "react";

const CompareQueueContext = createContext(null);

export const CompareQueueProvider = ({ children }) => {
    const [queue, setQueue] = useState([]);

    const add = (item) => {
        if (queue.length >= 2) return "비교 항목은 최대 2개까지 추가할 수 있습니다.";

        if (queue.length > 0) {
            if (item.title === queue[0].title) return "이미 추가된 항목입니다.";
            if (item.type !== queue[0].type) return "같은 종류의 사전만 비교할 수 있습니다.";
        }

        setQueue((prev) => [...prev, item]);
    };

    const remove = (id) => {
        setQueue((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    return (
        <CompareQueueContext.Provider
            value={{
                queue,
                add,
                remove
            }}
        >
            {children}
        </CompareQueueContext.Provider>
    );
};

export const useCompareQueue = () => {
    const context = useContext(CompareQueueContext);

    if (!context) {
        throw new Error(
            "useCompareQueue must be used within CompareQueueProvider"
        );
    }

    return context;
};