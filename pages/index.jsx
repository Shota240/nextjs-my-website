import Head from "next/head";
import { Inter } from "next/font/google";
import classes from "styles/Home.module.css";
import { Links } from "components/Links";
import { Main } from "components/Main";
import { Header } from "components/Header";
import { useCallback, useState } from "react";

const inter = Inter({ subsets: ["latin"] });


const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs<span>-&gt;</span>",
    description:
      "Find in-depth information about Next.js features and&nbsp;API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn <span>-&gt;</span>",
    description:
      "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates <span>-&gt;</span>",
    description:
      "Discover and deploy boilerplate example Next.js&nbsp;projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy <span>-&gt;</span>",
    description:
      "Instantly deploy your Next.js site to a shareable URL<br>with&nbsp;Vercel.",
  },
];

export default function Home(props) {
  const {
    count,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  } = props;

  
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Index page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <list key={item}>{item}</list>;
        })}
      </ul>

      <main className={`${classes.main} ${inter.className}`}>
        <Main page="index" />

        <Links items={items} handleReduce={handleReduce}/>
      </main>
    </>
  );
}
