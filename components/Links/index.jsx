import classes from "components/Links/Links.module.css";
import ReactHtmlParser from "react-html-parser";

export function Links({items, handleReduce}) {

  return (
    <div className={classes.grid}>
        <button onClick={handleReduce}>減らす</button>
      {items.map((item) => {
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
