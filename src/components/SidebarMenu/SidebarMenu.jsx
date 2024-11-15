import SidebarRow from "../SidebarRow/SidebarRow";
import PostButton from "../PostButton/PostButton";
import UserProfile from "../UserProfile/UserProfile";
import classes from "./SidebarMenu.module.css";
import { icons } from "../../data/SidebarIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { user } from "../../data/UserProfileData";

export const SidebarMenu = () => {
  return (
    <div className={classes.sidebarMenu}>
      <FontAwesomeIcon className={classes.xIcon} icon={faXTwitter} size="2xl" />
      <ul className={classes.sidebarUnorderedList}>
        {icons.map((item, index) => (
          <SidebarRow
            key={`sidebar-index-${index}`}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </ul>

      <PostButton />

      <div className={classes.userContainer}>
        {user.map((item, index) => (
          <UserProfile
            key={`user_profile_${index}`}
            imgPath={item.imgPath}
            name={item.name}
            email={item.email}
          />
        ))}
      </div>
    </div>
  );
};
