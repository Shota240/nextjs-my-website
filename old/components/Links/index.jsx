import classes from "components/Links/Links.module.css";
import ReactHtmlParser from "react-html-parser";

export const Links = (props) => {
  return (
    <div className={classes.grid}>
        <button onClick={props.handleReduce}>減らす</button>
      {props.items.map((item) => {
        return (
          <a
            key={item.href}
            href={item.href}
            className={classes.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{ReactHtmlParser(item.title)}</h2>
            <p>{ReactHtmlParser(item.description)}</p>
          </a>
        );
      })}
    </div>
  );
}
