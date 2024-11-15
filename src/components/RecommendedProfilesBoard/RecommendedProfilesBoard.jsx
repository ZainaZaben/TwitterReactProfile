import classes from "./RecommendedProfilesBoard.module.css";
import PropTypes from "prop-types";

export default function RecommendedProfiles(props) {
  return <div className={classes.board}>{props.children}</div>;
}

RecommendedProfiles.propTypes = {
  children: PropTypes.string.isRequired,
};
