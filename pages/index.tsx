import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Header from "@/components/home/Header";
import Landing from "@/components/home/Landing";
function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>home page</title>
      </Head>
      <Header />
      <main>
        <Landing />
      </main>
    </Fragment>
  );
}

export default HomePage;
