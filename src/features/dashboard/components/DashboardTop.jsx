import { useSelector } from "react-redux";
import {
  getUser,
  getUserBrandingColor,
  getUserImage,
} from "src/features/user/userSlice";
import { Card, Container, Title, TopBg } from "src/modules/common/components";
import { ProfileImage, ProfileNameTag } from "src/modules/profile/components";

function DashboardTop() {
  const brandingColor = useSelector(getUserBrandingColor);
  const profileImage = useSelector(getUserImage);

  const { first_name, last_name, username } = useSelector(getUser);

  return (
    <TopBg color={brandingColor} bgHeight="h-44">
      <Container mw="4xl">
        <Card overflow="visible" className="relative" padding={false}>
          <ProfileImage
            src={profileImage}
            alt=""
            size="2xl"
            className="relative mx-auto -translate-y-1/2"
            border={true}
            style={{ border: `8px solid ${brandingColor}` }}
          />
          <Card.Body className="-mt-8 px-4 text-center md:-mt-12">
            <Title>This is a card</Title>
            <ProfileNameTag
              firstName={first_name}
              lastName={last_name}
              username={username}
            />
          </Card.Body>
        </Card>
      </Container>
    </TopBg>
  );
}
export default DashboardTop;
