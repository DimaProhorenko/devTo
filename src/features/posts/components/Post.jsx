import PropTypes from "prop-types";
import { createMarkup } from "src/helpers/utils";

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

export default Post;
