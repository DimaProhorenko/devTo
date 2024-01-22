import PropTypes from "prop-types";

function ProfileImage({ src, alt }) {
  return (
    <div className="h-8 w-8 overflow-hidden rounded-full drop-shadow-lg md:h-10 md:w-10 lg:h-12 lg:w-12">
      <img src={src} alt={alt} />
    </div>
  );
}

ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default ProfileImage;
