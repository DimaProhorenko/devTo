import PropTypes from "prop-types";
import Icon from "./Icon";

function IconText({ src, alt, children }) {
  return (
    <p className="flex items-center gap-3">
      <Icon src={src} alt={alt} />
      {children}
    </p>
  );
}

IconText.propTypes = {
  children: PropTypes.any,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default IconText;
