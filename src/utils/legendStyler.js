export const getLegendStyle = (legend) => {
    if(legend === "Concept") {
        return {"text": "--color-secondary", "bg": "--color-secondary-bg"};
    } else if(legend === "Command") {
        return {"text": "--color-primary", "bg": "--color-primary-bg"};
    } else if(legend === "File") {
        return {"text": "--yellow-500", "bg": "--yellow-100"};
    }
}