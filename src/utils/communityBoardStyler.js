export const getCommunityBoardStyle = (type) => {
    if (type === "ANNOUNCEMENT") {
        return { text: "var(--color-primary)", bg: "var(--color-primary-bg)", value: "공지사항" };
    } else if (type === "FREE") {
        return { text: "var(--color-secondary)", bg: "var(--color-secondary-bg)", value: "자유" };
    } else if (type === "QNA") {
        return { text: "var(--color-danger)", bg: "var(--color-danger-bg)", value: "QNA" };
    } else if (type === "COMPLAINT") {
        return { text: "var(--color-text-default)", bg: "var(--color-bg-subtle)", value: "건의/신고" };
    }
}