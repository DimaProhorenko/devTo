import PropTypes from "prop-types";
import { useGetUserByIdQuery } from "src/api";
import { createMarkup, isoIntoDate } from "src/helpers/utils";

import { Card } from "src/modules/common/components";

function Post({ children }) {
  return <Card className="space-y-4">{children}</Card>;
}

Post.propTypes = {
  children: PropTypes.any.isRequired,
};

Post.Title = function PostTitle({ children }) {
  return (
    <h2 className="text-4xl font-bold text-stone-800 md:text-5xl lg:text-6xl">
      {children}
    </h2>
  );
};

Post.Title.propTypes = {
  children: PropTypes.any.isRequired,
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
  const {
    first_name: firstName,
    last_name: lastName,
    profile_image: profileImage,
  } = author;
  return (
    <div>
      <div>
        <img src={profileImage} alt={firstName} />
      </div>
      <div>
        <h4 className="text-md font-medium text-stone-800 md:text-lg lg:text-xl">
          {firstName} {lastName}
        </h4>
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
