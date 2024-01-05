import { Logo } from "src/modules/common/components";
import Burger from "./Burger";
import Header from "./Header";

function HeaderMobile() {
  return (
    <Header>
      <Header.Content>
        <Header.Cell className="flex items-center gap-4">
          <Burger />
          <Logo />
        </Header.Cell>
        <Header.Cell>right</Header.Cell>
      </Header.Content>
    </Header>
  );
}
export default HeaderMobile;
