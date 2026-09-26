import { createContext, useContext, useRef, useState } from "react";

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
    const [message, setMessage] = useState(null);
    const timerRef = useRef(null);

    const showToast = (message, duration = 3000) => {
        setMessage(message);

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            setMessage(null);
            timerRef.current = null;
        }, duration);
    };

    const hideToast = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        setMessage(null);
    };

    return (
        <ToastContext.Provider
            value={{
                message,
                showToast,
                hideToast,
            }}
        >
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error(
            "useToast must be used within ToastProvider"
        );
    }

    return context;
};