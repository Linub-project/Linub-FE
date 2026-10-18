import { getSessionStyle } from "@/utils/sessionStyler";

const SessionStatusChip = ({status}) => {
    return (
        <span
            className="typo-content-3"
            style={{
                color: `var(${getSessionStyle(status).text})`,
                backgroundColor: `var(${getSessionStyle(status).bg})`,
                padding: "2px 6px"
            }}
        >{getSessionStyle(status).content}</span>
    );
}

export default SessionStatusChip;