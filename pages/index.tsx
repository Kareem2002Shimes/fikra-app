import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Header from "@/components/home/Header";
function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>home page</title>
      </Head>
      <Header />
      <main className="text-white">Content</main>
    </Fragment>
  );
}

export default HomePage;
