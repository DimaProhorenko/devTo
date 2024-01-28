import PropTypes from "prop-types";

function Icon({ src, alt }) {
  return <img src={src} alt={alt} className="w-6" />;
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Icon;
