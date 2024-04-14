import "styles/globals.css";
import { useCounter } from "hooks/useCounter";
import { useInputArray } from "hooks/useInputArray";
import { useBgColor } from "hooks/useBgColor";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <Main />
        <NextScript /> */}
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} {...counter} {...inputArray} />
      </body>
    </Html>
    // <div>
    //   <Head>
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <Component {...pageProps} {...counter} {...inputArray} />
    // </div>
  );
}

export default RootLayout;
