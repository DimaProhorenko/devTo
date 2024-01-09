import PropTypes from "prop-types";

function ProfileImage({ src, alt }) {
  return (
    <div className="max-w-10 overflow-hidden rounded-full">
      <img src={src} alt={alt} />
    </div>
  );
}

ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default ProfileImage;
