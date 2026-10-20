export const getCertificationStatusStyle = (legend) => {
    if(legend === "WAIT") {
        return {"text": "--color-text-label", "bg": "--color-bg-subtle", "value": "대기"};
    } else if(legend === "ACCEPT") {
        return {"text": "--color-primary", "bg": "--color-primary-bg", "value": "승인"};
    } else if(legend === "REJECT") {
        return {"text": "--color-danger", "bg": "--color-danger-bg", "value": "반려"};
    }
}