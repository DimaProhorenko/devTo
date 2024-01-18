import clsx from "clsx";
import PropTypes from "prop-types";
import { renameUserFields } from "src/helpers/userUtils";
import { createMarkup, isoIntoDate } from "src/helpers/utils";

import { Card, Title } from "src/modules/common/components";
import {
  ProfileImage,
  ProfileName,
  ProfileNameTag,
} from "src/modules/profile/components/";

function Post({ children }) {
  return (
    <Card padding={false} className="space-y-4 p-6">
      {children}
    </Card>
  );
}

Post.propTypes = {
  children: PropTypes.any.isRequired,
};

Post.Title = function PostTitle({ children, size = "2xl" }) {
  return <Title size={size}>{children}</Title>;
};

Post.Title.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.oneOf(["sm", "xl"]),
};

Post.Tags = function PostTags({ children }) {
  return <div>{children}</div>;
};

Post.Tags.propTypes = {
  children: PropTypes.any.isRequired,
};

Post.Body = function PostBody({ children }) {
  return <div dangerouslySetInnerHTML={createMarkup(children)} />;
};

Post.Body.propTypes = {
  children: PropTypes.any.isRequired,
};

Post.Author = function PostAuthor({ author, createdAt }) {
  const { firstName, lastName, profileImage } = renameUserFields(author);
  return (
    <div className="flex items-center gap-x-4">
      <ProfileImage src={profileImage} alt={firstName} />
      <div>
        <ProfileName>
          {firstName} {lastName}
        </ProfileName>
        <small className="text-xs text-stone-600">
          Posted on {isoIntoDate(createdAt)}
        </small>
      </div>
    </div>
  );
};

Post.Author.propTypes = {
  author: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Post;
