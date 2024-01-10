import items from "src/fixtures/profileNavigation";
import { LinkBlock } from "src/modules/common/components";

function ProfileNav() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <LinkBlock to={item.path} className="capitalize">
            {item.name}
          </LinkBlock>
        </li>
      ))}
    </ul>
  );
}
export default ProfileNav;
