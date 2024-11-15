import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ProfileHeader.module.css";
import PropTypes from "prop-types";

export default function ProfileHeader(props) {
  return (
    <div className={classes.pageHeader}>
      <FontAwesomeIcon
        className={`${classes.xIcon} ${classes.backArrow}`}
        icon={faArrowLeft}
        size="lg"
      />

      <div className={classes.bottom}>
        <h3>{props.title}</h3>
        <p>{props.postsCount} posts</p>
      </div>
    </div>
  );
}

ProfileHeader.propTypes = {
  title: PropTypes.string.isRequired,
  postsCount: PropTypes.string.isRequired,
};
