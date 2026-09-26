import CompareQueue from "@/components/common/compareQueue";
import Header from "@/components/common/header";
import { Outlet } from "react-router-dom";
import Toast from "@/components/common/toast";
import * as S from "./styles";

const MainLayout = () => {
  return (
    <S.Container>
      <Header />
      <Outlet />
      <CompareQueue />
      <Toast />
    </S.Container>
  );
}

export default MainLayout;