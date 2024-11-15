import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import PostDetails from "../PostDetails/PostDetails";
import classes from "./Post.module.css";
import PropTypes from "prop-types";

export default function Post(props) {
  return (
    <div className={classes.post}>
      {props.pinned && (
        <p className={`${classes.grey} ${classes.miniFont} ${classes.postMiniDetail}`}>
          <FontAwesomeIcon icon={faThumbTack} />
          &nbsp;pinned
        </p>
      )}
      {props.reposted && (
        <p className={`${classes.grey} ${classes.postMiniDetail}`}>
          <FontAwesomeIcon icon={faRetweet} />
          &nbsp;reposted
        </p>
      )}
      <div className={classes.postFlexbox}>
        <div className={classes.profilePicDiv}>
          <img className={classes.profilePic} src={props.profilePic} alt="" />
        </div>
        <div className={classes.postContent}>
          <h4>{props.publisher}</h4>
          <p className={classes.grey}>
            {props.handel} . {props.date}
          </p>
          <p>{props.content}</p>
        </div>
      </div>
      <PostDetails {...props.details} />
    </div>
  );
}

Post.propTypes = {
  pinned: PropTypes.string.isRequired,
  reposted: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  handel: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};
