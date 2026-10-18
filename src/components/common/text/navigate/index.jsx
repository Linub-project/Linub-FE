import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavigateText = ({
    text = "",
    path
}) => {
    const navigate = useNavigate();
    return (
        <Text
            className="typo-content-3"
            onClick={() => navigate(path)}
            style={{
                cursor: "pointer",
                color: "var(--color-primary)"
            }}
        >{text} →</Text>
    );
}

export default NavigateText;

const Text = styled.span`
    cursor: pointer;
    color: var(--color-primary);
    width: fit-content;
    &:hover {
        text-decoration: underline;
    }
`