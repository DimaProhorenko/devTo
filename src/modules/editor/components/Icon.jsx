import PropTypes from "prop-types";

function Icon({ src, alt }) {
  return <img src={src} alt={alt} />;
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Icon;
