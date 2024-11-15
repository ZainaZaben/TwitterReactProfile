import TrendsRow from "../TrendsRow/TrendsRow";
import { trends } from "../../data/trends";
import ShowMore from "../ShowMore/ShowMore";
import classes from "./TrendsSection.module.css";

export default function TrendsSection() {
  return (
    <div className={classes.board}>
      <h3>Trends For You</h3>
      {trends.map((trend, index) => (
        <TrendsRow
          key={`trend-${index}`}
          type={trend.type}
          name={trend.name}
          posts={trend.posts}
        />
      ))}
      <ShowMore />
    </div>
  );
}
