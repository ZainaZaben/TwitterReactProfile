import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import classes from "./TrendsRow.module.css";
import PropTypes from "prop-types";

export default function TrendsSection(props) {
  return (
    <div className={classes.trend}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{props.type}.Trending</p>
        <FontAwesomeIcon
          className={classes.icon}
          icon={faEllipsis}
          style={{ color: `var(--paragraphsColor)`, cursor: "pointer" }}
        />
      </div>
      <p className={classes.name}>{props.name}</p>
      <p>{props.posts} Posts</p>
    </div>
  );
}

TrendsSection.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  posts: PropTypes.string.isRequired,
};
