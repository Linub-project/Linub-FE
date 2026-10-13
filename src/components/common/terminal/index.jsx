import { useToast } from "@/contexts/toastContext";

const TerminalBG = ({
    content,
    language = "SHELL"
}) => {
    const { showToast } = useToast();

    const displayContent = language === "SHELL"
        ? content.split("\n").map(line => `$ ${line}`).join("\n")
        : content;

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
                whiteSpace: "pre-wrap",
                wordBreak: "break-all"
            }}
            title="클릭하여 복사"
            onClick={() => handleCopyToClipBoard()}
        >{displayContent}</div>
    );
}

export default TerminalBG;