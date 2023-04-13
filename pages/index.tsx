import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>home page</title>
      </Head>
      <main>
        <div className="text-white">
          <h1>HomePage</h1>
          <h3>
            <Link href="/auth/login">Login</Link>
          </h3>
          <h3>
            <Link href="/auth/signup">Signup</Link>
          </h3>
        </div>
      </main>
    </Fragment>
  );
}
