import MobileMenu from "./MobileMenu";
import { HOME } from "src/constants/routes";

import homeIcon from "src/assets/icons/home.svg";
import tagIcon from "src/assets/icons/tag.svg";
import devIcon from "src/assets/icons/dev.svg";
import tubeIcon from "src/assets/icons/tube.svg";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";

function MobileMenuContainer() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      animate(".mobile-menu-top", { translateX: 0, y: 0 });
      animate(".mobile-menu-bot", { opacity: 0.2 });
    };
    animation();
  }, [animate]);

  return (
    <MobileMenu innerRef={scope}>
      <MobileMenu.TopPane />
      <MobileMenu.BotPane />
      <MobileMenu.Nav>
        <MobileMenu.Item>
          <MobileMenu.Link iconPath={homeIcon} to={HOME}>
            Home
          </MobileMenu.Link>
        </MobileMenu.Item>
        <MobileMenu.Item>
          <MobileMenu.Link iconPath={tagIcon} to={HOME}>
            Tags
          </MobileMenu.Link>
        </MobileMenu.Item>
        <MobileMenu.Item>
          <MobileMenu.Link iconPath={devIcon} to={HOME}>
            About
          </MobileMenu.Link>
        </MobileMenu.Item>
        <MobileMenu.Item>
          <MobileMenu.Link iconPath={tubeIcon} to={HOME}>
            Contact
          </MobileMenu.Link>
        </MobileMenu.Item>
      </MobileMenu.Nav>
    </MobileMenu>
  );
}
export default MobileMenuContainer;
