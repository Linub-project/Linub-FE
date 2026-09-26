const Hr = ({
    marginTop = "0",
    marginBottom = "0"
}) => {
    return (
        <hr
            style={{
                backgroundColor: "var(--neutral-100)",
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