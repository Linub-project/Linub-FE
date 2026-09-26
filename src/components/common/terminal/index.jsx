const TerminalBG = ({content}) => {
    return (
        <div
            className="terminal typo-content-1"
            style={{
                width: "100%",
                padding: "16px 24px",
                color: "var(--white)",
                backgroundColor: "var(--color-terminal-bg)",
                borderRadius: "6px"
            }}
        >{content}</div>
    );
}

export default TerminalBG;