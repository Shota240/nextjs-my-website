import styles from "@/styles/Home.module.css";
import Image from "next/image";
import {Headline} from "../components/Headline";

export function Main(props) {
  return (
    <>
        <Headline page={props.page}>
            <code className={styles.code}>page/{props.page}.js</code>
        </Headline>

        <div className={styles.center}>
            <Image
            className={styles.logo}
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
