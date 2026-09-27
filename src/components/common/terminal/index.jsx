import { useToast } from "@/contexts/toastContext";

const TerminalBG = ({
    content,
    language = "SHELL"
}) => {
    const { showToast } = useToast();

    const handleCopyToClipBoard = () => {
        navigator.clipboard.writeText(content);
        showToast("클립보드에 복사 완료");
    }

    return (
        <div
            className="terminal typo-content-1"
            style={{
                width: "100%",
                padding: "16px 24px",
                color: "var(--white)",
                backgroundColor: "var(--color-terminal-bg)",
                borderRadius: "6px",
                cursor: "pointer",
                whiteSpace: "normal",
                wordBreak: "break-all"
            }}
            title="클릭하여 복사"
            onClick={() => handleCopyToClipBoard()}
        >{language === "SHELL" ? "$ " : ""}{content}</div>
    );
}

export default TerminalBG;