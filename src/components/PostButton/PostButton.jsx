import classes from "./PostButton.module.css";

export default function PostButton() {
  return (
    <>
      <button className={classes.postButton} type="button">
        Post
      </button>
    </>
  );
}
