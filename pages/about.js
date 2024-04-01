import Head from "next/head";
import { Inter } from "next/font/google";
import classes from "@/styles/Home.module.css";
import { Links } from "../components/links";
import { Main } from "../components/Main";
import { Header } from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Head>
        <title>About page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${classes.main} ${inter.className}`}>
        <Main page="about"/>

        <Links />
      </main>
    </>
  );
}
