import { createContext, useContext, useState } from "react";

const ProblemReviewContext = createContext(null);

export const ProblemReviewProvider = ({ children }) => {
    const [problems, setProblems] = useState([]);

    const clearProblems = () => {
        setProblems([]);
    };

    return (
        <ProblemReviewContext.Provider
            value={{
                problems,
                setProblems,
                clearProblems
            }}
        >
            {children}
        </ProblemReviewContext.Provider>
    );
};

export const useProblemReview = () => {
    const context = useContext(ProblemReviewContext);

    if (!context) {
        throw new Error(
            "useProblemReview must be used within ProblemReviewProvider"
        );
    }

    return context;
};