import classes from "./SidebarRow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export default function SidebarRow(props) {
  return (
    <li className={classes.rowItem}>
      <a className={classes.rowItemLabelStyle} href="#row-item">
        <span
          className={`${classes.iconContainer} ${
            typeof props.icon === "string" ? classes.customIconContainer : ""
          }`}
        >
          {typeof props.icon === "object" ? (
            <FontAwesomeIcon className={classes.fontIcon} icon={props.icon} />
          ) : (
            <img
              className={classes.customIcon}
              src={props.icon}
              alt={props.title}
            />
          )}
        </span>
        <span>{props.title}</span>
      </a>
    </li>
  );
}

SidebarRow.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
};
