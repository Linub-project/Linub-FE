const Hr = ({
    marginTop = "0",
    marginBottom = "0",
    bg = "var(--neutral-100)"
}) => {
    return (
        <hr
            style={{
                backgroundColor: bg,
                height: "1px",
                border: "none",
                width: "100%",
                marginTop: marginTop,
                marginBottom: marginBottom
            }}
        />
    );
}

export default Hr;