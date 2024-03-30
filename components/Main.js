import classes from "./Main.module.css";
import Image from "next/image";
import {Headline} from "../components/Headline";

export function Main(props) {
  return (
    <>
        <Headline page={props.page}>
            <code className={classes.code}>page/{props.page}.js</code>
        </Headline>

        <div className={classes.center}>
            <Image
            className={classes.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
            />
        </div>
    </>
  );
}
