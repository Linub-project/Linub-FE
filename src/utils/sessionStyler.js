export const getSessionStyle = (status) => {
    if(status === "STOPPED") {
        return {"text": "--color-warning", "bg": "--color-warning-bg", "content": "중단"};
    } else if(status === "ABORTED") {
        return {"text": "--color-text-label", "bg": "--color-bg-subtle", "content": "미완료"};
    } else {
        return {"text": "--color-primary", "bg": "--color-primary-bg", "content": status === "IN_PROGRESS" ? "진행 중" : "완료"};
    }
}