import Toast from "@/components/common/toast";
import { Outlet } from "react-router-dom";
import * as S from './styles';

const AuthenticationLayout = () => {
  return (
    <S.Container>
      <Outlet />
      <Toast />
    </S.Container>
  );
}

export default AuthenticationLayout;