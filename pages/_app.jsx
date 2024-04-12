import "styles/globals.css";
import Head from "next/head";
import { useCounter } from "hooks/useCounter";
import { useInputArray } from "hooks/useInputArray";
import { useBgColor } from "hooks/useBgColor";

export default function App({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />
    </div>
  );
}
