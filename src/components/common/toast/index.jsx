import { useToast } from "@/contexts/toastContext";
import * as S from "./styles";

const Toast = () => {
    const { message, hideToast } = useToast();

    if (!message) return null;

    return (
        <S.Container onClick={hideToast}>
            <span className="typo-content-2">
                {message}
            </span>
        </S.Container>
    );
};

export default Toast;