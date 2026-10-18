const ScoreText = ({
    score,
    typo = "typo-heading-1",
    status
}) => {
    const getScoreColor = () => {
        if(score >= 60) {
            return "var(--color-primary)";
        } else {
            return "var(--color-danger)"
        }
    }

    if(status === "IN_PROGRESS" || status === "STOPPED") {
        return (
            <span
                className={typo}
                style={{
                    color: "var(--color-text-label)"
                }}
            >
                -
            </span>
        );
    }

    return (
        <span
            className={typo}
            style={{
                color: getScoreColor()
            }}
        >
            {score} 점
        </span>
    );
}

export default ScoreText;