import Link from "next/link";
// import React from "react";
// import classes from "./Headline.module.css";

export function Header(props) {
  return (
    <header>
        <Link href="/">
            Index
        </Link>
        <Link href="/about">
            About
        </Link>
    </header>
  );
}
