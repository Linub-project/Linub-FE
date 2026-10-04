import * as A from "@/apis/admin";
import Button from "@/components/common/button/default";
import * as S from "./styles";

const AdminStatisticManagement = ({menu}) => {

    const handleRefreshButtonClick = async () => {
        try {
            await A.refreshStatistics();
        } catch (error) {

        }
    }

    return (
        <S.Container>
            <span
                className="typo-heading-3"
                style={{color: "var(--color-text-primary)"}}
            >{menu?.label}</span>

            <Button 
                text="통계 갱신"
                size="small"
                onClick={() => handleRefreshButtonClick()}
            />
        </S.Container>
    );
}

export default AdminStatisticManagement;