import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import supabase from "src/client";
import Notifications from "src/features/notifications/Notifications";
import HeaderDesktop from "src/modules/header/components/HeaderDesktop";
import HeaderMobile from "src/modules/header/components/HeaderMobile";
import MobileMenuContainer from "src/modules/mobileMenu/components/MobileMenuContainer";

function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        setIsScreenSmall(true);
      } else {
        setIsScreenSmall(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isScreenSmall && (
        <>
          <HeaderMobile onOpenMenu={handleOpenMenu} />
          <AnimatePresence>
            {isMenuOpen && (
              <MobileMenuContainer onCloseMenu={handleCloseMenu} />
            )}
          </AnimatePresence>
        </>
      )}
      {!isScreenSmall && <HeaderDesktop />}
      <Notifications />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default AppLayout;
