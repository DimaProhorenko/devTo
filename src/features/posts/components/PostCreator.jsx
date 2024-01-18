import PropTypes from "prop-types";
import { renameUserFields } from "src/helpers/userUtils";
import { isoIntoDate } from "src/helpers/utils";
import { Button } from "src/modules/common/components";

import {
  ProfileDetail,
  ProfileHeader,
  ProfileImage,
  ProfileName,
  ProfileNameTag,
  ProfilePane,
  ProfilePaneContent,
} from "src/modules/profile/components";

function PostCreator({ author }) {
  const { firstName, lastName, username, profileImage, createdAt } =
    renameUserFields(author);
  return (
    <ProfilePane>
      <ProfilePaneContent>
        <ProfileHeader>
          <ProfileImage src={profileImage} alt={firstName} />
          <div>
            <ProfileNameTag
              firstName={firstName}
              lastName={lastName}
              username={username}
            />
          </div>
        </ProfileHeader>
        <Button size="full" variant="primary-bg">
          Follow
        </Button>
        <ProfileDetail title="Joined">{isoIntoDate(createdAt)}</ProfileDetail>
      </ProfilePaneContent>
    </ProfilePane>
  );
}

PostCreator.propTypes = {
  author: PropTypes.object.isRequired,
};

export default PostCreator;
