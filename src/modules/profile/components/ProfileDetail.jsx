import PropTypes from "prop-types";

function ProfileDetail({ title, children }) {
  return (
    <div>
      <h5 className="font-bold text-stone-800">{title}</h5>
      <p>{children}</p>
    </div>
  );
}

ProfileDetail.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default ProfileDetail;
