import { Outlet } from "react-router-dom";
import HeaderMobile from "src/modules/header/components/HeaderMobile";
import MobileMenuContainer from "src/modules/mobileMenu/components/MobileMenuContainer";

function AppLayout() {
  return (
    <>
      <HeaderMobile />
      <MobileMenuContainer />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default AppLayout;
