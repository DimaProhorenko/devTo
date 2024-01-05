import { Outlet } from "react-router-dom";
import HeaderMobile from "src/modules/header/components/HeaderMobile";

function AppLayout() {
  return (
    <>
      <HeaderMobile />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default AppLayout;
