import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpFromBracket,
  faChartSimple,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./PostDetails.module.css";
import PropTypes from "prop-types";

export default function PostDetails(props) {
  return (
    <div className={classes.postDetails}>
      <span className="comment-btn">
        <FontAwesomeIcon icon={faComment} className={classes.icon} />
        {props.commentCount}
      </span>
      <span className="retweet-btn">
        <FontAwesomeIcon icon={faRetweet} className={classes.icon} />
        {props.retweetCount}
      </span>
      <span className="like-btn">
        <FontAwesomeIcon icon={faHeart} className={classes.icon} />
        {props.likeCount}
      </span>
      <span className="view-btn">
        <FontAwesomeIcon icon={faChartSimple} className={classes.icon} />
        {props.viewCount}
      </span>
      <span>
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </span>
    </div>
  );
}

PostDetails.propTypes = {
  commentCount: PropTypes.string.isRequired,
  retweetCount: PropTypes.string.isRequired,
  likeCount: PropTypes.string.isRequired,
  viewCount: PropTypes.string.isRequired,
};
