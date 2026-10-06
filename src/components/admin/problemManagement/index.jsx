import Button from "@/components/common/button/default";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const AdminProblemManagement = ({menu}) => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <span
                className="typo-heading-3"
                style={{color: "var(--color-text-primary)"}}
            >{menu?.label}</span>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px"
                }}
            >
                <Button
                    text="+ Problem"
                    size="small"
                    onClick={() => navigate("/admin/problem/addProblem")}
                />
            </div>
        </S.Container>
    );
}

export default AdminProblemManagement;