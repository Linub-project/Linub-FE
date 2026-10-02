import * as S from "./styles";

const AdminProblemManagement = ({menu}) => {

    return (
        <S.Container>
            <span
                className="typo-heading-3"
                style={{color: "var(--color-text-primary)"}}
            >{menu?.label}</span>
        </S.Container>
    );
}

export default AdminProblemManagement;