import { Outlet } from "react-router-dom";
import * as S from "./styles";
import Header from "@/components/common/header";

const MainLayout = () => {
  return (
    <S.Container>
      <Header />
      <Outlet />
    </S.Container>
  );
}

export default MainLayout;