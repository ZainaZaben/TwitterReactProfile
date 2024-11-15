import classes from "./TermsAndConditions.module.css";

let links = [
  { name: "Term of services" },
  { name: "Term of services" },
  { name: "Privacy Policy" },
  { name: "Accessibility" },
  { name: "Ads info" },
  { name: "More..." },
];

export default function TermsAndConditions() {
  return (
    <div className={classes.morelinks}>
      {links.map((link, index) => {
        return (
          <a href="#link" key={index}>
            {link.name}
          </a>
        );
      })}
    </div>
  );
}
