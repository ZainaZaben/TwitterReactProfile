import FollowBtn from "../FollowBtn/FollowBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import classes from "./MiniProfile.module.css";
import PropTypes from "prop-types";

export default function MiniProfile(props) {
  return (
    <div className={classes.miniProfile}>
      <img src={props.img} alt="" style={{ width: 40 }} />
      <div className={classes.miniProfileFlex}>
        <div className={classes.titleAndHandel}>
          <p>
            {props.title}
            {props.verified ? (
              <FontAwesomeIcon icon={faCircleCheck} className={classes.verified} />
            ) : null}
          </p>
          <p className={`${classes.grey} ${classes.miniText}`}>{props.handel}</p>
        </div>
        <FollowBtn />
      </div>
    </div>
  );
}

MiniProfile.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  verified: PropTypes.string.isRequired,
  handel: PropTypes.string.isRequired,
};
