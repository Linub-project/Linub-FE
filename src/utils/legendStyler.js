export const getLegendStyle = (legend) => {
    if(legend === "CONCEPT") {
        return {"text": "--color-secondary", "bg": "--color-secondary-bg"};
    } else if(legend === "COMMAND") {
        return {"text": "--color-primary", "bg": "--color-primary-bg"};
    } else if(legend === "FILE") {
        return {"text": "--yellow-500", "bg": "--yellow-100"};
    }
}