const EmptyStateGlobal = ({
    title = "등록된 항목이 없습니다.",
    description = "새로운 항목이 추가되면 여기에 표시됩니다."
}) => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                minHeight: "240px"
            }}
        >
            <span
                className="typo-title-1"
                style={{
                    color: "var(--color-text-primary)"
                }}
            >{title}</span>
            <span
                className="typo-content-1"
                style={{
                    color: "var(--color-text-default)"
                }}
            >{description}</span>
        </div>
    );
}

export default EmptyStateGlobal;