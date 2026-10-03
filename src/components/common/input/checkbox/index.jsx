const Checkbox = ({
    id,
    label,
    checked,
    onChange
}) => {
    return (
        <label
            style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                cursor: "pointer",
                userSelect: "none",
            }}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={() => onChange(id)}
                style={{
                    accentColor: "var(--color-primary)"
                }}
            />
            <span
                className={checked ? "typo-title-1" : "typo-content-1"}
                style={{
                    color: checked ? "var(--color-primary)" : "var(--color-text-default)",
                }}
            >{label}</span>
        </label>
    );
};

export default Checkbox;