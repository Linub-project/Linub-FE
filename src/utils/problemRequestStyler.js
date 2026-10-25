export const getProblemRequestStyle = (status) => {
    if(status === "REVIEWING") {
        return {"text": "--color-secondary", "bg": "--color-secondary-bg", value: "심사 중"};
    } else if(status === "ACCEPT") {
        return {"text": "--color-primary", "bg": "--color-primary-bg", value: "승인"};
    } else if(status === "REJECT") {
        return {"text": "--color-warning", "bg": "--color-warning-bg", value: "반려"};
    }
}