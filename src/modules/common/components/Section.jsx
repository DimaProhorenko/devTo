import PropTypes from "prop-types";
import { Container } from ".";

function Section({ children, container = true }) {
  return (
    <section className="pb-4 pt-24">
      {container ? <Container>{children}</Container> : children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.any.isRequired,
  container: PropTypes.bool,
};

export default Section;
