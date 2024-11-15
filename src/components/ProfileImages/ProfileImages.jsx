import classes from "./ProfileImages.module.css";
import PropTypes from "prop-types";

export default function ProfileImages(props) {
  return (
    <div className={classes.profileImages}>
      <img
        className={classes.BackgroundImg}
        src={props.bgImg}
        alt="profile background"
      />
      <img
        className={classes.personalProfileImg}
        src={props.profileImg}
        alt="personal profile"
      />
    </div>
  );
}

ProfileImages.propTypes = {
  bgImg: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
};
