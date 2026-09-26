import CompareQueue from "@/components/common/compareQueue";
import Header from "@/components/common/header";
import { Outlet } from "react-router-dom";
import * as S from "./styles";

const MainLayout = () => {
  return (
    <S.Container>
      <Header />
      <Outlet />
      <CompareQueue />
    </S.Container>
  );
}

export default MainLayout;