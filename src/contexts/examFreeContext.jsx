import { createContext, useContext, useState } from "react";

const ExamFreeContext = createContext(null);

export const ExamFreeProvider = ({ children }) => {
    const [problems, setProblems] = useState([]);

    // 기존 문제 목록에 추가
    const addProblems = (newProblems) => {
        setProblems(prev => [
            ...prev,
            ...newProblems
        ]);
    };

    // 모든 문제 삭제
    const clearProblems = () => {
        setProblems([]);
    };

    return (
        <ExamFreeContext.Provider
            value={{
                problems,
                setProblems,
                addProblems,
                clearProblems
            }}
        >
            {children}
        </ExamFreeContext.Provider>
    );
};

export const useExamFree = () => {
    const context = useContext(ExamFreeContext);

    if (!context) {
        throw new Error("useExamFree must be used within ExamFreeProvider");
    }

    return context;
};