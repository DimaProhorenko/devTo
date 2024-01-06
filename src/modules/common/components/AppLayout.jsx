import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderMobile from "src/modules/header/components/HeaderMobile";
import MobileMenuContainer from "src/modules/mobileMenu/components/MobileMenuContainer";

function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

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
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default AppLayout;
