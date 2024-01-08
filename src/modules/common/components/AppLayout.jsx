import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Notifications from "src/features/notifications/Notifications";
import HeaderMobile from "src/modules/header/components/HeaderMobile";
import MobileMenuContainer from "src/modules/mobileMenu/components/MobileMenuContainer";

function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderMobile onOpenMenu={handleOpenMenu} />
      <AnimatePresence>
        {isMenuOpen && <MobileMenuContainer onCloseMenu={handleCloseMenu} />}
      </AnimatePresence>
      <Notifications />
      <main className="py-5">
        <Outlet />
      </main>
    </>
  );
}
export default AppLayout;
