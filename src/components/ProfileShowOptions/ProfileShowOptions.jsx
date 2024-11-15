import classes from "./ProfileShowOptions.module.css";

const options = ["Posts", "Replies", "Media", "Likes"];

export default function ProfileShowOptions() {
  return (
    <div className={classes.showList}>
      {options.map((item, index) => (
        <div className={classes.listItem} key={`profile-show-option-${index}`}>
          <a id="item" href="#item">
            {item}
          </a>
        </div>
      ))}
    </div>
  );
}
