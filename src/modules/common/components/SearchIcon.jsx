import PropTypes from "prop-types";
import { Button } from ".";
import searchImg from "src/assets/icons/search.svg";

function SearchIcon({ to }) {
  return (
    <Button to={to} variant="gray" size="square">
      <img src={searchImg} alt="search" className="w-full max-w-4" />
    </Button>
  );
}

SearchIcon.propTypes = {
  to: PropTypes.string,
};
export default SearchIcon;
