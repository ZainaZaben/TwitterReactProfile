import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faLink } from "@fortawesome/free-solid-svg-icons";
import classes from "./ProfileDetails.module.css";

export default function ProfileDetails() {
  return (
    <div className={classes.profileDetails}>
      <h3>React</h3>
      <p className={classes.handle}>@reactjs</p>
      <br />
      <p className={classes.description}>
        The library for web and native user interfaces
      </p>
      <div className={classes.links}>
        <FontAwesomeIcon className={classes.grey} icon={faLink} />
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          react.dev
        </a>
        <FontAwesomeIcon className={classes.grey} icon={faCalendarDays} />
        <p className={`${classes.joiningDatep} ${classes.grey}`}>Joined July 2013</p>
        <br />
        <a
          className={classes.followsDetails}
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/reactjs/following"
        >
          267 <span className={classes.grey}>Following</span>
        </a>
        <a
          className={classes.followsDetails}
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/reactjs/verified_followers"
        >
          708.1K <span className={classes.grey}>Followers</span>
        </a>
      </div>
      <p className={`${classes.followsPeople} ${classes.grey}`}>
        Not followed by anyone you’re following
      </p>
    </div>
  );
}
