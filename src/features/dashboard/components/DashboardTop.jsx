import { useSelector } from "react-redux";
import {
  getUser,
  getUserBrandingColor,
  getUserImage,
} from "src/features/user/userSlice";
import { isoIntoDate } from "src/helpers/utils";
import { Card, Container, TopBg } from "src/modules/common/components";
import {
  ProfileBio,
  ProfileImage,
  ProfileNameTag,
} from "src/modules/profile/components";
import ProfileDate from "src/modules/profile/components/ProfileDate";

function DashboardTop() {
  const brandingColor = useSelector(getUserBrandingColor);
  const profileImage = useSelector(getUserImage);

  const { first_name, last_name, username, bio, created_at } =
    useSelector(getUser);

  return (
    username && (
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
            <Card.Body className="-mt-8 space-y-4 p-4 text-center md:-mt-12">
              <ProfileNameTag
                firstName={first_name}
                lastName={last_name}
                username={username}
                size="xl"
              />
              <ProfileBio>{bio}</ProfileBio>
              <ProfileDate>{isoIntoDate(created_at)}</ProfileDate>
            </Card.Body>
          </Card>
        </Container>
      </TopBg>
    )
  );
}
export default DashboardTop;
