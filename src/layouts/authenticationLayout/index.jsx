import { Outlet } from "react-router-dom";
import * as S from './styles';

const AuthenticationLayout = () => {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
}

export default AuthenticationLayout;