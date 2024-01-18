import PropTypes from "prop-types";

function ProfileImage({ src, alt }) {
  return (
    <div className="max-w-8 overflow-hidden rounded-full drop-shadow-lg">
      <img src={src} alt={alt} />
    </div>
  );
}

ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default ProfileImage;
