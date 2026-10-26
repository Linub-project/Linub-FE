export const getPostTypeStyle = (legend) => {
    if(legend === "ANNOUNCEMENT") {
        return {"text": "--color-primary", "bg": "--color-primary-bg", value: "공지"};
    } else if(legend === "FREE") {
        return {"text": "--color-secondary", "bg": "--color-secondary-bg", value: "자유"};
    } else if(legend === "QNA") {
        return {"text": "--color-warning", "bg": "--color-warning-bg", value: "Q&A"};
    } else if(legend === "COMPLAINT") {
        return {"text": "--color-danger", "bg": "--color-danger", value: "건의/신고"};
    }
}