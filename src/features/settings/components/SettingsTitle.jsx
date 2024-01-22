import PropTypes from "prop-types";
import { Title } from "src/modules/common/components";

function SettingsTitle({ children }) {
  return <Title size="lg">{children}</Title>;
}

SettingsTitle.propTypes = {
  children: PropTypes.any.isRequired,
};

export default SettingsTitle;
