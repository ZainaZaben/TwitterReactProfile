import { faEllipsis, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FollowBtn from "../FollowBtn/FollowBtn";
import classes from "./ProfileActions.module.css";

export default function ProfileActions() {
  return (
    <div className={classes.profileActions}>
      <FontAwesomeIcon icon={faEllipsis} className={classes.more} />
      <FontAwesomeIcon icon={faBell} className={classes.more} />
      <FollowBtn />
    </div>
  );
}
