import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import classes from "./Search.module.css";

export default function Search() {
  return (
    <div className={classes.search}>
      <FontAwesomeIcon className={classes.searchMagnifier} icon={faMagnifyingGlass} />
      <input type="search" placeholder="Search" />
    </div>
  );
}
