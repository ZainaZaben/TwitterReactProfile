import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import classes from "./UserProfile.module.css";
import PropTypes from "prop-types";

export default function UserProfile(props) {
  return (
    <div className={classes.user}>
      <img src={props.imgPath} alt="personal user profile" />
      <div className={classes.userInfo}>
        <p className={classes.userName}>{props.name}</p>
        <p className={classes.userEmail} title={props.email}>
          {props.email}
        </p>
      </div>
      <FontAwesomeIcon className={classes.ellipsis} icon={faEllipsis} />
    </div>
  );
};

UserProfile.propTypes = {
  imgPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
